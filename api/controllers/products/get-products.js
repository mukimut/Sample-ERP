module.exports =async function getProducts(req, res) {
	//const type = req.query.type;
	let allProducts;
	// if(type) allCompanies = await Company.find({companytype: type});
    // else allCompanies = await Company.find();
    allProducts = await Product.find();

	res.send(allProducts.map(element => {
        element.price = Number.parseFloat(element.price);
        return element;
    }));
	
}