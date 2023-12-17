// localStorage'a değer setlemek için fonksiyon
export const setLocalStorageValue = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(
      `Value '${value}' successfully set for key '${key}' in localStorage.`
    );
  } catch (error) {
    console.error(
      `Error setting value for key '${key}' in localStorage:`,
      error
    );
  }
};

// localStorage'dan değer getirmek için fonksiyon
export const getLocalStorageValue = (key) => {
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      console.log(`No value found for key '${key}' in localStorage.`);
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(
      `Error getting value for key '${key}' from localStorage:`,
      error
    );
    return null;
  }
};
