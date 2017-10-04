var products = require('../data/products.json');

routes = {};
module.exports = routes;

routes.getProduct = function (req, res)
{
	var productId = req.params.productId;
	var product = {};
	for (var i = products.length - 1; i >= 0; i--) {
		if(productId ==  products[i].uuid || productId == products[i].name){
			product = products[i];
			break;
		}
	};
    res.send(product);
};

routes.getProducts = function (req, res)
{
    res.send(products);
};