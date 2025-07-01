require("dotenv").config();

// scripts/dev-connect.js
const { execSync } = require("child_process");

const DEVICE_IP = process.env.LUMEN_DEVICE_IP || "192.168.137.199:5555";
const isDevice = process.argv.includes("--device");

function run(cmd) {
    console.log(`> ${cmd}`);
    execSync(cmd, { stdio: "inherit" });
}

if (isDevice) {
    console.log(`🔌 Connecting to device at ${DEVICE_IP}...`);
    run(`adb connect ${DEVICE_IP}`);
}

console.log("🚀 Starting Expo dev client...");
run("npx expo start --dev-client");
