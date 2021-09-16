import qs from 'qs'
import request from './request'

/**
 * Post请求，application/x-www-form-urlencoded
 * 参数以form形式提交，后端使用@RequestParam接收
 * @param url
 * @param params
 * @returns {*}
 */
export const postRequest = (url, params) => {
  return request({
    method: 'post',
    url: url,
    data: qs.stringify(params, { indices: false })
  })
}

/**
 * Post请求，参数以json格式放在body中
 * 可以传json也可以直接传对象，后端使用@RequestBody接收
 * @param url
 * @param params
 * @returns {*}
 */
export const postJsonRequest = (url, params) => {
  return request({
    method: 'post',
    url: url,
    contentType: 'application/json; charset=utf-8',
    data: params
  })
}

/**
 * Get请求，application/x-www-form-urlencoded
 * 参数以form形式提交，后端使用@RequestParam接收
 * @param url
 * @param params
 * @returns {*}
 */
export const getRequest = (url, params) => {
  return request.get(url, {
    params: params
  })
}

export const putRequest = (url, params) => {
  return request({
    method: 'put',
    url: url,
    data: params
  })
}

export const deleteRequest = (url, params) => {
  return request({
    method: 'delete',
    url: url,
    data: params
  })
}

