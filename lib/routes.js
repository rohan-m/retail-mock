var products = require('../data/products.json');

routes = {};
module.exports = routes;

routes.getProduct = function (req, res)
{
	var productId = req.params.productId;
	var product = {};
    var productFound = false;
	for (var i = products.length - 1; i >= 0; i--) {
		if(productId ==  products[i].uuid || productId == products[i].name){
			product = products[i];
            productFound = true;
			break;
		}
	};
    if(productFound){
        res.send(product);
    }
    else{
        res.status(404).send({"error":"NOT_FOUND","description":"product not found"});
    }
};

routes.getProducts = function (req, res)
{
	var resProducts = [];
    for (var i = products.length - 1; i >= 0; i--) {
        var product = JSON.parse(JSON.stringify(products[i]));
        delete product['short_description'];
        resProducts.push(product);
    };
    res.send(resProducts);
};

routes.createPayment = function (req, res)
{
    var body = req.body;
    body.Status = "Pending";
    res.send(body);
};
