export const validateForm = (email, password) => {
  const errors = {};
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // const isUserNameValid = /^[A-Za-z\s'-]{3,50}$/.test(userName);

  if (!isEmailValid) errors.email = "Email ID is not valid";
  if (!isPasswordValid) errors.password = "Password is not valid";

  return errors;
};
