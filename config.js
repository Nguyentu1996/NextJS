const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://192.168.4.222:8080/thuongmainongsan' // development api
    : 'http://192.168.4.222:8080/thuongmainongsan'; // production api
const access = {
    myResourceDir: 'C:/web/TmdtWebResource/tmdt',
}
const domain = "https://qrcodehaugiang.com.vn:8080/thuongmainongsan"
// "http://192.168.4.222:8080/thuongmainongsan"
export {
    apiUrl,
    access,
    domain
};
