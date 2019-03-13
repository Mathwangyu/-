import { connect } from 'react-redux'
import UI from './BookUI'
import action from '@/store/book/action'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    banner: state.bookStore.bannerb,
    list: state.bookStore.listb,
    book: state.bookStore.book
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    requestBannerData () {
      dispatch(action.requestBannerData())
    },
    requestListData () {
      dispatch(action.requestListData())
    },
    requestBookData () {
      dispatch(action.requestBookData())
    }
  }
}

const Book = connect(mapStateToProps, mapDispathToProps)(UI)

export default Book