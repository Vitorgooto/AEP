const mongoose = require('mongoose');
const validator = require('validator');

const linkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'URL é obrigatória'],
    validate: {
      validator: (value) => validator.isURL(value),
      message: 'URL inválida',
    },
  },
  isMalicious: { type: Boolean, required: true },
  confidence: { type: Number, required: true, min: 0, max: 1 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Link', linkSchema);
