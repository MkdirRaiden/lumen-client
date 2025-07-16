require("dotenv").config();
const { execSync } = require("child_process");
const path = require("path");

const PACKAGE = process.env.LUMEN_PACKAGE_NAME || "com.truth.lumen.v1";
const DEVICE_IP = process.env.LUMEN_DEVICE_IP || "192.168.31.94:5555";

function run(command, options = {}) {
    console.log(`> ${command}`);
    execSync(command, {
        stdio: "inherit",
        cwd: options.cwd || process.cwd(),
    });
}

function isDeviceConnected() {
    try {
        const output = execSync("adb devices").toString();
        return output
            .split("\n")
            .some((line) => line.includes("device") && !line.includes("List"));
    } catch {
        return false;
    }
}

console.log("📦 Target: Real Device");

// Try to connect wirelessly
if (!isDeviceConnected()) {
    console.log(`🔌 Connecting to device at ${DEVICE_IP}...`);
    try {
        run(`adb connect ${DEVICE_IP}`);
    } catch {
        console.error("❌ Failed to connect to device via ADB.");
        process.exit(1);
    }
}

if (!isDeviceConnected()) {
    console.error("❌ No real device connected. Exiting.");
    process.exit(1);
}

// Uninstall old APK (ignore if fails)
console.log(`🧹 Uninstalling package ${PACKAGE}...`);
try {
    run(`adb uninstall ${PACKAGE}`);
} catch {
    console.warn("⚠️ Could not uninstall package — it may not be installed yet.");
}

// Build & install the debug APK from android folder
console.log("📱 Building & installing debug APK...");
const gradleCmd = process.platform === "win32" ? "gradlew.bat" : "./gradlew";
run(`${gradleCmd} installDebug`, { cwd: path.join(__dirname, "..", "android") });

// Start Expo Dev Client
console.log("🚀 Starting Expo dev client...");
run("npx expo start --dev-client");
