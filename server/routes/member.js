const router = require("express").Router();
const MemberCtrl = require("../controllers/member");

// localhost:3001/member
router.route("/").get(MemberCtrl.getAll).post(MemberCtrl.createMember);
router
  .route("/:id")
  .get(MemberCtrl.getById)
  .delete(MemberCtrl.deleateMember)
  .put(MemberCtrl.updateMember);
// app.post("/member", member.create);

// app.get("/member/:id", member.fineByOne);
// app.put("/member/:id", member.update);
// app.delete("/member/:id", member.delete)

module.exports = router;
