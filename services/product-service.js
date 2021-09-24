import { apiUrl, access } from '../config';
import { fetchWrapper } from '../helpers';

export const productService = {
    getHighLightProductAll,
    getDynamicBanner,
    getAllProduct,
    getProductBySlug,
    getProductImageBySlug,
    getHotDealProduct,
    getHotSellProduct,
    getBannerImage1,
    getBannerImage2,
    getItemById

};
const baseUrl = `${apiUrl}/ExecuteQuery`;

function getHighLightProductAll() {
    const body = {
        access: access , 
        queryId: 'home/get_highlight_product' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)
}
function getDynamicBanner() {
    const body = {
        access: access , 
        queryId: 'home/get_dynamic_banner_image' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)
}
function getAllProduct() {
    const body = {
        access: access , 
        queryId: 'home/get_all_product' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)
}
function getProductBySlug(slug) {
    const body = {
        access: access , 
        queryId: 'home/get_product_by_slug' ,
        bindVariables: [slug]
    }
    return fetchWrapper.post(baseUrl, body)
}
function getProductImageBySlug(slug) {
    const body = {
        access: access , 
        queryId: 'get_product_image_by_slug' ,
        bindVariables: [slug]
    }
    return fetchWrapper.post(baseUrl, body)
}
function getHotDealProduct() {
    const body = {
        access: access , 
        queryId: 'get_hotdeal_product' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)

}
function getHotSellProduct() {
    const body = {
        access: access , 
        queryId: 'get_hotsell_product' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)

}
function getBannerImage1() {
    const body = {
        access: access , 
        queryId: 'home/get_banner_1_image' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)
}
function getBannerImage2() {
    const body = {
        access: access , 
        queryId: 'home/get_banner_2_image' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)
}
function getItemById(ids) {
    const body = {
        access: access , 
        queryId: 'get_hotdeal_product' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)
}