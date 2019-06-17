// 统一管理接口

import request from '@/utils/request'

const api = {
  // /api/user/info 用来获取用户是否登录
  islogin: () => request.get('api/user/info'),
  // /api/login 用户登录
  userlogin: (data) => request.post('/api/login', data),
  // /api/task/list获取首页数据
  taskList: (data) => request.get('/api/task/list', data),
  // 获取加班详情数据
  overtimeDetail: (data) => request.get('api/apply/overtime', data),
  // 获取休假详情数据
  vacationDetail: (data) => request.get('api/apply/vacation', data),
  // 发送附件
  submitFile: (filedata) => request.post('/api/upload', filedata),
  // 提交加班
  submitovertime: (data) => request.post('/api/apply/overtime', data),
  //
  submitvacation: (data) => request.post('/api/apply/vacation', data)
}
export default api
