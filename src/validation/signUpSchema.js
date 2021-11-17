import * as yup from "yup";

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please enter your email address.")
    .email("Invalid email."),
  password: yup
    .string()
    .required("Please enter a password.")
    .min(8, "Your password must be at least 8 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Must contain at least one uppercase, one lowercase, and one number."),
});

export default signUpSchema;
