const express = require("express");
const router = express.Router();
const {
  index: findArticle,
  show: showArticle,
  create: postArticle,
} = require("../controllers/article");
const { show: ShowUser } = require("../controllers/user");
const { login, register } = require("../controllers/auth");
const { authenticated } = require("../middlewares/auth");
const {
  create: postConsultation,
  show: showConsultation,
  index: findConsultations,
} = require("../controllers/consultation");

//auth
router.post("/signin", login);
router.post("/signup", register);

//article
router.get("/articles", findArticle);
router.get("/article/:id", showArticle);
router.post("/article", authenticated, postArticle);

//consultation
router.get("/consultations", findConsultations);
router.get("/consultation/:id", showConsultation);
router.post("/consultation", authenticated, postConsultation);

//user
router.get("/user/:id", authenticated, ShowUser);

module.exports = router;
