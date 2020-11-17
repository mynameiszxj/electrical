import axios from './index'
// 登录
export function login(query) {
  return axios({
    url: '/login',
    method: 'post',
    data: query
  })
}

// 用户管理

// 用户数据列表
export function usersList(query) {
  return axios({
    url: '/users',
    method: 'get',
    params: query
  })
}

// 添加用户
export function addUser(query) {
  return axios({
    url: '/users',
    method: 'post',
    data: query
  })
}

// 修改用户状态
export function changeUser(query) {
  return axios({
    url: '/users/:uId/state/:type',
    method: 'put',
    data: query
  })
}

// 根据 ID 查询用户信息
export function searchUser(query) {
  return axios({
    url: '/users/:uId/state/:type',
    method: 'get',
    params: query
  })
}

// 编辑用户提交
export function editUser(query) {
  return axios({
    url: 'users/:id',
    method: 'put',
    data: query
  })
}

// 删除单个用户
export function delUser(query) {
  return axios({
    url: 'users/:id',
    method: 'delete',
    data: query
  })
}

// 分配用户角色
export function allotUser(query) {
  return axios({
    url: 'users/:id/role',
    method: 'put',
    data: query
  })
}