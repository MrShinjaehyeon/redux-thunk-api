import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MemberList({ datas }) {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {datas.data.map((member) => (
          <li key={member.id}>
            <Link to={`/member/${member.id}`}>
              {member.name}[{member.department}]
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/member/create")}>멤버 추가</button>
    </div>
  );
}

export default MemberList;
