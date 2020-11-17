import axios from './index'
// 商品分类管理
export function sort(query) {
  return axios({
    url: '/categories',
    method: 'get',
    params: query
  })
}

// 添加分类
export function addSort(query) {
  return axios({
    url: '/categories',
    method: 'post',
    data: query
  })
}

// 根据 id 查询分类
export function searchSort(query) {
  return axios({
    url: '/categories/:id',
    method: 'get',
    params: query
  })
}

// 编辑提交分类
export function editClassify(query) {
  return axios({
    url: 'categories/:id',
    method: 'put',
    data: query
  })
}

// 删除分类
export function delSlot(query) {
  return axios({
    url: 'categories/:id',
    method: 'delete',
    data: query
  })
}
