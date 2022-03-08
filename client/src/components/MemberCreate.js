import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postMember } from "../modules/member";

const MemberCreate = () => {
  const [createInput, setCreateInput] = useState({
    email: "",
    password: "",
    name: "",
    department: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, name, department } = createInput;

  const handleCreateInput = (e) => {
    const { value, name } = e.target;
    setCreateInput({
      ...createInput,
      [name]: value,
    });
  };

  const clickCreate = () => {
    console.log("멤버 생성");
    dispatch(postMember(createInput));
    navigate("/");
  };
  return (
    <div>
      <div>
        <input
          placeholder="이메일"
          name="email"
          value={email}
          onChange={handleCreateInput}
        ></input>
      </div>
      <div>
        <input
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={handleCreateInput}
        ></input>
      </div>
      <div>
        <input
          placeholder="이름"
          name="name"
          value={name}
          onChange={handleCreateInput}
        ></input>
      </div>
      <div>
        <input
          placeholder="부서"
          name="department"
          value={department}
          onChange={handleCreateInput}
        ></input>
      </div>
      <div>
        <button onClick={clickCreate}>생성</button>
      </div>
    </div>
  );
};

export default MemberCreate;
