// import { Switch } from "antd-mobile";

const reducer = (state = {list: [], banner: []}, action) => {
  const {type, data} = action
  switch (type) {
    case 'changeListH':
      return {
        list: data,
        banner: state.banner
      }
    case 'changeBannerH':
    return {
      list: state.list,
      banner: data
    }
    default:
    return state
  }
}

export default reducer