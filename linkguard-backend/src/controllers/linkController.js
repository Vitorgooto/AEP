const Link = require('../models/linkModel');
const mlService = require('../services/mlService');

exports.analyzeLink = async (req, res, next) => {
  try {
    const { url } = req.body;

    // Analisa o link usando o serviço de Machine Learning
    const { isMalicious, confidence } = await mlService.analyzeLink(url);

    // Salva o resultado no banco de dados
    const link = await Link.create({ url, isMalicious, confidence });

    res.status(201).json(link);
  } catch (error) {
    next(error);
  }
};

exports.getHistory = async (req, res, next) => {
  try {
    const history = await Link.find().sort({ createdAt: -1 });
    res.json(history);
  } catch (error) {
    next(error);
  }
};
