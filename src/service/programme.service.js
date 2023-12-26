const connection = require("../app/database");

class ProgrammeService {
  async getProgramme() {
    const statement = `SELECT * FROM programme WHERE id = 1;`;
    const [result] = await connection.execute(statement);
    return result[0];
  }

  async updateProgramme(fa) {
    // 解构，以后再也不用原生查询了
    const statement = `UPDATE programme SET fa=? WHERE id=1;`;
    const [result] = await connection.execute(statement, [fa]);
    console.log("programme保存成功");
    return result;
  }
}

module.exports = new ProgrammeService();
