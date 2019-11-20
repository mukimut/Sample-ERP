module.exports = async function updateReceive(req, res) {
    const id = req.body.id;
    const data = req.body.data;

    if(!id) {
        let serial;
        const sql = 'SELECT batch FROM productreceive ORDER BY receiveid DESC LIMIT 1';
        const rawResult = await sails.sendNativeQuery(sql, []);
        
        if(rawResult.rowCount === 0) serial = 1;
        else {
            const batch = rawResult.rows[0].batch;
            serial = Number.parseInt(batch.substring(4, 8)) + 1;
        }

        let serialString = serial + '';
        let length = 4 - serialString.length;
        for(let i=0; i < length; i++) {
            serialString = '0' + serialString;
        }

        length = data.length;
        for(let i=0; i < length; i++) {
            const element = data[i];          
            element.batch = 'RCV-' + serialString;
            await Receive.create(element);
        };
    } 
    res.send(true);
}