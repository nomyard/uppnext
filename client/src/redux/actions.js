import axios from 'axios';
import { API_URL } from '../api';

/*****************************************************
 * ********  A U T H E N T I C A T I O N  ***********
 * 1. Initial action 
 * 2. Export status actiontypes 
 * 3. Action creator
 ******************************************************/

const API_GET_CONFIRM_TOKEN = 'API_GET_CONFIRM_TOKEN';
export const API_GET_CONFIRM_TOKEN_SENT = 'API_GET_CONFIRM_TOKEN_SENT';
export const API_GET_CONFIRM_TOKEN_SUCCESS = 'API_GET_CONFIRM_TOKEN_SUCCESS';
export const API_GET_CONFIRM_TOKEN_ERROR = 'API_GET_CONFIRM_TOKEN_ERROR';
export const apiGetConfirmToken = token => ({
  type: API_GET_CONFIRM_TOKEN,
  payload: token
});

const API_POST_AUTH_SIGNUP = 'API_POST_AUTH_SIGNUP';
export const API_POST_AUTH_SIGNUP_SENT = 'API_POST_AUTH_SIGNUP_SENT';
export const API_POST_AUTH_SIGNUP_SUCCESS = 'API_POST_AUTH_SIGNUP_SUCCESS';
export const API_POST_AUTH_SIGNUP_ERROR = 'API_POST_AUTH_SIGNUP_ERROR';
export const apiPostAuthSignUp = form => ({
  type: API_POST_AUTH_SIGNUP,
  payload: form
});

const API_POST_AUTH_LOGIN = 'API_POST_AUTH_LOGIN';
export const API_POST_AUTH_LOGIN_SENT = 'API_POST_AUTH_LOGIN_SENT';
export const API_POST_AUTH_LOGIN_SUCCESS = 'API_POST_AUTH_LOGIN_SUCCESS';
export const API_POST_AUTH_LOGIN_ERROR = 'API_POST_AUTH_LOGIN_ERROR';
export const apiPostAuthLogin = form => ({
  type: API_POST_AUTH_LOGIN,
  payload: form
});


const API_GET_USER_DATA = 'API_GET_USER_DATA';
export const API_GET_USER_DATA_SENT = 'API_GET_USER_DATA_SENT';
export const API_GET_USER_DATA_SUCCESS = 'API_GET_USER_DATA_SUCCESS';
export const API_GET_USER_DATA_ERROR = 'API_GET_USER_DATA_ERROR';
export const apiGetUserData = token => ({
  type: API_GET_USER_DATA,
  payload: token
});

const API_GET_AUTH_LOGOUT = 'API_GET_AUTH_LOGOUT';
export const API_GET_AUTH_LOGOUT_SENT = 'API_GET_AUTH_LOGOUT_SENT';
export const API_GET_AUTH_LOGOUT_SUCCESS = 'API_GET_AUTH_LOGOUT_SUCCESS';
export const API_GET_AUTH_LOGOUT_ERROR = 'API_GET_AUTH_LOGOUT_ERROR';
export const apiGetAuthLogout = token => ({
  type: API_GET_AUTH_LOGOUT,
  payload: token
});

/*************************************************************************
 ****************      E V E N T S     *****************
 ************************************************************************/
const API_GET_LIST_EVENTS = 'API_GET_LIST_EVENTS';
export const API_GET_LIST_EVENTS_SENT = 'API_GET_LIST_EVENTS';
export const API_GET_LIST_EVENTS_SUCCESS = 'API_GET_LIST_EVENTS_SUCCESS';
export const API_GET_LIST_EVENTS_ERROR = 'API_GET_LIST_EVENTS_ERROR';
export const apiGetListEvents = token => ({
  type: API_GET_LIST_EVENTS,
  payload: token
});

const API_GET_EVENT_DETAILS = 'API_GET_EVENT_DETAILS';
export const API_GET_EVENT_DETAILS_SENT = 'API_GET_EVENT_DETAILS_SENT';
export const API_GET_EVENT_DETAILS_SUCCESS = 'API_GET_EVENT_DETAILS_SUCCESS';
export const API_GET_EVENT_DETAILS_ERROR = 'API_GET_EVENT_DETAILS_ERROR';
const apiGetEventDetails = (token, id) => ({
    type: API_GET_EVENT_DETAILS,
    payload: { token, id }
  });

