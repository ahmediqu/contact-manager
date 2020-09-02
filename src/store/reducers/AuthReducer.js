const intState = {
    authResponse: null
}
const AuthReducer = (state=intState, action) => {
   switch(action.type){
       case 'SHORT_PASSWORD':
           console.log(action);
           return {
               ...state,
               authResponse:'Password is too short',
           }
        case 'SIGNUP_SUCCESS':
            console.log(action);
           return {
               ...state,
               authResponse:'Sign up was successfully done'
           }
        case 'SIGNUP_ERROR':
            console.log(action);
           return {
               ...state,
               authResponse:action.error.message
           }
        case 'CODE_ERROR':
            console.log(action);
           return {
               ...state,
               authResponse:'Please try again letter'
           }
        default:
           return state
   }
}
export default AuthReducer;