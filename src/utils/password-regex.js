export const validatePassword = (password) => {
  // const regex = /^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const regex = /^[a-z]+$/i
  return regex.test(password);
};
