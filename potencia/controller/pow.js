const pow = require('../model/pow.model') 

module.exports = function powController (req, res) {
    const { base, exponent } = req.params
    const powResult = pow(base, exponent);
    res.send(powResult.toString())
}