import { connect } from 'react-redux';
import UI from './HomeUI';
import action from '@/store/home/action';

const mapStateToProps = (state) => {
  return {
    list: state.homeStore.list,
    banner: state.homeStore.banner
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    requestData () {
      dispatch(action.requestData())
    },
    requestBannerData () {
      dispatch(action.requestBannerData())
    }
  }
}

const Home = connect(mapStateToProps, mapDispathToProps)(UI);

export default Home