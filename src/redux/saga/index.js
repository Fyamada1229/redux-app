import { all } from 'react-saga/effects';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all({
        userSaga()
    })
}