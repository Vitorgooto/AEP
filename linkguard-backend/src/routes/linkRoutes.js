const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');
const { validateLink } = require('../middleware/validateRequest');

/**
 * @swagger
 * /api/links/analyze:
 *   post:
 *     summary: Analisa um link e determina se é malicioso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: "http://example.com"
 *     responses:
 *       201:
 *         description: Resultado da análise do link
 *       400:
 *         description: URL inválida
 */
router.post('/analyze', validateLink, linkController.analyzeLink);

/**
 * @swagger
 * /api/links/history:
 *   get:
 *     summary: Recupera o histórico de links analisados
 *     responses:
 *       200:
 *         description: Histórico de links
 */
router.get('/history', linkController.getHistory);

module.exports = router;
