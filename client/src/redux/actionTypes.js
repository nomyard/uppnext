import axios from 'axios';
import { API_URL } from '../api';

// Events
export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const LIST_EVENTS = 'LIST_EVENTS';
export const SHOW_DETAILS = 'SHOW_DETAILS';

// invitations
export const SEND_INVITES = 'SEND_INVITES';
export const SAVE_INVITATIONS = 'SAVE_INVITATIONS';
export const REMOVE_INVITATION = 'REMOVE_INVITATION';
export const ADD_INVITATION = 'ADD_INVITATION';

// Sign up
export const SIGN_UP = 'SIGN_UP';
export const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT';

// admin config
export const ADD_ADMIN = 'ADD_ADMIN';
export const REMOVE_ADMIN = 'REMOVE_ADMIN';

// auth
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// views
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// settings
export const NOTIFY_EMAIL = 'NOTIFY_EMAIL';
export const NOTIFY_TEXT = 'NOTIFY_TEXT'; 

// routing