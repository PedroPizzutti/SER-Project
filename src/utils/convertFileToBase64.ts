export const convertFileToBase64 = (file?: File) => {
  return new Promise<any>((resolve, reject) => {
    const writeFile = new FileReader();
    if (file) {
      writeFile.readAsDataURL(file);
      writeFile.onload = () => {
        if (writeFile.result) {
          resolve(writeFile.result);
        } else {
          resolve(null);
        }
      };
    } else {
      resolve(null);
      writeFile.onerror = (error) => {
        reject(error);
      };
    }
  });
};
