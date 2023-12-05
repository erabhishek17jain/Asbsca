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

export const calculatePeriod = (amount: number, turnover: number) => {
  let period;
  const duration = (amount * 12) / turnover;
  if (amount === 0) {
    period = '-';
  } else if (duration > 11.99) {
    period = (duration / 12).toFixed(2) + ' Years';
  } else if (duration > 1) {
    period = duration.toFixed(2) + ' Months';
  } else if (duration > 11.99) {
    period = ((duration * 365) / 12).toFixed(2) + ' Days';
  }
  return period;
};

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

export function generatePdf(html: any, fileName: string) {
  savePDF(html, {
    paperSize: 'A4',
    fileName: fileName + '.pdf',
  });
}
