import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { CustomInput } from "../../custom-input/CustomInput";

const initialState = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};
export const UpdatePassword = () => {
  const [form, setForm] = useState(initialState);

  const hadleOnChage = (e) => {
    let { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputFields = [
    {
      label: "Current Password",
      name: "currentPassword",
      required: true,
      type: "password",
      value: form.currentPassword,
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password",
      value: form.confirmPassword,
    },
    {
      type: "submit",
      value: "Update Password",
      className: "btn btn-danger",
    },
  ];
  return (
    <div className="mt-5">
      <h4>Update your Password</h4>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={hadleOnChage} />
        ))}
      </Form>
    </div>
  );
};