const service = require("../service/data.service");

class dataController {
  async dataDetail(ctx, next) {
    const result = await service.getData();
    ctx.body = result;
  }

  async dataUpdate(ctx, next) {
    const { data } = ctx.request.body;
    const result = await service.updateData(data);
    ctx.body = result;
  }
}

module.exports = new dataController();
