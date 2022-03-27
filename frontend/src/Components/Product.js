import { API_BASE_URL } from '../Constant';
import React from 'react';
import axios from 'axios';

export const Product = function(){
    var url = API_BASE_URL + 'product/'
    axios.get(url)
    .then((res) => {
        return res['data'];
    })
    .catch(error => console.log(error))
}