import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/mail/list',
    method: 'get',
    params: query
  })
}

export function fetch(id) {
  return request({
    url: '/mail/detail',
    method: 'get',
    params: { id }
  })
}

export function update(data) {
  return request({
    url: '/mail/',
    method: 'put',
    data
  })
}
