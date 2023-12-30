import request from '@/utils/axios'

// 获取用户信息
export function getInfo (params) {
    return request({
        url: '/getInfo', // 假接口用来测试
        method: 'get',
        params
    })
}

export function getList (data) {
    return request({
        url: '/getList', // 假接口用来测试
        method: 'post',
        data
    })
}
