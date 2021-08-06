const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://thuongmainongsan.com:8080' // development api
    : 'http://thuongmainongsan.com:8080'; // production api
const access = {
    myResourceDir: 'C:/web/TmdtWebResource/tmdt',
}
const domain = "http://thuongmainongsan.com:8080/"
export {
    apiUrl,
    access,
    domain
};
