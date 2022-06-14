import axiosClient from "../utilities/apiClient"

export function getCategories() {
    const baseURL = "category/categories"
    return axiosClient.get(baseURL)
}