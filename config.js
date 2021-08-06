const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://thuongmainongsan.com:8080/thuongmainongsan' // development api
    : 'http://thuongmainongsan.com:8080/thuongmainongsan'; // production api
const access = {
    myResourceDir: 'C:/web/TmdtWebResource/tmdt',
}
const domain = "http://thuongmainongsan.com:8080/thuongmainongsan/"
export {
    apiUrl,
    access,
    domain
};
