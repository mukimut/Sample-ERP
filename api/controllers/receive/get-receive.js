module.exports = async function getReceive(req, res) {
    const allData = await Receive.find();
    res.send(allData);
}