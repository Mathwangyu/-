import api from '@/api/book';

const requestBannerData = () => (dispatch, getSate) => {
  api.requestBannerData().then(data => {
    
    console.log(data)
    dispatch({type:'changeBannerb', data})
  })
}
const requestListData = () => (dispatch, getSate) => {
  api.requestListData().then(data => {
    dispatch({type:'changeListb', data})
  })
}
const requestBookData = () => (dispatch, getSate) => {
  api.requestBookData().then(data => {
    dispatch({type:'changeBook', data})
  })
}

export default {requestBannerData,requestListData,requestBookData}