const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'https://qrcodehaugiang.com.vn:8080/thuongmainongsan' // development api
    : 'https://qrcodehaugiang.com.vn:8080/thuongmainongsan'; // production api
const access = {
    myResourceDir: 'C:/web/TmdtWebResource/tmdt',
}
const domain = "https://qrcodehaugiang.com.vn:8080/thuongmainongsan"
export {
    apiUrl,
    access,
    domain
};
