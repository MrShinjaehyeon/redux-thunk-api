import React from "react";
import { useParams } from "react-router-dom";
import MemberUpdateContainer from "../containers/MemberUpdateContainer";

function MemberUpdatePage() {
  const { id } = useParams();
  return <MemberUpdateContainer id={id} />;
}

export default MemberUpdatePage;
