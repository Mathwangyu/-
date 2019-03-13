
const reducer = (state = {bannerb: [],listb: [],book: []}, action) => {
  const {type, data} = action
  switch (type) {
    case 'changeBannerb':
    console.log(data)
    return {
      bannerb: data,
      listb: state.listb,
      book: state.book
    }
    case 'changeListb':
    return {
      bannerb: state.bannerb,
      listb: data,
      book: state.book
    }
    case 'changeBook':
    return {
      bannerb: state.bannerb,
      listb: state.listb,
      book: data
    }
    default :
    return state
  }
}

export default reducer