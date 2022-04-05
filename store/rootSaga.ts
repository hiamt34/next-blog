import { all } from 'redux-saga/effects'
import { categorySaga } from './category/categorySaga';
import { instagramSaga } from './instagram/instagramSaga';
import { postSaga } from './post/postSaga';
import { tagSaga } from './tag/tagSaga';


function* hello() {
    console.log('hello');
    
};

export default function* rootSaga() {
    yield all([hello(), categorySaga(), instagramSaga(), tagSaga(), postSaga()])
};