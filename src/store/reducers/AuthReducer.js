const initState = {
    authResponse: null,
    message: null
}
const AuthReducer = (state=initState, action) => {
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
               authResponse:action.res.message,
           }
        case 'CODE_ERROR':
            console.log(action);
           return {
               ...state,
               authResponse:'Please try again letter'
           }
        case 'LOGIN_SUCCESS':
            console.log(action);
           return {
               ...state,
               authResponse:'Reacdirecting you a Dashboard...'
           }
        case 'LOGIN_ERROR':
            console.log(action);
           return {
               ...state,
               authResponse:"Creadintaial not match",

           }
        default:
           return state
   }
}
export default AuthReducer;