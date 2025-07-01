require("dotenv").config();

// scripts/prebuild.js

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const useEmulator = args.includes("--emulator");
const useDevice = args.includes("--real-device");
const skipBuild = args.includes("--no-build");

const PACKAGE_NAME = "com.truth.lumen.v1";
const ANDROID_DIR = "android";
const LOCAL_PROPERTIES = path.join(ANDROID_DIR, "local.properties");
const SDK_PATH = process.env.ANDROID_SDK_ROOT || process.env.ANDROID_HOME;

function run(command) {
    console.log(`> ${command}`);
    execSync(command, { stdio: "inherit" });
}

function cleanBuildDirs() {
    const dirs = ["android", "ios", ".expo", ".expo-shared"];
    dirs.forEach(dir => {
        if (fs.existsSync(dir)) {
            console.log(`🧹 Removing ${dir}...`);
            fs.rmSync(dir, { recursive: true, force: true });
        }
    });
}

function ensureLocalProperties() {
    if (!fs.existsSync(LOCAL_PROPERTIES)) {
        if (!SDK_PATH) {
            console.error("❌ ANDROID_SDK_ROOT or ANDROID_HOME not set");
            process.exit(1);
        }
        const escapedPath = SDK_PATH.replace(/\\/g, "\\\\");
        fs.writeFileSync(LOCAL_PROPERTIES, `sdk.dir=${escapedPath}`, {
            encoding: "ascii",
        });
        console.log(`✅ Created local.properties with SDK path: ${escapedPath}`);
    } else {
        console.log("✅ local.properties already exists");
    }
}

function uninstallApp() {
    try {
        console.log("📦 Uninstalling previous build...");
        run(`adb uninstall ${PACKAGE_NAME}`);
    } catch {
        console.warn("⚠️ App not found or device not connected");
    }
}

function connectRealDevice() {
    const deviceIp = process.env.LUMEN_DEVICE_IP || "192.168.137.199";
    console.log(`🔌 Connecting to real device at ${deviceIp}...`);
    run(`adb connect ${deviceIp}`);
}

function buildAndInstallAPK() {
    console.log("📦 Building APK and installing...");
    const gradleCmd = process.platform === "win32" ? "gradlew.bat" : "./gradlew";
    run(`${gradleCmd} -p android installDebug`);
}

async function main() {
    if (useDevice) {
        connectRealDevice();
    }

    uninstallApp();
    cleanBuildDirs();

    console.log("⚙️ Running expo prebuild...");
    run("npx expo prebuild --clean");

    ensureLocalProperties();

    if (!skipBuild) {
        buildAndInstallAPK();
    }

    console.log("🚀 Starting Expo Dev Client...");
    run("npx expo start --dev-client");
}

main().catch((err) => {
    console.error("❌ Build failed:", err.message);
    process.exit(1);
});
