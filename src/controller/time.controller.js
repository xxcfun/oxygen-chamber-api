const service = require("../service/time.service");

class timeController {
  async timeDetail(ctx, next) {
    const result = await service.getTime();
    ctx.body = result;
  }

  async timeUpdate(ctx, next) {
    const { time } = ctx.request.body;
    const result = await service.updateTime(time);
    ctx.body = result;
  }
}

module.exports = new timeController();
