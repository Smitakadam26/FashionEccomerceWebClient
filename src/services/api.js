export const getAllProductsWomenSection = async () => {
  const res = await fetch("http://localhost:5000/product?category=women");
  return res.json();
};
export const getAllProductsMenSection = async () => {
  const res = await fetch("http://localhost:5000/product?category=men");
  return res.json();
};
export const getAllProducts = async () => {
  const res = await fetch("http://localhost:5000/product");
  return res.json();
};
export const getProfile = async () => {
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data.token)
  const res = await fetch("http://localhost:5000/users/profile", {
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  });
  return res.json();

};
export const updateProfile = async (profile) => {
  const data = JSON.parse(localStorage.getItem("user"));
  const res = await fetch("http://localhost:5000/api/users/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`
    },
    body: JSON.stringify(profile)
  });
  return res.json();
};
