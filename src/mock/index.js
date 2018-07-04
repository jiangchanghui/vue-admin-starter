import Mock from 'mockjs'
import loginAPI from './login'
import accountApi from './account'
import mailAPI from './mail'

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// // 文章相关
// Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
// Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
// Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
// Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
// Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)
//
//
// 账户相关
Mock.mock(/\/account\/list/, 'get', accountApi.fetchList)
Mock.mock(/\/account\/detail/, 'get', accountApi.fetch)
Mock.mock(/\/account/, 'post', accountApi.create)
Mock.mock(/\/account/, 'put', accountApi.update)

// 消息相关
Mock.mock(/\/mail\/list/, 'get', mailAPI.fetchList)
Mock.mock(/\/mail\/detail/, 'get', mailAPI.fetch)
Mock.mock(/\/mail/, 'put', mailAPI.update)
//
// // 搜索相关
// Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)
//
// // 账单相关
// Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

export default Mock
