import { getLatestLog } from "./logReader";
import { analyzeLog } from "./geminiClient";

async function runAnalyzer() {
    console.log("🔍 Reading latest error log...");

    const log = getLatestLog();
    console.log(`\n🧾 Log:\n${log}\n`);

    console.log("🧠 Analyzing log using Gemini...");
    const result = await analyzeLog(log);

    console.log("\n✅ Analysis Result:");
    console.log(result);
}

runAnalyzer();
