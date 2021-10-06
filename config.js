// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const domain = "https://qrcodehaugiang.com.vn:8080/thuongmainongsan"

const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://192.168.4.173:8080/thuongmainongsan' // development api
    : domain // production api

const access = {}

export {
    apiUrl,
    access,
    domain
};
