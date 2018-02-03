/*
 * action types
 */
export const POST_STATUS = 'POST_STATUS';
export const CLEAR_STATUS = 'CLEAR_STATUS';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

/* handle actions*/
export function postStatus(statusObj) {
  return { type: POST_STATUS, item: statusObj }
}

export function sendMessage(message) {
  return { type: SEND_MESSAGE, item: message }
}
