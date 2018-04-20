import request from '@/utils/request'

export default function getHostPanorama() {
  return request({
    url: '/src/api/customView/HostPanorama.json'
    // method: 'get'
  })
}
