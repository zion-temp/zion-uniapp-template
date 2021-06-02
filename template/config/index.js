let baseUrl;
if(process.env.NODE_ENV == 'development'){
	// 开发环境
	baseUrl="http://192.168.1.120:8000"
}else {
	//生产环境
	baseUrl="https://www.zlzjgl.com:8000"
}
export {
	baseUrl,
}