// import { test } from "@playwright/test";
// import ExcelUtility from "../utils/ExcelUtility";
// const excel = new ExcelUtility("./test-data/Testdata.xlsx");
// const users = excel.getSheetData("Users");
// test("Read Users from Excel", async () => {
//     console.log("Users:", users);
//     for (const user of users) {
//         console.log("First Name:", user.firstName);
//         console.log("Last Name:", user.lastName);
//         console.log("Email:", user.email);
//         console.log("Password:", user.password);
//     }
// });
import XLSX from "xlsx";

export default class ExcelUtility {

    constructor(filePath) {
        this.filePath = filePath;
    }

    readExcelFile() {
        return XLSX.readFile(this.filePath);
    }

    getSheetNames() {
        const workbook = this.readExcelFile();
        return workbook.SheetNames;
    }

    getSheetData(sheetName) {
        const workbook = this.readExcelFile();
        const worksheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json(worksheet);
    }

}