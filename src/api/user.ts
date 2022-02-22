import request from '@/utils/request'

type loginData = {
  username:string,
  password:string
}
export function login(data:loginData) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token:string) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
