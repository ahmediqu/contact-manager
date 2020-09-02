class Httpservice {
    url = 'http://localhost/quickadmin/api';

    postData = async(item ,addUrl) => {
        const token = await localStorage.getItem('user');
        let requriedOptions = {
            method: "POST",
            headers:{
                'Authorization': token,
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(item)
        }

        return fetch(this.url+'/'+addUrl ,requriedOptions).then(
            response=>response.json());
        
    }

    getData = async(addUrl) => {
        const token = await localStorage.getItem('user');
        let requriedOptions = {
            method: "GET",
            headers:{
                'Authorization': token,
                'Content-type': 'Application/json'
            },
            
        }

        return fetch(this.url+'/'+addUrl ,requriedOptions).then(
            response=>response.json());
    }

}

export default Httpservice;