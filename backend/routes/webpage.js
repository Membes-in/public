const express = require("express");
const router = express.Router();
const { connectController } = require("../controllers/webpage");

// Contact us — kept at this path so the frontend can POST to
// `${NEXT_PUBLIC_BACKEND_URL}/manager/webpage/connect` unchanged.
router.post("/connect", connectController);

module.exports = router;
