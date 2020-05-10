const express = require("express");
const router = express.Router();
const {
  index: findArticle,
  show: showArticle,
  create: postArticle,
} = require("../controllers/article");
const { show: ShowUser, index: findUsers } = require("../controllers/user");
const { login, register } = require("../controllers/auth");
const { authenticated } = require("../middlewares/auth");
const {
  create: postConsultation,
  show: showConsultation,
  index: findConsultations,
  update: updateConsultation,
} = require("../controllers/consultation");
const { create: createreply } = require("../controllers/reply");

//auth
router.post("/signin", login);
router.post("/signup", register);

//article
router.get("/articles", findArticle);
router.get("/article/:id", showArticle);
router.post("/article", authenticated, postArticle);

//reply
router.post("/consultation/:id/reply", authenticated, createreply);

//consultation
router.get("/consultations", authenticated, findConsultations);
router.get("/consultation/:id", authenticated, showConsultation);
router.patch("/consultation/:id", authenticated, updateConsultation);
router.post("/consultation", authenticated, postConsultation);

//user
router.get("/user/:id", authenticated, ShowUser);
router.get("/users", findUsers);

module.exports = router;
