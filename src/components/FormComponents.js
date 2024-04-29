import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFormData } from "../redux/actions";
import "../App.css"; // Import the CSS file

const FormComponent = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
    highestEducation: "",
    passingYear: "2020",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validations
    if (!/^[a-zA-Z\s]+$/.test(formData.fullName) || formData.fullName === "") {
      alert("Please enter a valid full name.");
      return;
    }
    if (
      !/^[0-9a-zA-Z\s,-]+$/.test(formData.address) ||
      formData.address === ""
    ) {
      alert("Please enter a valid address.");
      return;
    }
    if (
      !/^[0-9a-zA-Z]+$/.test(formData.postalCode) ||
      formData.postalCode === ""
    ) {
      alert("Please enter a valid postal code.");
      return;
    }
    if (!/^\d+$/.test(formData.phoneNumber) || formData.phoneNumber === "") {
      alert("Please enter a valid phone number.");
      return;
    }
    if (
      !/^[a-zA-Z\s]+$/.test(formData.highestEducation) ||
      formData.highestEducation === ""
    ) {
      alert("Please enter a valid highest education.");
      return;
    }
    // Dispatch form data if all validations pass
    dispatch(addFormData(formData));
  };

  return (
    <div className="container">
      {" "}
      {/* Center-align the form */}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="highestEducation">Highest Education:</label>
          <input
            type="text"
            id="highestEducation"
            name="highestEducation"
            value={formData.highestEducation}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passingYear">Passing Year:</label>
          <select
            id="passingYear"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            className="select-field"
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
