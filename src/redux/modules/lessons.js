import {createReducer} from '../utils';
import {Map, List} from 'immutable';

const lessons = createReducer({

        "FETCH_LESSONS": (state, action) => {
            return state.set("isNetworkLoading", true)
                .set("networkError", null);
        },

        "FETCH_LESSONS_SUCCESS": (state, action) => {
            return state.set("isNetworkLoading", true)
                .set("lessonsList", List(action.payload));
        },

        "FETCH_CURRENT_PAGE": (state, action) => {
            return state.set("isNetworkLoading", true)
                .set("networkError", null);
        },

        "FETCH_CURRENT_PAGE_SUCCESS": (state, action) => {
            return state.set("isNetworkLoading", false)
                .set("currentPage", action.payload);
        },

        "SAVE_PAGE": (state, action) => {
            return state.set("isNetworkLoading", true)
                .set("networkError", null);
        },


        "NETWORK_RESPONSE_ERROR": (state, action) => {
            return state.set("isNetworkLoading", true)
                .set("networkError", action.payload);
        }

    }, Map({
        networkError: null,
        isNetworkLoading: false,
        lessonsList: List(),
        currentPage: null
    })
);

export const fetchLessons = () => ({
    type: 'FETCH_LESSONS'
})

export const saveLesson = (lesson) => ({
    type: 'SAVE_LESSON',
    payload: lesson
});

export const fetchCurrentPage = (pageID) => ({
    type: 'FETCH_CURRENT_PAGE',
    payload: pageID
})

export const savePage = (page) => ({
    type: 'SAVE_PAGE',
    payload: page
})

export default lessons