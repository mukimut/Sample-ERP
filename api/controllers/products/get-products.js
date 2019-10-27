module.exports =async function getProducts(req, res) {
    const name = req.body.name;
    if(name) {
        const sql = `SELECT name FROM products WHERE LOWER(name) = LOWER($1)`;
		const rawResult = await sails.sendNativeQuery(sql, [name]);
		res.send(rawResult);
    }
    else {
        let allProducts;
        allProducts = await Product.find();

        res.send(allProducts.map(element => {
            element.price = Number.parseFloat(element.price);
            return element;
        }));
    }
	
}