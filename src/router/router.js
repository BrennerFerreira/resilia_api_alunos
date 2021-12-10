const { Router, json } = require("express");
const cors = require("cors");

const router = Router();

router.use(json());
router.use(cors());

module.exports = router;
