import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from "../lib/asyncUtils";
import * as api from "../lib/api";

const GET_MEMBER = "modules/member/GET_MEMBER";
const GET_MEMBER_SUCCESS = "modules/member/GET_MEMBER_SUCCESS";
const GET_MEMBER_ERROR = "modules/member/GET_MEMBER_ERROR";

const GET_MEMBERS = "modules/member/GET_MEMBERS";
const GET_MEMBERS_SUCCESS = "modules/member/GET_MEMBERS_SUCCESS";
const GET_MEMBERS_ERROR = "modules/member/GET_MEMBERS_ERROR";

const DEL_MEMBER = "modules/member/DEL_MEMBER";
const DEL_MEMBER_SUCCESS = "modules/member/DEL_MEMBER_SUCCESS";
const DEL_MEMBER_ERROR = "modules/member/DEL_MEMBER_ERROR";

const POST_MEMBER = "modules/member/POST_MEMBER";
const POST_MEMBER_SUCCESS = "modules/member/POST_MEMBER_SUCCESS";
const POST_MEMBER_ERROR = "modules/member/POST_MEMBER_ERROR";

const PUT_MEMBER = "modules/member/PUT_MEMBER";
const PUT_MEMBER_SUCCESS = "modules/member/PUT_MEMBER_SUCCESS";
const PUT_MEMBER_ERROR = "modules/member/PUT_MEMBER_ERROR";

export const getMembers = createPromiseThunk(GET_MEMBERS, api.getMembers);
export const getMember = createPromiseThunk(GET_MEMBER, api.getMember);
export const delMember = createPromiseThunk(DEL_MEMBER, api.delMember);
export const postMember = createPromiseThunk(POST_MEMBER, api.postMember);
export const putMember = createPromiseThunk(PUT_MEMBER, api.putMember);

const initialState = {
  members: reducerUtils.initial(),
  member: reducerUtils.initial(),
};

export default function members(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
    case GET_MEMBERS_SUCCESS:
    case GET_MEMBERS_ERROR:
      return handleAsyncActions(GET_MEMBERS, "members")(state, action);
    case GET_MEMBER:
    case GET_MEMBER_SUCCESS:
    case GET_MEMBER_ERROR:
      return handleAsyncActions(GET_MEMBER, "member")(state, action);
    case DEL_MEMBER:
    case DEL_MEMBER_SUCCESS:
    case DEL_MEMBER_ERROR:
      return handleAsyncActions(DEL_MEMBER, "members")(state, action);
    case POST_MEMBER:
    case POST_MEMBER_SUCCESS:
    case POST_MEMBER_ERROR:
      return handleAsyncActions(POST_MEMBER, "members")(state, action);
    case PUT_MEMBER:
    case PUT_MEMBER_SUCCESS:
    case PUT_MEMBER_ERROR:
      return handleAsyncActions(PUT_MEMBER, "members")(state, action);
    default:
      return state;
  }
}
