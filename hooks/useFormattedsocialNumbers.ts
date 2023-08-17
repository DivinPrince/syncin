const useFormattedsocialNumbers = (number: any) => {
       if (number < 1000) {
         return number.toString(); // No formatting needed for numbers below 1000
       } else if (number < 1000000) {
         return (number / 1000).toFixed(1) + "K"; // Format in thousands (e.g., 1.5K)
       } else {
         return (number / 1000000).toFixed(1) + "M"; // Format in millions (e.g., 2.3M)
       }
}

export default useFormattedsocialNumbers