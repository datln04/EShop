import axiosClient from "../utilities/apiClient"


export function getProducts() {
    const baseURL = "product/productUnlimited"
    return axiosClient.get(baseURL)
}

export function getProductDetail(productID) {
    const baseURL = `product/detail/${productID}`
    return axiosClient.get(baseURL)
}