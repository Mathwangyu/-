import api from "../../api/home";

const requestData = () => (dispatch, getState) => {
  api.requestData().then(data => {
    dispatch({type: 'changeListH', data})
  })
}
const requestBannerData = () => (dispatch, getState) => {
  api.requestBannerData().then(data => {
    dispatch({type: 'changeBannerH', data})
  })
}

export default {requestData, requestBannerData}