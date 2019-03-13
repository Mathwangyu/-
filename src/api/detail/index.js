import axios from 'axios';
import baseUrl from '@/api';

const api = {
    requestDetailData(id){
        return new Promise((resolve,reject) =>{
            axios.get(baseUrl + 'detail?id=' + id)
                .then(data =>{
                    console.log(data);
                }).catch(err => reject(err))
        })
    }
}