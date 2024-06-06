
// Получение базового URL и ключа API из переменных окружения

const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

// Функция для создания URL для API TMDB

const getUrl = (endpoint, params) => {
    const qs = new URLSearchParams(params);

    return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };