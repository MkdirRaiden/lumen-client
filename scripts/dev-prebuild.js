require("dotenv").config();
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ENV
const PACKAGE_NAME = process.env.LUMEN_PACKAGE_NAME || "com.truth.lumen.v1";
const DEVICE_IP = process.env.LUMEN_DEVICE_IP || "192.168.31.94:5555";
const SDK_PATH = process.env.ANDROID_SDK_ROOT || process.env.ANDROID_HOME;

// Paths
const LOCAL_PROPERTIES = "android/local.properties";
const GRADLE_CMD = process.platform === "win32" ? "gradlew.bat" : "./gradlew";

// 🧰 Helpers
function run(cmd, options = {}) {
    console.log(`> ${cmd}`);
    execSync(cmd, {
        stdio: "inherit",
        cwd: options.cwd || process.cwd(),
    });
}

function isDeviceConnected() {
    try {
        const output = execSync("adb devices").toString();
        return output
            .split("\n")
            .some(line => line.includes("device") && !line.includes("unauthorized") && !line.includes("List"));
    } catch {
        return false;
    }
}

function connectRealDevice() {
    console.log(`🔌 Trying to connect to device at ${DEVICE_IP}...`);
    try {
        run(`adb connect ${DEVICE_IP}`);
        if (!isDeviceConnected()) {
            throw new Error("Device did not appear after connect");
        }
        console.log("✅ Device connected.");
    } catch (err) {
        console.error("❌ ADB connection failed. Is your device on the same network?");
        process.exit(1);
    }
}

function uninstallApp() {
    console.log(`🧹 Uninstalling previous build of ${PACKAGE_NAME}...`);
    try {
        run(`adb uninstall ${PACKAGE_NAME}`);
    } catch {
        console.warn("⚠️ App may not be installed yet. Skipping uninstall.");
    }
}

function ensureLocalProperties() {
    if (!fs.existsSync(LOCAL_PROPERTIES)) {
        if (!SDK_PATH) {
            console.error("❌ ANDROID_SDK_ROOT or ANDROID_HOME not set.");
            process.exit(1);
        }
        const escaped = SDK_PATH.replace(/\\/g, "\\\\");
        fs.writeFileSync(LOCAL_PROPERTIES, `sdk.dir=${escaped}`, "ascii");
        console.log(`✅ Created local.properties with SDK path: ${escaped}`);
    } else {
        console.log("✅ local.properties exists");
    }
}

function runPrebuild() {
    console.log("⚙️ Running Expo prebuild...");
    run("npx expo prebuild");
}

function buildAndInstallAPK() {
    if (!isDeviceConnected()) {
        console.error("❌ No Android device connected! Please connect one and try again.");
        process.exit(1);
    }

    console.log("📱 Building APK and installing...");
    run(`${GRADLE_CMD} installDebug`, {
        cwd: path.join(__dirname, "..", "android"),
    });
}

function startDevClient() {
    console.log("🚀 Starting Expo Dev Client...");
    run("npx expo start --dev-client");
}

// 🧩 Main
function main() {
    connectRealDevice();
    uninstallApp();
    ensureLocalProperties();
    runPrebuild();
    buildAndInstallAPK();
    startDevClient();
}

main();
