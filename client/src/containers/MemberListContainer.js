import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MemberList from "../components/MemberList";
import { getMembers } from "../modules/member";

function MemberListContainer() {
  const { data, loading, error } = useSelector((state) => state.member.members);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <MemberList datas={data} />;
}

export default MemberListContainer;
