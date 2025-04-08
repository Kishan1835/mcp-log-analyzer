import fs from "fs";
import path from "path";

export function getLatestLog(): string {
    const logPath = path.join("logs", "error.log");

    try {
        const data = fs.readFileSync(logPath, "utf-8");
        const lines = data.trim().split("\n");
        return lines.reverse().find(line => line.trim().length > 0) || "No logs found.";
    } catch (error) {
        console.error("❌ Failed to read log:", error);
        return "Error reading log file.";
    }
}
