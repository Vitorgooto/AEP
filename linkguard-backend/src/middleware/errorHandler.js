const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      error: 'Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde.',
    });
  };
  
  module.exports = errorHandler;
  