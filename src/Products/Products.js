import React from "react";
import "./Products.css";
import Card from "../components/Card";
function Products({result}) {
  console.log(result)
  return (
    <>
      <section className="card-container">
        {result}
      </section>
    </>
  );
}

export default Products;
