import * as yup from "yup";

const logInSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please enter your email address.")
    .email("Invalid email."),
  password: yup
    .string()
    .required("Please enter your password."),
});

export default logInSchema;
