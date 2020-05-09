import axios from "axios";

const EndPointApi = "http://localhost:3000/Products";
const token = localStorage.getItem("token");
export async function GetAll(page, limit) {
  const EndPointApi = "  http://localhost:3000/Products?";
  const { data } = await axios.get(`${EndPointApi}limit=${limit}&page=${page}`);
  // console.log(data);
  return data;
}
export async function GetProducts(search, cat, sortBy, page, limit) {
  const EndPointApi = "http://localhost:3000/Products/search?";
  const { data } = await axios
    .get(
      `${EndPointApi}search=${search}&category=${cat}&sortBy=${sortBy}&page=${page}&limit=${limit}`
    )
    .catch((err) => console.log(err));
  console.log(data);
  return data;
}

export async function GetById(id) {
  const EndPointApi = "http://localhost:3000/Products/getProduct";
  const response = await axios
    .get(EndPointApi + "/" + id)
    .catch((err) => console.log(err.response.data));
  if (response) {
    return response.data;
  }
}

export async function Add(newProduct) {
  const response = await axios
    .post(EndPointApi + "/add", newProduct, {
      headers: {
        Authorization: token,
      },
    })
    .catch((err) => alert(err.response.data.message));
  return response ? response.data : null;
}

export async function Update(id, updatedProduct) {
  const response = await axios
    .patch(EndPointApi + "/" + id, updatedProduct, {
      headers: {
        Authorization: token,
      },
    })
    .catch((err) => alert(err.response.data.message));

  return response ? response.data : null;
}
export async function Delete(id) {
  const response = await axios
    .delete(EndPointApi + "/" + id, {
      headers: {
        Authorization: token,
      },
    })
    .catch((err) => alert("Cant Delete " + err.response.data.message));
}
