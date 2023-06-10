import { CATEGORY_NEW_TASK, NATIJA_NEW_TASK, SUM_NEW_TASK, TESTS_NEW_TASK, TIMER_NEW_TASK, USER_NEW_TASK} from "./types";

const initialState = {
    categorys: [
        {
            id: 1,
            tetle: 'Any category',
            number: 0,
        },
        {
            id: 2,
            tetle: 'General Knowledge',
            number: 9,
        },
        {
            id: 3,
            tetle: 'Entertainment: Books',
            number: 10,
        },
        {
            id: 4,
            tetle: 'Entertainment: Film',
            number: 11,
        },
        {
            id: 5,
            tetle: 'Entertainment: Music',
            number: 12,
        },
        {
            id: 6,
            tetle: 'Entertainment: Musicals & Theaters',
            number: 13,
        },
        {
            id: 7,
            tetle: 'Entertainment: Television',
            number: 14,
        },
        {
            id: 8,
            tetle: 'Entertainment: Video Games',
            number: 15,
        },
        {
            id: 9,
            tetle: 'Entertainment: Board Games',
            number: 16,
        },
        {
            id: 10,
            tetle: 'Sciense & Nature',
            number: 17,
        },
        {
            id: 11,
            tetle: 'Sciense & Computers',
            number: 18,
        },
        {
            id: 12,
            tetle: 'Sciense & Mathematics',
            number: 19,
        },
        {
            id: 13,
            tetle: 'Mythology',
            number: 20,
        },
        {
            id: 14,
            tetle: 'Sports',
            number: 21,
        },
        {
            id: 15,
            tetle: 'Geography',
            number: 22,
        },
        {
            id: 16,
            tetle: 'History',
            number: 23,
        },
        {
            id: 17,
            tetle: 'Politics',
            number: 24,
        },
        {
            id: 18,
            tetle: 'Art',
            number: 25,
        },
        {
            id: 19,
            tetle: 'Caleberities',
            number: 26,
        },
        {
            id: 20,
            tetle: 'Animals',
            number: 27,
        },
        {
            id: 21,
            tetle: 'Vehicles',
            number: 28,
        },
        {
            id: 22,
            tetle: 'Entertainment: Comics',
            number: 29,
        },
        {
            id: 23,
            tetle: 'Sciense & Gadgets',
            number: 30,
        },
        {
            id: 24,
            tetle: 'Entertainment: Japanese Anime & Manga',
            number: 31,
        },
        {
            id: 25,
            tetle: 'Entertainment: Cartoon & Animations',
            number: 32,
        },
      ],
    category: "", 
    tests: [],
    timer: 60*30,
    sum: 0,
    user: {},
    natijabot: {},
};


const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case CATEGORY_NEW_TASK:
            return {...state, category: action.payload}; 
        case TESTS_NEW_TASK: 
            return {...state, tests: action.payload};
        case TIMER_NEW_TASK: 
            return {...state, timer: action.payload};
        case SUM_NEW_TASK: 
            return {...state, sum: action.payload};
        case USER_NEW_TASK: 
            return {...state, user: action.payload};
        case NATIJA_NEW_TASK: 
            return {...state, natijabot: action.payload};
    
        default:
            return state;
    }
};

export default reducer;