import axios from 'axios';
import baseUrl from '@/api';

const api = {
    requestData(username, password) {
        return new Promise((resolve, reject) => {
            axios.get( baseUrl.filmUrl + '/api/login?tel='+username+'&password=' + password)
                .then(data => {
                    console.log(data);
                    resolve(data.data.data);
                })
                .catch(err => console.log(err))
        })
        
    },
    requestRgData(username, password) {
      return new Promise((resolve, reject) => {
          axios.get( baseUrl.filmUrl + '/api/register?tel='+ username +'&password=' + password)
              .then(data => {
                  console.log(data);
                  resolve(data.data.data);
              })
              .catch(err => console.log(err))
      })
      
  }
}

export default api