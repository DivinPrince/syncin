const useFileHandler = (file: any) => {
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.addEventListener("loadend", () => {
    return reader.result;
  });
  return null
}
export default useFileHandler