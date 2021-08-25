import { Reducer, initialState } from './Reducer';
import { createStore } from 'redux';

export const ConfigureStore = () => {
    const Store = createStore(
        Reducer,
        initialState
    );
    console.log(Store);
    return Store;
}
