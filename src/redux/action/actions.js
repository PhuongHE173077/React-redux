import { INCREMENT, DECREMENT } from './types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,
        payload: { name: 'phuong', address: 'bac giang' }

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};