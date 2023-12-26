const Router = require("koa-router");

const router = new Router({ prefix: "/programme" });

const {
  programmeDetail,
  programmeUpdate,
} = require("../controller/programme.controller");

router.get("/", programmeDetail);
router.post("/", programmeUpdate);

module.exports = router;
