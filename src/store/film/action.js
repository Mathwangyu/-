import api from "@/api/film";

const requestData = (page) => (dispatch, getState) => {
  console.log(2222)
  api.requestData(page).then(data => {
    dispatch({type: 'changeList', data})
  }).catch(err => console.log(err))
}

export default {requestData}