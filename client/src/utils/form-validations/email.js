export const validateEmail = (rule, value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value && !emailRegex.test(value)) {
    return Promise.reject('Please enter a valid email!');
  } else {
    return Promise.resolve();
  }
};

export const validateWebsite = (rule, value) => {
  const websiteRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  if (value && !websiteRegex.test(value)) {
    return Promise.reject(
      'HTTP ya da HTTPS içeren geçerli bir bağlantı giriniz.'
    );
  } else {
    return Promise.resolve();
  }
};
