import { connect } from 'react-redux'
import UI from './FilmUI'
import action from '@/store/film/action'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    list: state.filmStore.list
    
  }
}

const mapDispathToProps = (dispatch) => {
  console.log(111111111)
  return  {
    requestData (page) {
      dispatch(action.requestData(page))
    }
  }
}

const Film = connect(mapStateToProps, mapDispathToProps)(UI)

export default Film