import fetch from 'isomorphic-fetch';

const URL = 'https://fcctop100.herokuapp.com/api/fccusers/top'
const REQUEST = 'campers/REQUEST';
const OK = 'campers/OK';
const ERROR = 'campers/ERROR';
const FILTER = 'campers/FILTER';

export const camperActions = {
  REQUEST,
  OK,
  ERROR,
  FILTER
}

const getCamperRequest = (field) => ({
  type: REQUEST,
  field
})

const getCamperOk = (payload, field) => ({
  type: OK,
  payload,
  field
})

const getCamperError = (payload, field) => ({
  type: ERROR,
  payload,
  field
})

export const setVisibility = (filter) => ({
  type: FILTER,
  filter
})

export const getCamper = (field) => (dispatch, getState) => {
  dispatch(getCamperRequest(field))

  return fetch(`${URL}/${field}`)
    .then(response => response.json(field))
    .then(json => {
      dispatch(getCamperOk(json, field))
    })
    .catch(error => {
      dispatch(getCamperError(error, field))
    })
}
