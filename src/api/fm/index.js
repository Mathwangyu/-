import axios from 'axios';
import baseUrl from '@/api';

const api = {
    requestData() {
        return new Promise((resolve, reject) => {
            axios.get( baseUrl.filmUrl + '/api/dbtimer/dbtfm')
                .then(data => {
                    console.log(data);
                    resolve(data.data[0].data);
                })
                .catch(err => console.log(err))
        })
        
    },
    requestListData() {
      return new Promise((resolve, reject) => {
          axios.get( baseUrl.filmUrl + '/api/dbread/dblzxs?type=kinds&pageCode=1&pageNumber=30')
              .then(data => {
                  console.log(data);
                  resolve(data.data[0].data);
              })
              .catch(err => console.log(err))
      })
      
  }
}

export default api