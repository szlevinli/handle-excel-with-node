// cSpell: disable-next-line
import ExcelJS from 'exceljs';

const workBook = new ExcelJS.Workbook();

const readDataFromExcel = async () => {
  await workBook.xlsx.readFile('./excel_files/staff_list.xlsx');
  workBook.eachSheet((workSheet, id) => {
    console.log(`workSheet id = ${id} workSheet name is ${workSheet.name}`);
    workSheet.eachRow((row, rowNumber) => {
      const rowArray: ExcelJS.CellValue[] = [];
      row.eachCell((cell) => {
        rowArray.push(cell.value);
      });
      console.log(`row id_${rowNumber}: ${rowArray}`);
    });
  });
};

readDataFromExcel();
