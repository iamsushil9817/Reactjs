import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(8).required("pleae enter your name"),
  email: Yup.string().email().required("please enter the email"),
  password: Yup.string().min(6).required("please enter the password"),
  confirmpassword: Yup.string()
    .required("please re enter your password")
    .oneOf([Yup.ref("password"), null], "password must match"),
});
