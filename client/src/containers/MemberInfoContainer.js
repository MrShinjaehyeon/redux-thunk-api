import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MemberInfo from "../components/MemberInfo";
import { getMember } from "../modules/member";

function MemberInfoContainer(memberId) {
  const { data, loading, error } = useSelector((state) => state.member.member);
  const dispatch = useDispatch();
  const id = memberId.memberId;

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getMember(id));
  }, [id, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <MemberInfo datas={data} />;
}

export default MemberInfoContainer;
