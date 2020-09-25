let BASE_URL = ""
if (process.env.NODE_ENV === 'development') {
	// 开发环境
	BASE_URL = 'https://test01zhuna.magi.link'
} else {
	// 生产环境
	BASE_URL = 'https://zhuna.magi.link'
}
// {
// 	// 基本访问地址
// 	// "BASE_URL": "https://zhuna.magi.link"
// 	// "BASE_URL": "https://test01zhuna.magi.link"
// }
export default BASE_URL