import XLSX from "xlsx";

//Create the ExcelUtility class
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
    //reads all rows from a particular Excel sheet.
      getSheetData(sheetName) {
        const workbook = this.readExcelFile();
        const worksheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json(worksheet);
    }
    // getCellValue(sheetName, row, column) {
    //     const workbook = this.readExcelFile();
    // const worksheet = workbook.Sheets[sheetName];

    // const cellAddress = `${column}${row}`;

    // return worksheet[cellAddress]?.v;
    // }

}