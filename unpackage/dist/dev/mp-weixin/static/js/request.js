export function http(url, data, method = 'get'){
    return new Promise((resolve,rejecrt)=>{
      uni.request({
        method,
        data,
        url,
        header:{
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': method.toLowerCase() === 'post' ? 'application/x-www-form-urlencoded' : 'application/json',
        },
        success:(res)=>{
          resolve(res.data)
        },
        fail:(res)=>{
          rejecrt(res.data)
        }
      })
    })
  }