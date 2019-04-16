import {  UPDATE_COUNT, FETCH_DATA, GET_ONEITEM } from '../actions/types';

export default function imageReducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_COUNT:
            let index = state.initialImages.findIndex(x => x.id === action.payload.image.id);
            if (index >= 0) {
                state.initialImages[index].count = action.payload.count
            }
            return { ...state }
        case GET_ONEITEM:
            return { ...state, initialImages: state.images.slice(0, action.payload.length + 1) }
        case FETCH_DATA:
            return { ...state, images: action.posts, initialImages: action.posts.slice(0, 4) };
        default:
            return state;
    }
}