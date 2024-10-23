import React from "react";
import "./Category.css";
import Input from "../../components/Input";
function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="sneaker"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flat"
          title="flat"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
