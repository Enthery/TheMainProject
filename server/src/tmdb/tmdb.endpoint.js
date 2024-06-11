import tmdbConfig from "./tmdb.config.js";

// Определение конечных точек API TMDB

const tmdbEndpoints = {
    // Получение списка медиа по типу и категории
    mediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page
    ),
    // Получение деталей медиа по типу и ID
    mediaDetail: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}`
    ),
    // Получение списка жанров по типу медиа
    mediaGenres: ({ mediaType }) => tmdbConfig.getUrl(
        `genre/${mediaType}/list`
    ),
    // Получение списка актеров по типу медиа и ID
    mediaCredits: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/credits`
    ),
    // Получение видео по типу медиа и ID
    mediaVideos: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
    ),
    // Получение рекомендаций по типу медиа и ID
    mediaRecommend: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/recommendations`
    ),
    // Получение изображений по типу медиа и ID
    mediaImages: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/images`
    ),
    // Поиск медиа по типу, запросу и странице
    mediaSearch: ({ mediaType, query, page }) => tmdbConfig.getUrl(
        `search/${mediaType}`, { query, page }
    ),
    // Получение деталей персоны по ID
    personDetail: ({ personId }) => tmdbConfig.getUrl(
        `person/${personId}`
    ),
    // Получение медиа персоны по ID
    personMedias: ({ personId }) => tmdbConfig.getUrl(
        `person/${personId}/combined_credits`
    ),
};

// const tmdbEndpoints = { ... }; - Это объект, который содержит набор функций. 
// Каждая функция представляет собой конечную точку API TMDB.
// Каждая функция в tmdbEndpoints принимает объект с параметрами и 
// использует эти параметры для создания URL для определенной конечной точки API TMDB.

export default tmdbEndpoints;