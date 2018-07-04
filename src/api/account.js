import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/account/list',
    method: 'get',
    params: query
  })
}

export function fetch(id) {
  return request({
    url: '/account/detail',
    method: 'get',
    params: { id }
  })
}

export function create(data) {
  return request({
    url: '/account/',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/account/',
    method: 'put',
    data
  })
}
