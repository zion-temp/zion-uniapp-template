import { baseUrl } from '@/config/index.js'
import store from '@/store/index.js' 

export default function fetch(url, params, method="POST"){
	 return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data: params,
			method,
			header: {
				'content-type': 'application/json;charset=UTF-8',
				'phonenum':store.state.username,
				'session':store.state.token
			 // 'custom-header': 'hello' //自定义请求头信息
			 // 'Token':getUserToken()
			},
			success: (res) => {
				if(res.data.status_code == 200) {
					resolve(res.data)
				}else {
					uni.showToast({
					    title: res.data.msg,
					    duration: 2000,
						icon:'none',
						position :'top'
					});
					return false;
				}
			},
			fail: (rej) => {
				reject(rej)
			}
		 });
	 })
}
