import { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";
import FormDetails from "./FormDetails";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Enter Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Enter Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "",
    },
  ];

  const [index, setIndex] = useState(0);
  const [forms, setForms] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("Form Submitted");
      setIsFormSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;

    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };

  // console.log(formData);

  return (
    <div className="App">
      {isFormSubmitted ? (
        <FormDetails formData={formData} />
      ) : (
        <UserForm
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          index={index}
          formData={formData}
          forms={forms}
        />
      )}
    </div>
  );
}

export default App;
