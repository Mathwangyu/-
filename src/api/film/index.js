import axios from 'axios';
import baseUrl from '@/api';

const api = {
    requestData(page) {
        return new Promise((resolve, reject) => {
            axios.get( baseUrl.filmUrl + '/api/movie/remen?pageCode=1&pageNumber=' + page)
                .then(data => {
                    console.log(data);
                    resolve(data.data[0].data);
                })
                .catch(err => console.log(err))
        })
    }

}

export default api