const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://192.168.4.222:8080/thuongmainongsan' // development api
    : 'http://192.168.4.222:8080/thuongmainongsan'; // production api
const access = {
    myResourceDir: 'D:/web/TmdtWebResource/tmdt',
}
export {
    apiUrl,
    access
};
