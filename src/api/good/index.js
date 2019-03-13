import axios from 'axios';
import baseUrl from '@/api';

const api = {
    requestData() {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl.filmUrl + '/api/dbread/dbrl')
                .then(data => {
                    console.log(data);
                    resolve(data.data[0].data);
                })
                .catch(err => console.log(err))
        })
    },
    requestBannerData() {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl.filmUrl + '/api/dbdp/dbdphome')
                .then(data => {
                    console.log(data);
                    resolve(data.data);
                })
                .catch(err => console.log(err))
        })
    }

}

export default api