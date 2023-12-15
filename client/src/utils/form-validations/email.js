export const validateEmail = (rule, value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value && !emailRegex.test(value)) {
    return Promise.reject('Please enter a valid email!');
  } else {
    return Promise.resolve();
  }
};
