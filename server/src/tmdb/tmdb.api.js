import axiosClient from "../axios/axios.client.js";
import tmdbEndpoints from "./tmdb.endpoint.js";

const tmdbApi = {
    mediaList: async ({ mediaType, mediaCategory, page }) => axiosClient.get(
        tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
    ),
    mediaDetail: async ({ mediaType, page }) => axiosClient.get(
        tmdbEndpoints.mediaDetail({ mediaType, page })
    ),
    mediaGenres: async ({ mediaType }) => axiosClient.get(
        tmdbEndpoints.mediaGenres({ mediaType })
    ),
    mediaCredits: async ({ mediaType, mediaId }) => axiosClient.get(
        tmdbEndpoints.mediaCredits({ mediaType, mediaId })
    ),
    mediaVideos: async ({ mediaType, mediaId }) => axiosClient.get(
        tmdbEndpoints.mediaVideos({ mediaType, mediaId })
    ),
    mediaImages: async ({ mediaType, mediaId }) => axiosClient.get(
        tmdbEndpoints.mediaImages({ mediaType, mediaId })
    ),
    mediaRecommend: async ({ mediaType, mediaId }) => axiosClient.get(
        tmdbEndpoints.mediaRecommend({ mediaType, mediaId })
    ),
    mediaSearch: async ({ mediaType, query, page }) => axiosClient.get(
        tmdbEndpoints.mediaSearch({ mediaType, query, page })
    ),
    personDetails: async ({ personId }) => await axiosClient.get(
        tmdbEndpoints.personDetail({ personId })
    ),
    personMedias: async ({ personId }) => await axiosClient.get(
        tmdbEndpoints.personMedias({ personId })
    )
};

// const tmdbApi = { ... }; - Это объект, который содержит набор асинхронных функций. 
// Каждая функция выполняет HTTP GET запрос к определенной конечной точке API TMDB.


export default tmdbApi;