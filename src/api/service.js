import axios from 'axios'

/* const DEV = 'dev';
const PROD = 'prod';
const env = DEV; */

const service = axios.create({
    baseURL: "http://localhost:8080",
    // timeout: 3000
})

//请求拦截器
service.interceptors.request.use((config) => {
    let token = localStorage.getItem('token');
    console.log('token:',token)
    if(token){
        config.headers.Authorization =  "Bearer " + token;
    }
    return config;
})

//响应拦截器
service.interceptors.response.use((res)=>{
    return res
},(err)=>{
    console.log(err)
    switch (err.response.status) {
        case 401 :
            console.log('鉴权未通过，登录')
            break;
    }
        

})

export default service;