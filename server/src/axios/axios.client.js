import axios from "axios";

// Асинхронная функция для выполнения HTTP GET запроса

const get = async (url) => {
    const response = await axios.get(url, {
        headers: {
            Accept: "application/json",
            "Accept-Encoding": "identity"
        }
    });
    return response.data;
}

export default { get };