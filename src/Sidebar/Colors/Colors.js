import React from "react";
import "./Colors.css";
import Input from "../../components/Input";
function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="black"
        name="test2"
        color="black"

      />
      <Input
        handleChange={handleChange}
        value="green"
        title="green"
        name="test2"
        color="green"

      />
      <Input
        handleChange={handleChange}
        value="red"
        title="red"
        name="test2"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="white"
        name="test2"

      />
    </div>
  );
}

export default Colors;
