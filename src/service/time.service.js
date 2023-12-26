const connection = require("../app/database");

class TimeService {
  async getTime() {
    const statement = `SELECT * FROM time WHERE id = 1;`;
    const [result] = await connection.execute(statement);
    return result[0];
  }

  async updateTime(time) {
    // 解构，以后再也不用原生查询了
    const { h, m, s } = time;
    const statement = `UPDATE time SET h=?, m=?, s=? WHERE id=1;`;
    const [result] = await connection.execute(statement, [h, m, s]);
    console.log("time保存成功");
    return result;
  }
}

module.exports = new TimeService();
