const con = require("../models/db");

const MemberCtrl = {
  getAll: async (req, res) => {
    con.query("select * from member", (err, results) => {
      if (err) throw err;
      // console.log(req);
      console.log(results);
      res.send(results);
    });
  },

  getById: async (req, res) => {
    console.log(req.params);
    con.query("select * from member where ?", req.params, (err, results) => {
      if (err) throw err;
      console.log(results);
      console.log(req.params, "selecte from member table");
      res.send(results);
    });
  },

  createMember: async (req, res) => {
    const { email, password, name, department } = req.body;
    con.query(
      "insert into member(email,password,name,department) value (?,?,?,?)",
      [email, password, name, department],
      (err) => {
        if (err) throw err;
        console.log(req.body, "create into member table");
        con.query("select * from member", (err, results) => {
          if (err) throw err;
          res.send(results);
          console.log(results);
        });
      }
    );
  },

  deleateMember: async (req, res) => {
    con.query("delete from member where ?", req.params, (err) => {
      if (err) throw err;
      console.log(req.params, "delete from member table");
      con.query("select * from member", (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
  },

  updateMember: async (req, res) => {
    const { email, password, name, department } = req.body;
    const datas = [email, password, name, department, req.params.id];
    console.log();
    con.query(
      "update member set email = ?, password = ?, name = ?, department =? where id = ? ",
      datas,
      (err) => {
        if (err) throw err;
        console.log("id : ", req.params.id, " member update", req.body);
        con.query("select * from member", (err, results) => {
          if (err) throw err;
          res.send(results);
        });
      }
    );
  },
};

module.exports = MemberCtrl;
