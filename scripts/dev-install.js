require("dotenv").config();

// scripts/dev-install.js
const { execSync } = require("child_process");

const PACKAGE = "com.truth.lumen.v1";
const DEVICE_IP = process.env.LUMEN_DEVICE_IP || "192.168.137.199:5555";
const GRADLE_CMD = process.platform === "win32" ? "gradlew.bat" : "./gradlew";

// Parse CLI flags
const isDevice = process.argv.includes("--device");
const isEmulator = process.argv.includes("--emulator");

function run(command) {
    console.log(`> ${command}`);
    execSync(command, { stdio: "inherit" });
}

console.log(`📦 Target: ${isDevice ? "Real Device" : "Emulator"}`);
if (isDevice) {
    console.log(`🔌 Connecting to device at ${DEVICE_IP}...`);
    run(`adb connect ${DEVICE_IP}`);
}

// Uninstall old APK
console.log(`🧹 Uninstalling package ${PACKAGE}...`);
run(`adb uninstall ${PACKAGE}`);

// Build & install debug APK
console.log("📱 Building & installing debug APK...");
run(`${GRADLE_CMD} -p android installDebug`);

// Start Expo dev client
console.log("🚀 Starting Expo dev client...");
run(`npx expo start --dev-client`);
