import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 10
const idCardNo = '2301191988'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    name: '@cname',
    cardNo: idCardNo + '@integer(10000000,99999999)',
    status: '@integer(0, 2)',
    address: Mock.Random.county(true)
  }))
}

export default {
  fetchList: config => {
    const { status, name, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (status && item.status !== +status) return false
      if (name && item.name.indexOf(name) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  fetch: (config) => {
    const { id } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  create: (config) => {
    const account = JSON.parse(config.body)
    List.push(account)
    return {
      data: 'success'
    }
  },
  update: (config) => {
    const account = JSON.parse(config.body)
    List.forEach(function(item, index) {
      if (item.id === account.id) {
        List[index] = account
      }
    })
    return {
      data: 'success'
    }
  }
}
