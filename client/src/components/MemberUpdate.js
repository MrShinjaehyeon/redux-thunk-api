import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delMember, putMember } from "../modules/member";

const MemberUpdate = ({ id }) => {
  const [checkPw, setCheckPw] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [updateInput, setUpdateInput] = useState({
    email: "",
    password: "",
    name: "",
    department: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, name, department } = updateInput;

  const handleOnChange = (e) => {
    setInputPw(e.target.value);
  };

  const handleUpdateInput = (e) => {
    const { value, name } = e.target;
    setUpdateInput({
      ...updateInput,
      [name]: value,
    });
  };

  const onCheckPw = () => {
    const memberPw = localStorage.getItem(id);
    if (memberPw === inputPw) {
      setCheckPw(true);
    } else {
      alert("잘못된 비밀번호입니다.");
    }
  };

  const clickPut = () => {
    const datas = {
      id: id,
      email: email,
      password: password,
      name: name,
      department: department,
    };
    console.log(id, "정보 수정", datas);
    dispatch(putMember(datas));
    localStorage.removeItem(id);
    setCheckPw(false);
    navigate(`member/${id}`);
  };

  const clickDel = () => {
    console.log(id, "멤버 삭제");
    dispatch(delMember(id));
    localStorage.removeItem(id);
    setCheckPw(false);
    navigate(`/`);
  };

  if (!checkPw) {
    return (
      <>
        <div> 비밀번호 확인</div>
        <div>
          <input onChange={handleOnChange}></input>
          <button onClick={onCheckPw}>확인</button>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <div>
          <input
            placeholder="이메일"
            name="email"
            value={email}
            onChange={handleUpdateInput}
          ></input>
        </div>
        <div>
          <input
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={handleUpdateInput}
          ></input>
        </div>
        <div>
          <input
            placeholder="이름"
            name="name"
            value={name}
            onChange={handleUpdateInput}
          ></input>
        </div>
        <div>
          <input
            placeholder="부서"
            name="department"
            value={department}
            onChange={handleUpdateInput}
          ></input>
        </div>
        <div>
          <button onClick={clickPut}>정보 수정</button>
          <button onClick={clickDel}>멤버 삭제</button>
        </div>
      </div>
    );
  }
};

export default MemberUpdate;
