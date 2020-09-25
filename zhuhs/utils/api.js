import request from '@/utils/request.js'

// 在您需要请求的地方直接使用该api
export function getData(data) {
    return request.request({
        url: '/zhuna/koc/user/info',
        method: 'POST',
        data: data
    })
}
export function formSubmit(data) {
    return request.request({
        url: '/zhuna/demand/add_from_h5',
        method: 'POST',
        data: data
    })
}