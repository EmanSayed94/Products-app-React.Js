import React, { Component } from "react";
import { GetById } from "./services/products";
import { GetAllCategories } from "./services/categories";
class ProductDetails extends Component {
  state = {
    product: {
      id: "",
      name: "",
      description: "",
      price: "",
      discount: "",
      image: "",
      category: "",
      tags: [],
      userId: "",
    },
    // categories: [{ name: "", id: "" }],
  };
  componentDidMount = async () => {
    const product = await GetById(this.props.match.params.id);
    // const categories = await GetAllCategories();
    // console.log(product.category);
    console.log(product);

    this.setState({ product });
  };
  render() {
    // console.log(this.state.categories[this.state.product.categId]);
    return (
      <div className="product-details container">
        <section className="product-details__main">
          {/* <!-- images slider --> */}
          <div className="slider">
            <div
              className="slider__item active"
              // style={{
              //   backgroundImage: `url('${this.state.product.image}')`,
              // }}
              style={{
                backgroundImage: "url('/img/products/product-grey-6.jpg')",
              }}
            ></div>
          </div>

          {/* <!-- product info --> */}
          <div className="product-details__info">
            <h1>{this.state.product.name}</h1>
            <div className="rating">
              <div className="rating__stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="rating__data">2 reviews</div>
            </div>
            <div className="product-details__amount">
              ${this.state.product.price}
            </div>
            <p className="product-details__desc">
              {this.state.product.description}
            </p>
            <div className="product-details__add">
              <div className="increment-control">
                <a href="#" className="increment-control__action">
                  -
                </a>
                <input
                  type="text"
                  className="form-control"
                  title="Qty"
                  // value="1"
                  // onChange={this.handle}
                />
                <a href="#" className="increment-control__action">
                  +
                </a>
              </div>
              <button href="#" className="btn btn--primary">
                Add to cart
              </button>
            </div>
            <div className="product-details__meta">
              Category:{this.state.product.category.name}
              <a rel="tag" href="#">
                {/* {this.state.categories[this.state.product.catedId]} */}
              </a>{" "}
              {/* <a rel="tag" href="#">
                Bags
              </a> */}
            </div>
          </div>
        </section>
        <section className="tabs">
          <div className="tabs__headers">
            <div className="tabs__header active">Description</div>
            <div className="tabs__header">Additional Information</div>
            <div className="tabs__header">Reviews (2)</div>
          </div>
          <div className="tabs__bodies">
            <div className="tabs__body active">
              <div className="product-details__desc">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Fusce sagittis, massa fringilla
                  consequat blandit, mauris ligula porta nisi, non tristique
                  enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus.
                </p>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Fusce sagittis, massa fringilla
                  consequat blandit, mauris ligula porta nisi, non tristique
                  enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae;
                </p>
              </div>
            </div>
            <div className="tabs__body ">tab2</div>
            <div className="tabs__body">tab3</div>
          </div>
        </section>
        <div className="separator"></div>
        {/* <!-- related products --> */}
        <section className="realated-product">
          <h3>
            Related <strong>Products</strong>
          </h3>
          <div className="item-listing__items item-listing--4items">
            {/* <!-- medium item --> */}
            <div className="item-medium-1">
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: "url('/img/products/product-grey-7.jpg')",
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: "url('/img/products/product-grey-7.jpg')",
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: "url('/img/products/product-grey-7.jpg')",
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: "url('/img/products/product-grey-7.jpg')",
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductDetails;
