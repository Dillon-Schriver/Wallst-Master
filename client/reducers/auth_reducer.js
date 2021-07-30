// import * as types from '../actions/types.js';

// const user = JSON.parse(localStorage.getItem('user'));

// // handle initialState here
// const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null};

// // main reducer
// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case types.REGISTER_SUCCESS:
//             return {
//                 ...state,
//                 isLoggedIn: false,
//             };

//         case types.REGISTER_FAIL:
//             return {
//                 ...state,
//                 isLoggedIn: false,
//             };

//         case types.LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 isLoggedIn: true,
//                 user: action.payload.user,
//             };

//         case types.LOGIN_FAIL:
//             return {
//                 ...state,
//                 isLoggedIn: true,
//                 user: action.payload.user,
//             };
        
//         default:
//             return state;
    
//     }
// }

// export default authReducer;