import * as yup from "yup";

const formSchema = yup.object().shape({
  className: yup
    .string()
    .trim()
    .required("Class name is required.")
    .min(5, "Class name must be at least 5 characters.")
    .max(30, "Class name must be no more than 30 characters."),
  startTime: yup.string().required("Pick a start time."),
  classDate: yup.string().required("Pick a date."),
  classType: yup.string().required("A class type is required."),
  duration: yup.string().required("Class duration is required."),
  intensity: yup.number(),
  location: yup
    .string()
    .trim()
    .required("A location is required.")
    .min(6, "Your location must be at least 6 characters long."),
  maxCapacity: yup
    .number()
    .required("Pick a class capacity.")
    .min(1, "Capacity must be at least 1."),
});

export default formSchema;
