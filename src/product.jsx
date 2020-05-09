import React from "react";
import { Link } from "react-router-dom";
const Product = (props) => {
  const {
    id,
    name,
    price,
    discount,
    image,
    handleDelete,
    loggedIn,
    currentUser,
    productUserId,
  } = props;
  // console.log(currentUser);
  function calculateDiscount() {
    return discount ? price - discount : price;
  }
  function authenticaion() {
    if (loggedIn) {
      return currentUser._id === productUserId ? true : false;
    }
    return false;
  }
  return (
    <React.Fragment>
      <div className="item-medium-1">
        {discount && <div className="item-medium-1__alert">Sale</div>}
        <div
          className="item-medium-1__image image"
          style={{
            backgroundImage: `url('/img/products/${image}')`,
          }}
        >
          <a href="#" className="item-medium-1__action">
            Add to Cart
          </a>
        </div>
        <a href="#">
          <h4>{name}</h4>
          <div className="flex-row">
            <div>
              {discount && <del>${price}</del>}
              <span className="lable">${calculateDiscount()}</span>
            </div>
          </div>
        </a>
        <div className="crud-actions">
          <Link to={`/productDetails/${id}`}>
            <i className="far fa-eye"></i>
          </Link>
          {authenticaion() ? (
            <React.Fragment>
              <Link to={`/editItem/${id}`}>
                <i className="fas fa-edit"></i>
              </Link>
              {/* <a href="#"> */}
              <i
                onClick={() => handleDelete(id)}
                className="fas fa-trash-alt"
              ></i>
              {/* </a> */}
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
