const getProducts = (req, res) => {
    res.render('admin/products/all-products');
};

const getNewProduct = (req, res) => {
    res.render('admin/products/new-product');
};

const createNewProduct = () => {};

module.exports = {
    getProducts: getProducts,
    getNewProduct: getNewProduct,
    createNewProduct: createNewProduct
};