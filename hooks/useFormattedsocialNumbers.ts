const useFormattedsocialNumbers = (number: number) => {
  if (number < 1000) {
    return number.toString(); // No formatting needed for numbers below 1000
  } else if (number > 1000 && number < 999999) {
    return (number / 1000).toFixed(1) + "K"; // Format in thousands (e.g., 1.5K)
  } else if (number > 1000000 && number < 999999999) {
    return (number / 1000000).toFixed(1) + "M"; // Format in millions (e.g., 2.3M)
  } else{
    return (number / 1000000000).toFixed(1) + "B"; // Format in millions (e.g., 2.3M)
  }
};

export default useFormattedsocialNumbers;
