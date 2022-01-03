import { all } from "redux-saga/effects";

import LayoutSaga from "./saga";

export default function* rootSaga() {
    yield all([
        LayoutSaga()
    ])
};