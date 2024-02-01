function errorHandling ( err, req, res, next) {
    res.status(500).json({code: 500, message: 'Vaya parece que nuestros servicios no funcionan, inténtalo de nuevo más tarde'})
}

module.exports = errorHandling;