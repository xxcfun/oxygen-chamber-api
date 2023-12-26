const connection = require("../app/database");

class DataService {
  async getData() {
    const statement = `SELECT * FROM data WHERE id = 1;`;
    const [result] = await connection.execute(statement);
    return result[0];
  }

  async updateData(data) {
    // 解构，以后再也不用原生查询了
    const { cnwd, cnsd, cnynd, cnyfy } = data;
    const statement = `UPDATE data SET cnwd=?, cnsd=?, cnynd=?, cnyfy=? WHERE id=1;`;
    const [result] = await connection.execute(statement, [
      cnwd,
      cnsd,
      cnynd,
      cnyfy,
    ]);
    console.log("data保存成功");
    return result;
  }
}

module.exports = new DataService();
