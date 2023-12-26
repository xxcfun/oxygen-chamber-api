const Router = require("koa-router");

const router = new Router({ prefix: "/status" });

const {
  statusDetail,
  statusUpdate,
} = require("../controller/status.controller");

router.get("/", statusDetail);
router.post("/", statusUpdate);

module.exports = router;
