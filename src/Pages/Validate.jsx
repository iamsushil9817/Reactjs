import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
const Validate = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="container mx-auto w-[60%] bg-slate-600 rounded-md p-6">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-2">
          <div className="text-white">
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter your Name"
              className="rounded-md px-2 py-1 border-solid mt-1 w-72"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="text-white">{errors.name}</p>
            ) : null}
          </div>
        </div>
        <div className="mb-2">
          <div className="text-white">
            <label htmlFor="email">Email:</label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="rounded-md px-2 py-1 border-solid mt-1 w-72 "
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-white">{errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="mb-2">
          <div className="text-white">
            <label htmlFor="password">Password:</label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              className="rounded-md px-2 py-1 border-solid mt-1 w-72 "
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-white">{errors.password}</p>
            ) : null}
          </div>
        </div>
        <div className="mb-2">
          <div className="text-white">
            <label htmlFor="confirmpassword">Confirm Password:</label>
          </div>
          <div>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              autoComplete="off"
              placeholder="Enter your password"
              className="rounded-md px-2 py-1 border-solid mt-1 w-72 "
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="text-white">{errors.confirmpassword}</p>
            ) : null}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-blue-600 rounded-lg p-2 mt-2 hover:font-bold"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Validate;
