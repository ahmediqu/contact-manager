import Httpservice from './Httpservice';

export const SignupService = (credentials) =>{
    const http = new Httpservice();
    // console.log(HttpService);
    let signUpUrl = "user/register";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}

export const LoginUser = (credentials,propsHistory) =>{
    const http = new Httpservice();
    // console.log(HttpService);
    let signUpUrl = "user/login";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error; 
         });
}