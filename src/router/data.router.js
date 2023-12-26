const Router = require("koa-router");

const router = new Router({ prefix: "/data" });

const { dataDetail, dataUpdate } = require("../controller/data.controller");

router.get("/", dataDetail);
router.post("/", dataUpdate);

module.exports = router;
