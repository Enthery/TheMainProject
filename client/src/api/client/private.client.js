import axios from "axios";
import queryString from "query-string";

const baseURL = "http://127.0.0.1:5000"
// http://127.0.0.1:5000/api/v1/

const privateClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: params => queryString.stringify(params)
    }
})

privateClient.interceptors.request.use(async config => {
    return {
        ...config,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("actkn")}`
        }
    };
});

privateClient.interceptors.response.use((response) => {
    if (response && response.data) return response.data;
    return response;
}, (err) => {
    throw err.response.data;
});


// privateClient.interceptors.request.use(async config => {
//     const token = localStorage.getItem("actkn");
//     if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
// });

// privateClient.interceptors.response.use((response) => {
//     if (response && response.data) return response.data;
//     return response;
// }, (error) => {
//     if (error.response) {
//         // Сервер вернул ответ с кодом ошибки
//         console.error('Error response:', error.response.data);
//         throw error.response.data;
//     } else if (error.request) {
//         // Запрос был сделан, но ответа не получено
//         console.error('Error request:', error.request);
//         throw new Error('No response received from server');
//     } else {
//         // Другая ошибка
//         console.error('Error', error.message);
//         throw new Error(error.message);
//     }
// });
export default privateClient;
