const Router = require("koa-router");

const router = new Router({ prefix: "/time" });

const { timeDetail, timeUpdate } = require("../controller/time.controller");

router.get("/", timeDetail);
router.post("/", timeUpdate);

module.exports = router;
