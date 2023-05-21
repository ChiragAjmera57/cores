const Product = require("../models/products");
const getallproducts = async (req, res) => {
  const { name, mrp, brand, usesof, sort } = req.query;
  const queryobject = {};
  if (name) {
    queryobject.name = { $regex: name, $options: 'i' };
  }
  if (mrp) {
    queryobject.mrp = mrp;
  }
  if (brand) {
    queryobject.brand = brand;
  }
  let apidata = Product.find(queryobject);
  if (sort) {
    let sortfix = sort.replace(",", " ");
    apidata = apidata.sort(sortfix);
  }
  const mydata = await apidata;
  res.status(200).json({ mydata });
};
const getalltesting = async (req, res) => {
  const mydata = await Product.find(req.query);
  res.status(200).json({ mydata });
};
module.exports = { getallproducts, getalltesting };
