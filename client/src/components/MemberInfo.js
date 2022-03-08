import React from "react";
import { Link } from "react-router-dom";

function MemberInfo(datas) {
  const data = datas.datas.data[0];
  const { id, email, password, name, department } = data;

  const saveStateValues = (memberId, memberPw) => {
    localStorage.setItem(memberId, memberPw);
  };
  return (
    <div>
      <h1>
        {name} [{department}]
      </h1>
      <p>이메일 : {email}</p>
      <div>
        <Link
          to={`/member/update/${id}`}
          onClick={() => saveStateValues(id, password)}
        >
          개인정보수정
        </Link>
      </div>
    </div>
  );
}

export default MemberInfo;
