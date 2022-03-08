const sql = require("./db.js");

const Member = function (member) {
  this.email = member.email;
  this.password = member.password;
  this.name = member.name;
  this.department = member.department;
};

Member.create = (newMember) => {
  sql.query(
    "insert into member(email,password,name,department) value ?",
    newMember,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      console.log("created customer: ", { ...newCustomer });
    }
  );
};

Member.findByOne = (col, key) => {
  sql.query(`select * from member where ${col} = ${key}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    if (res.length) {
      console.log("found customer: ", res[0]);
      return;
    }
  });

  Member.getAll = () => {
    sql.query("select * from member", (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      console.log("member : ", res);
    });
  };
};

module.exports = Member;
