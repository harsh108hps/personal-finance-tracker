const express = require("express");
const auth = require("../middlewares/auth.middleware");
const {
  addTransaction,
  getTransactions,
  deleteTransaction,
} = require("../controllers/transaction.controller");

const router = express.Router();

router.use(auth);
router.post("/", addTransaction);
router.get("/", getTransactions);
router.delete("/:id", deleteTransaction);

module.exports = router;
