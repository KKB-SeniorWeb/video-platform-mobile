import service from "./service";

//被观看次数
export function getCourseViewsTimes(data){
    return service.request({
        url: '/api/journal/id/course',
        method : 'get',
        data:{
            ...data
        }
    })
}

export function getVideoViewsTimes(data){
    return service.request({
        url: '/api/journal/id/video',
        method: 'get',
        data:{
            ...data
        }
    })
}

export function getArticleViewsTimes(data){
    return service.request({
        url: '/api/journal/id/article',
        method: 'get',
        data:{
            ...data
        }
    })
}

//用户观看记录
export function getCourseViewsRecord(data){
    return service.request({
        url: '/api/journal/user/course',
        method: 'get',
        data:{
            ...data
        }
    })
}

export function getVideoViewsRecord(params){
    console.log(params)
    return service.request({
        url: '/api/journal/user/video',
        method: 'get',
        params
    })
}

export function getArticleRecord(data){
    return service.request({
        url: '/api/journal/user/article',
        method: 'get',
        data:{
            ...data
        }
    })
}

//登录
export function signin(data){
    console.log(data)
    return service.request({
        url: '/api/signin',
        method: 'post',
        data:{
            ...data
        }
    })
}

//注册
export function signup(data){
    console.log(data)
    return service.request({
        url: '/api/signup',
        method: 'post',
        data:{
            ...data
        }
    })
}

export function signupCheck(data){
    return service.request({
        url: '/api/signup_check',
        method: 'post',
        data:{
            ...data
        }
    })
}

//获取视频教程列表
export function getVideoList(query){
    console.log(query)
    return service.request({
        url: '/api/course',
        method: 'get',
    })
}

export function getArticleList(){
    return service.request(({
        url: '/api/article/get/list',
        method: 'get'
    }))
}