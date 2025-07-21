const express = require("express");
const { addTransaction, getUserTransactions, deleteTransaction } = require("../controllers/transaction.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", auth, addTransaction); // POST /api/transactions
router.get("/", auth, getUserTransactions); // GET /api/transactions
router.delete("/:id", auth, deleteTransaction); // DELETE /api/transactions/:id

module.exports = router;
