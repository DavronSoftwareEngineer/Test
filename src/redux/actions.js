import { dispatch } from "./store";
import { CATEGORY_NEW_TASK, NATIJA_NEW_TASK, SUM_NEW_TASK, TESTS_NEW_TASK, TIMER_NEW_TASK, USER_NEW_TASK } from "./types";

export const categoryTask = (category) => {
    dispatch({type: CATEGORY_NEW_TASK, payload: category});
}

export const testsTask = (tests) => {
    dispatch({type: TESTS_NEW_TASK, payload: tests});
}

export const timerTask = (timer) => {
    dispatch({type: TIMER_NEW_TASK, payload: timer});
}

export const sumTask = (sum) => {
    dispatch({type: SUM_NEW_TASK, payload: sum});
}

export const userTask = (isim, fameliya) => {
    dispatch({type: USER_NEW_TASK, payload: {isim: isim, fameliya: fameliya}});
}

export const natijaTask = (nat1, nat2, nat3, nat4, nat5) => {
    dispatch({type: NATIJA_NEW_TASK, payload: {name: nat1, soni: nat2, jamiball: nat3, tugson: nat4, notugson: nat5}});
}
