import axios from './index'

// 权限管理

// 所有权限列表
export function login(query) {
  return axios({
    url: '/rights/:type',
    method: 'get',
    params: query
  })
}

// 左侧菜单权限
export function usersList(query) {
  return axios({
    url: '/menus',
    method: 'get',
    params: query
  })
}

// 角色管理

// 角色列表
export function roleList(query) {
  return axios({
    url: '/roles',
    method: 'get',
    params: query
  })
}

// 添加角色
export function addRole(query) {
  return axios({
    url: '/roles',
    method: 'post',
    data: query
  })
}

// 根据 ID 查询角色
export function searchRole(query) {
  return axios({
    url: 'roles/:id',
    method: 'get',
    params: query
  })
}

// 编辑提交角色
export function editRole(query) {
  return axios({
    url: 'roles/:id',
    method: 'put',
    data: query
  })
}

// 删除角色
export function delRole(query) {
  return axios({
    url: 'roles/:id',
    method: 'delete',
    data: query
  })
}

// 角色授权
export function impower(query) {
  return axios({
    url: 'roles/:roleId/rights',
    method: 'post',
    data: query
  })
}

// 删除角色指定权限 
export function delImpower(query) {
  return axios({
    url: 'roles/:roleId/rights/:rightId',
    method: 'delete',
    data: query
  })
}