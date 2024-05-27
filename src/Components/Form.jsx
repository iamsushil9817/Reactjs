import React from "react";

const Form = () => {
  return (
    <div className="flex  justify-center ">
      <div>
        <label htmlFor="Title">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="Title">email</label>
        <input type="text" id="title" />
      </div>
    </div>
  );
};

export default Form;