const API_POST_ADD_EVENT = 'API_POST_ADD_EVENT';
export const API_POST_ADD_EVENT_SENT = 'API_POST_ADD_EVENT_SENT';
export const API_POST_ADD_EVENT_SUCCESS = 'API_POST_ADD_EVENT_SUCCESS';
export const API_POST_ADD_EVENT_ERROR = 'API_POST_ADD_EVENT_ERROR';
export const apiPostAddEvent = form => ({
  type: API_POST_ADD_EVENT,
  payload: form
});

const API_DELETE_REMOVE_EVENT = 'API_DELETE_REMOVE_EVENT';
export const API_DELETE_REMOVE_EVENT_SENT = 'API_DELETE_REMOVE_EVENT_SENT';
export const API_DELETE_REMOVE_EVENT_SUCCESS = 'API_DELETE_REMOVE_EVENT_SUCCESS';
export const API_DELETE_REMOVE_EVENT_ERROR = 'API_DELETE_REMOVE_EVENT_ERROR';
const apiDeleteRemoveEvent = id => ({
  type: API_DELETE_REMOVE_EVENT,
  payload: id
});

/********************************************************************************************
 ***********************       A D M I N I S T R A T I O N      *****************************
 ********************************************************************************************/
const API_GET_SENT_INVITATIONS = 'API_GET_SENT_INVITATIONS';
export const API_GET_SENT_INVITATIONS_SENT = 'API_GET_SENT_INVITATIONS_SENT';
export const API_GET_SENT_INVITATIONS_SUCCESS = 'API_GET_SENT_INVITATIONS_SUCCESS';
export const API_GET_SENT_INVITATIONS_ERROR = 'API_GET_SENT_INVITATIONS_ERROR';
export const apiGetSentInvitations = token => ({
  type: API_GET_SENT_INVITATIONS,
  payload: token
});

const API_POST_SEND_INVITATIONS = 'API_POST_SEND_INVITATIONS';
export const API_POST_SEND_INVITATIONS_SENT = 'API_POST_SEND_INVITATIONS_SENT';
export const API_POST_SEND_INVITATIONS_SUCCESS = 'API_POST_SEND_INVITATIONS_SUCCESS';
export const API_POST_SEND_INVITATIONS_ERROR = 'API_POST_SEND_INVITATIONS_ERROR';
export const apiPostSendInvitations = form => ({
  type: API_POST_SEND_INVITATIONS,
  payload: form
})

/* ******************************************************************************************************
 * ****************************         S E T T I N G S          ****************************************
 * *****************************************************************************************************/

const API_PUT_NOTIFY_EMAIL = 'API_PUT_NOTIFY_EMAIL';
export const API_PUT_NOTIFY_EMAIL_SENT = 'API_PUT_NOTIFY_EMAIL_SENT'; 
export const API_PUT_NOTIFY_EMAIL_SUCCESS = 'API_PUT_NOTIFY_EMAIL_SUCCESS';
export const API_PUT_NOTIFY_EMAIL_ERROR = 'API_PUT_NOTIFY_EMAIL_ERROR';
export const apiPutNotifyEmail = target => ({
  type: API_PUT_NOTIFY_EMAIL,
  payload: target
});

const API_PUT_NOTIFY_TEXT = 'API_PUT_NOTIFY_TEXT';
export const API_PUT_NOTIFY_TEXT_SENT = 'API_PUT_NOTIFY_TEXT_SENT'; 
export const API_PUT_NOTIFY_TEXT_SUCCESS = 'API_PUT_NOTIFY_TEXT_SUCCESS';
export const API_PUT_NOTIFY_TEXT_ERROR = 'API_PUT_NOTIFY_TEXT_ERROR';
export const apiPutNotifyText = target => ({
  type: API_PUT_NOTIFY_TEXT,
  payload: target
});