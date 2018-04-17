import request from '@/utils/request'

export default function getCpu() {
  return request({
    url: '/panorama/cpu',
    method: 'get'
  })
}
