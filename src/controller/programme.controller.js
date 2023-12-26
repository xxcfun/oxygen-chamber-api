const service = require("../service/programme.service");

class programmeController {
  async programmeDetail(ctx, next) {
    const result = await service.getProgramme();
    const fa = JSON.parse(result.fa);
    const zheng = fa.slice(0, 5);
    const fu = fa.slice(5);
    let programme = "未选择";
    let zf = "";
    for (let itemF of fu) {
      if (itemF.value != 0) {
        zf = "负压 - ";
        programme = zf + itemF.name;
        break;
      }
    }
    for (let itemZ of zheng) {
      if (itemZ.value != 0) {
        zf = "正压 - ";
        programme = zf + itemZ.name;
        break;
      }
    }
    ctx.body = programme;
  }

  async programmeUpdate(ctx, next) {
    const { fa } = ctx.request.body;
    const result = await service.updateProgramme(fa);
    ctx.body = result;
  }
}

module.exports = new programmeController();
