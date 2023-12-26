const service = require("../service/status.service");

class statusController {
  async statusDetail(ctx, next) {
    const result = await service.getStatus();
    const yxzt = JSON.parse(result.yxzt);
    ctx.body = yxzt;
  }

  async statusUpdate(ctx, next) {
    const { yxzt } = ctx.request.body;
    const result = await service.updateStatus(yxzt);
    ctx.body = result;
  }
}

module.exports = new statusController();
