
import { FETCH_DATA,GET_ONEITEM,UPDATE_COUNT } from './types';
import axios from 'axios';


export const getOneMoreItem = (length) => {
  return{
    type:GET_ONEITEM,
    payload:{
      length
    }
  }
};

export const updateCount = (image,count) => {
  return{
    type:UPDATE_COUNT,
    payload:{
      image,
      count
    }
  }
};




export const fethData = (posts) => {
  return {
    type: FETCH_DATA,
    posts
  }
};

export const fetchAllImages = () => {
  return (dispatch) => {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        dispatch(fethData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};