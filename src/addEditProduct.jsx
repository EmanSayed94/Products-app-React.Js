import React, { Component } from "react";
import { GetAllCategories } from "./services/categories";
import { Add, GetById, Update } from "./services/products";
import Product from "./product";
import FilesUploadComponent from "./files-upload-component";
class AddEditProduct extends Component {
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
    newTag: "",
    categories: [],
  };
  componentDidMount = async () => {
    const categories = await GetAllCategories();
    if (this.props.match.params.id) {
      const product = await GetById(this.props.match.params.id);
      categories[0] = product.category;
      this.setState({ categories, product });
    } else {
      const product = { ...this.state.product };
      product.category = categories[0].id;
      this.setState({ categories, product });
    }
  };
  handleDataChange = (e) => {
    // console.log(e.target.value);
    const product = { ...this.state.product };
    product[e.target.name] = e.target.value;
    this.setState({ product });
  };
  handleChange = (e) => {
    const product = { ...this.state.product };
    product[e.target.name] = e.target.value;
    this.setState({ product });
  };
  handleCateogoryChange = (e) => {
    // e.preventDefault();
    const product = { ...this.state.product };
    product.category = e.target.value;
    console.log(product.category);
    this.setState({ product });
  };
  handleTagRemove = (tagToDelete) => {
    let product = { ...this.state.product };
    product.tags = product.tags.filter((tag) => tag !== tagToDelete);
    this.setState({ product });
  };
  handleAllTagsRemove = (tagToDelete) => {
    let product = { ...this.state.product };
    product.tags = [];
    this.setState({ product });
  };
  handleTagChange = (e) => {
    e.preventDefault();

    let newTag = this.state.newTag;
    newTag = e.target.value;
    this.setState({ newTag });
  };
  handleAddNewTag = (e) => {
    e.preventDefault();
    // let { product, newTag } = this.state;
    let product = { ...this.state.product };
    let newTag = this.state.newTag;
    product.tags.push(newTag);
    this.setState({ product, newTag });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    // if(e.ta)
    const prod = { ...this.state.product };
    console.log(prod);

    let product;
    // console.log(this.props.match.params.id);
    if (this.props.match.params.id) {
      product = await Update(prod.id, prod);
    } else {
      product = await Add(prod);
      // console.log(res);
    }
    // console.log(products);
    console.log(prod);
    this.props.history.replace("/home");
  };
  handleCancel = (e) => {
    e.preventDefault();
    this.props.history.push("/home");
  };
  render() {
    const {
      id,
      name,
      description,
      price,
      discount,
      image,
      category,
      tags,
      userId,
    } = this.state.product;
    return (
      <div className=" container">
        <form className="add-product">
          <div className="add-product__images slider">
            <div className="add-product__image-actions">
              <div className="add-product__image-action">
                <a>
                  {/* <input type="file" /> */}
                  <i className="fas fa-plus-square"></i>
                </a>
                <a>
                  <i className="fas fa-edit"></i>
                </a>
                <a>
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div
              className="slider__item active"
              style={{
                backgroundImage: " url('/img/products/product-grey-7.jpg')",
              }}
            ></div>
          </div>
          {/* // <FilesUploadComponent/> */}
          <div className="add-product__data">
            <div className="form-controls">
              <section className="tabs">
                <div className="tabs__headers">
                  <div className="tabs__header active">English</div>
                  <div className="tabs__header">Arabic</div>
                </div>
                <div className="tabs__bodies">
                  <div className="tabs__body active">
                    <div className="form-group invalid">
                      <label htmlFor="">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id=""
                        onChange={this.handleDataChange}
                        value={name}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        id=""
                        cols="30"
                        rows="4"
                        onChange={this.handleDataChange}
                        value={description}
                      ></textarea>
                    </div>
                  </div>
                  <div className="tabs__body ">
                    <div className="form-group invalid">
                      <label htmlFor="">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        id=""
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>

              <div className="form-group">
                <label htmlFor="">Price</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  id=""
                  value={price}
                  onChange={this.handleChange}
                />
              </div>
              <div className="add-product__discount">
                <div className="form-group">
                  <label htmlFor="">Satus</label>
                  <div className="form-group__radios">
                    <div className="form-group__radio">
                      <input type="radio" name="" id="" />
                      <span>On Sale</span>
                    </div>
                    <div className="form-group__radio">
                      <input type="radio" name="" id="" />
                      <span>Not On Sale</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Discount</label>
                  <input
                    className="form-control"
                    type="text"
                    name="discount"
                    id=""
                    value={discount}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group"></div>
              <div className="form-group">
                <label htmlFor="">Category</label>
                <select
                  onChange={this.handleCateogoryChange}
                  className="form-control"
                  name="Category"
                  id=""
                >
                  {this.state.categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="taged-textbox form-group">
                <label className="taged-textbox__lable" htmlFor="">
                  Tags
                </label>
                <div className="taged-textbox__data">
                  <div className="taged-textbox__tags">
                    {tags.map((tag, index) => (
                      <React.Fragment>
                        <div className="taged-textbox__tag">
                          <span>{tag}</span>
                          <a className="taged-textbox__remove">
                            <i
                              // key={index}
                              className="fas fa-times"
                              onClick={() => this.handleTagRemove(tag)}
                            ></i>
                          </a>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="taged-textbox__clear">
                    <a>
                      {tags.length ? (
                        <i
                          className="fas fa-times"
                          onClick={this.handleAllTagsRemove}
                        ></i>
                      ) : null}
                    </a>
                  </div>
                </div>
                <input
                  className="taged-textbox__textbox form-control border"
                  type="text"
                  name="Add tag"
                  id=""
                  value={this.newTag}
                  onChange={this.handleTagChange}
                />
                <button
                  className="btn btn--primary"
                  onClick={this.handleAddNewTag}
                >
                  ADD Tag
                </button>
              </div>
              <div className="add-product__actions">
                <button className="btn btn--gray" onClick={this.handleCancel}>
                  Cancel
                </button>
                <button
                  className="btn btn--primary"
                  onClick={this.handleSubmit}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEditProduct;
