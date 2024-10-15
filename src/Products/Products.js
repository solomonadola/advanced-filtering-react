import React from "react";
import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="title">shoes</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">64</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>50</del> 40
              </div>
              <div className="bag">
                <BsBagHeart className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="title">shoes</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">64</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>50</del> 40
              </div>
              <div className="bag">
                <BsBagHeart className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="title">shoes</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">64</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>50</del> 40
              </div>
              <div className="bag">
                <BsBagHeart className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
          />
          <div className="card-details">
            <h3 className="title">shoes</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">64</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>50</del> 40
              </div>
              <div className="bag">
                <BsBagHeart className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;
