import { promises as fs } from "fs";
import path from "path";
import chalk from "chalk";

//원본
const html = "index.html";
//ejs
const ejs = "layout.ejs";

async function modifyAndRenameFile() {
  try {
    let data = await fs.readFile(html, "utf8");

    data = data.replace(/(src|href)=["'](\/assets\/)/g, '$1="/skins/vuejs$2');

    await fs.writeFile(html, data, "utf8");
    console.log(`${chalk.green("✔")} HTML 수정 성공`);

    await fs.rename(html, ejs);
    console.log(`${chalk.green("✔")} 확장자 변경 성공`);
  } catch (error) {
    console.log(`${chalk.red("✘")} 작업 실패: ${error}`);
  }
}

modifyAndRenameFile();
