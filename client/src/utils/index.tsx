import { savePDF } from '@progress/kendo-react-pdf'; 

/** image onto base64 */
export function fileToBase64(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export function getOptions(data: any, label: string, value: string) {
  if (data?.length > 0) {
    const options: any[] = [];
    data
      .filter((item: any) => item.status === 'active')
      .map((item: any) => {
        options.push({ label: item[label], value: item[value] });
      });
    return options;
  }
  return [];
}

export function generatePdf(html: any) {
  savePDF(html, {
    paperSize: 'A4',
    fileName: 'form.pdf',
    margin: 3,
  });
}
