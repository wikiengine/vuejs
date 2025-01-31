import { promises as fs } from "fs"; // fs.promises 사용
import chalk from "chalk";  

const html = "index.html"; 
const ejs = "layout.ejs";  

async function renameFile() {
  try {
    await fs.rename(html, ejs);  // fs.promises.rename로 변경
    console.log(`${chalk.green("✔")} 확장자 변경 성공`);
  } catch (error) {
    console.log(`${chalk.red("✘")} 확장자 변경 실패: ${error}`);
  }
}

renameFile();