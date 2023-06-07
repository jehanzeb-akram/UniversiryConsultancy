const express = require('express');
const PaymentController = require('../Controllers/PaymentController.js');

const router = express.Router();
const paymentController = new PaymentController();

// POST /payment/process
router.post('/process', paymentController.processPayment);

module.exports = router;
