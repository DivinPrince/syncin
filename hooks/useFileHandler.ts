import { useMemo } from "react";

const useFileHandler = (file: any) => {
  const reader = new FileReader();
   let data = ''
  reader.readAsDataURL(file);
  reader.addEventListener("loadend", () => {
    data = reader.result as string
  });

  return useMemo(()=>({
      data,
   }),[data])
}
export default useFileHandler