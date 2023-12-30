import axios from 'axios'

axios.defaults.withCredentials = true
const request = axios.create({
    baseURL: '/api',
    timeout: 30 * 1000
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        // console.log(config.data);
        config.data = JSON.stringify(config.data)
        config.headers = {
            'Content-Type': 'application/json',
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

request.interceptors.response.use((response) => {
        return response.data
    }, (error) => {
        /** *** 接收到异常响应的处理开始 *****/
        console.error(error)
        let { message } = error
        if (message == 'Network Error') {
            message = '网络连接超时，请稍后再试'
        } else if (message.includes('timeout')) {
            message = '网络连接超时，请稍后再试'
        } else if (message.includes('Request failed with status code')) {
            message = '网络连接异常'
        }
        console.log("[axios error]---", message)

        return Promise.reject(error.message)
    }
)

export default request
