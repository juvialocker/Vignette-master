
import XLSX from 'xlsx';
export const exportTableData = (context, filename: string)=> {
  // tslint:disable-next-line:no-any
  (context.$refs.table as any).exportCsv({
    filename,
    original : true,
  });
};

/**
 *
 * @param data =[[字段],[数据]]
 * @param fileName
 */
// tslint:disable-next-line:variable-name
export const _export = (data: Array<any>,fileName: string)=> {
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws);
  XLSX.writeFile(wb, fileName);
};


