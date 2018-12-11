// src/js/constants/action-types.js
export const SET_YOUR_PURPOSE = "SET_YOUR_PURPOSE";

export const SET_CREDIT_STATE = "SET_CREDIT_STATE";
export const GET_CREDIT_STATE = "GET_CREDIT_STATE";

export const SET_IDT = "SET_IDT";
export const GET_IDT = "GET_IDT";

export const SET_OPID = "SET_OPID";
export const GET_OPID = "GET_OPID";

export const SET_IDENTITY_ID_ENCRYPTED = "SET_IDENTITY_ID_ENCRYPTED";
export const GET_IDENTITY_ID_ENCRYPTED = "GET_IDENTITY_ID_ENCRYPTED";

export const SET_VERIFY_ID_ENCRYPTED = "SET_VERIFY_ID_ENCRYPTED";
export const GET_VERIFY_ID_ENCRYPTED = "GET_VERIFY_ID_ENCRYPTED";

export const SET_DATA_IDENTITY_ID = "SET_DATA_IDENTITY_ID";
export const GET_DATA_IDENTITY_ID = "GET_DATA_IDENTITY_ID";

export const SET_DATA_VERIFY_ID = "SET_DATA_VERIFY_ID";
export const GET_DATA_VERIFY_ID = "GET_DATA_VERIFY_ID";

export const SET_DATA = "SET_DATA";
export const GET_DATA = "GET_DATA";

export const CREDIT_STATE = {
  CREDIT_STATE_PURPOSE_SELECT_SELECT: 0,
  CREDIT_STATE_IDENTITY_SELECT: 1,
  CREDIT_STATE_LOAD_OPID: 2,
  CREDIT_STATE_LOAD_DATAID: 3,
  CREDIT_STATE_DECRYPT_DATA: 4,
  CREDIT_STATE_VERIFY_DATA: 5,
  CREDIT_STATE_VERIFY_DATAID: 6,
  CREDIT_STATE_SUBMIT_DATA: 7,
  CREDIT_STATE_FINISH: 8
};
