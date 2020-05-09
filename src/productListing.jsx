import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GetAll, GetProducts, Delete } from "./services/products";
import { GetAllCategories } from "./services/categories";
import Pagination from "./pagination";
import Product from "./product";

import FilterCategories from "./filter";

class ProductListing extends Component {
  state = {
    loggedIn: false,
    products: [],
    productOwner: "",
    currentUser: "",
    allproductsLength: 18,
    productsService: [],
    categories: [],
    pageSize: 9,
    currentPage: 1,
    currentCategory: "",
    currentSearch: "",
    currentSort: "",
  };
  async componentDidMount() {
    const { currentPage, pageSize } = this.state;
    const { products, length } = await GetAll(currentPage, pageSize);
    const productsService = products;
    let categories = await GetAllCategories();
    // console.log(categories);
    categories = [{ id: 0, name: "All Products" }, ...categories];
    if (localStorage.getItem("token")) {
      this.state.loggedIn = true;
      var currentUser = JSON.parse(localStorage.getItem("user"));
    }
    this.setState({
      products: products,
      productsService,
      categories,
      allproductsLength: length,
      currentUser,
    });
  }
  handleDelete = async (id) => {
    await Delete(id);
    const {
      currentCategory,
      currentSearch,
      currentSort,
      currentPage,
      pageSize,
    } = this.state;

    const { products, length } = await GetProducts(
      currentSearch,
      currentCategory,
      currentSort,
      currentPage,
      pageSize
    );
    this.setState({
      products,
      allproductsLength: length,
    });
  };
  handlePageChange = async (page) => {
    // this.handleGetProducts();
    // this.setState({ currentPage: page });
    const {
      currentCategory,
      currentSearch,
      currentSort,
      pageSize,
    } = this.state;

    const { products, length } = await GetProducts(
      currentSearch,
      currentCategory,
      currentSort,
      page,
      pageSize
    );
    this.setState({
      currentPage: page,
      products,
      allproductsLength: length,
    });
  };
  handleFilter = async (selectedCateg) => {
    const { currentSearch, currentPage, currentSort, pageSize } = this.state;
    // debugger;
    const currentCategory = selectedCateg === 0 ? "" : selectedCateg;
    const { products, length } = await GetProducts(
      currentSearch,
      currentCategory,
      currentSort,
      currentPage,
      pageSize
    );
    this.setState({
      products,
      currentCategory: selectedCateg,
      currentPage: 1,
      allproductsLength: length,
    });
  };
  handleSearch = async (e) => {
    const { currentCategory, currentPage, currentSort, pageSize } = this.state;
    const search = e.target.value ? e.target.value : "";

    const { products, length } = await GetProducts(
      search,
      currentCategory,
      currentSort,
      currentPage,
      pageSize
    );
    this.setState({
      currentSearch: search,
      products,
      allproductsLength: length,
    });
  };
  handleSort = async (e) => {
    const {
      currentCategory,
      currentSearch,
      currentPage,
      pageSize,
    } = this.state;
    const sortBy = e.target.value ? e.target.value : "";
    const { products, length } = await GetProducts(
      currentSearch,
      currentCategory,
      sortBy,
      currentPage,
      pageSize
    );
    this.setState({
      products,
      currentSort: sortBy,
      allproductsLength: length,
    });
  };

  render() {
    let {
      products,
      currentPage,
      pageSize,
      allproductsLength,
      loggedIn,
      currentUser,
    } = this.state;
    // console.log(currentUser);
    return (
      <div className="container">
        {/* <!-- filters --> */}
        <section className="filters">
          {/* <!-- search box --> */}
          <div className="search-box">
            <input
              className="search-box__input"
              placeholder="Search..."
              type="text"
              name="txt_search"
              id=""
              onChange={this.handleSearch}
            />
            <button type="submit" className="search-box__btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* <!-- filter list --> */}
          <FilterCategories
            categ={this.state.categories}
            handleFilter={this.handleFilter}
          />
          {/* <!-- filter tags --> */}
          <div>
            {/* <!-- filter header --> */}
            <h5>Tags</h5>
            {/* <!-- filter tags --> */}
            <div className="tags">
              <span className="tag">Nike</span>
              <span className="tag">Travel</span>
              <span className="tag">Sport</span>
              <span className="tag">Tv</span>
              <span className="tag">Books</span>
            </div>
          </div>
        </section>
        {/* <!-- Items --> */}
        <section className="item-listing">
          {/* <!-- tools (sorting , change view , exporting) --> */}
          <div className="item-listing__tools">
            <select
              className="form-control"
              name=""
              id=""
              onChange={this.handleSort}
            >
              <option value="notSorted">Featured</option>
              <option value="priceAsc">Price low to high</option>
              <option value="priceDes">Price high to low</option>
              <option value="name">Name</option>
            </select>
            {loggedIn ? (
              <Link className="action-btn" to="/addItem">
                <i className="fas fa-plus"></i>
              </Link>
            ) : null}
          </div>
          {/* <!-- items --> */}
          <div className="item-listing__items item-listing--3items">
            {/* <!-- medium item --> */}
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                discount={product.discount}
                id={product.id}
                image={product.image}
                handleDelete={this.handleDelete}
                loggedIn={loggedIn}
                currentUser={currentUser}
                productUserId={product.userId}
              />
            ))}
          </div>
          {/* <!-- paging --> */}
          {allproductsLength > pageSize && (
            <Pagination
              pageSize={pageSize}
              count={allproductsLength}
              currentPage={currentPage}
              handlePageChange={this.handlePageChange}
              currentUser={currentUser}
            />
          )}
        </section>
      </div>
    );
  }
}

export default ProductListing;
