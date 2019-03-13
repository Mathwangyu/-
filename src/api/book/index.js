import axios from 'axios';
import baseUrl from '@/api';

const api = {
    requestListData() {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl.filmUrl + '/api/dbtimer/home ')
                .then(data => {

                    console.log(data.data[0].data);
                    resolve(data.data[0].data);
                })
                .catch(err => console.log(err))
        })
    },
    requestBannerData() {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl.filmUrl + '/api/dbtimer/home ')
                .then(data => {
                    console.log(data);
                    resolve(data.data[0].data[3].items);
                })
                .catch(err => console.log(err))
        })
    },
    requestBookData() {
      return new Promise((resolve, reject) => {
          axios.get(baseUrl.filmUrl + '/api/dbtimer/home ')
              .then(data => {
                  console.log(data);
                  resolve(data.data[0].data[4].items);
                  
              })
              .catch(err => console.log(err))
      })
  }

}

export default api