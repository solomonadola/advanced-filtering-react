import React from "react";
import "./Recommended.css";
import Button from "../components/Buttons";
function Recommended({handleClick}) {
  return (
    <>
      <div>
        <h1 className="recommended-title">Recommended</h1>
        <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="vans" title="Vans" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
