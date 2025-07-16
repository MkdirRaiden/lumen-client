require("dotenv").config();
const { execSync } = require("child_process");

const DEVICE_IP = process.env.LUMEN_DEVICE_IP || "192.168.31.94:5555";

function run(cmd) {
    console.log(`> ${cmd}`);
    execSync(cmd, { stdio: "inherit" });
}

console.log(`🔌 Connecting to device at ${DEVICE_IP}...`);
run(`adb connect ${DEVICE_IP}`);

console.log("🚀 Starting Expo dev client...");
run("npx expo start --dev-client");
