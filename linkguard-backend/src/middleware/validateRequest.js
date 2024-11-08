const { body, validationResult } = require('express-validator');

const validateLink = [
  body('url').isURL().withMessage('URL inválida'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateLink };
