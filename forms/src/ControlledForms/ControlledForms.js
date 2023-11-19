import React, { useState } from "react";
import InputData from "./InputData";
import Checkbox from "./Checkbox";
import TextInputs from "./TextInputs";
import RadioButton from "./RadioButton";
import CustomSelect from "./CustomSelect";

const ControlledForms = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    checkbox: false,
    radio: "",
    //поставити дефолтне значення 
    //radio: "radio1",
    select:"option1",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextInputs value={value} setValue={setValue} />
        <Checkbox value={value} setValue={setValue} />
        <RadioButton value={value} setValue={setValue}/>
        <CustomSelect value={value} setValue={setValue}/>
        <div style={{ padding: "20px" }}>
          <input style={{ width: "200px" }} type="submit" />
        </div>
      </form>
      <InputData value={value} />
    </>
  );
};

export default ControlledForms;
