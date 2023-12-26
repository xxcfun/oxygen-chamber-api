const connection = require("../app/database");

class StatusService {
  async getStatus() {
    const statement = `SELECT * FROM status WHERE id = 1;`;
    const [result] = await connection.execute(statement);
    return result[0];
  }

  async updateStatus(yxzt) {
    // 解构，以后再也不用原生查询了
    const statement = `UPDATE status SET yxzt=? WHERE id=1;`;
    const [result] = await connection.execute(statement, [yxzt]);
    console.log("status保存成功");
    return result;
  }
}

module.exports = new StatusService();
