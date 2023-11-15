/** image onto base64 */
export function convertToBase64(file: any) {
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

export function getOptions(data: any) {
  if (data?.length > 0) {
    const options: any[] = [];
    data.map((item: any) => {
      options.push({ label: item.name, value: item.name });
    });
    return options;
  }
  return [];
}
