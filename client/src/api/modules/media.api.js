import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const mediaEndpoints = {
  list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
  search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`
};
const mediaApi = {
  getList: async ({ mediaType, mediaCategory, page }) => {
    // Проверка параметров
    if (!mediaType) {
      throw new Error("Missing required parameter: mediaType");
    }
    if (!mediaCategory) {
      throw new Error("Missing required parameter: mediaCategory");
    }
    if (page === undefined) {
      throw new Error("Missing required parameter: page");
    }
    
    try {
      const response = await publicClient.get(
        mediaEndpoints.list({ mediaType, mediaCategory, page })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getDetail: async ({ mediaType, mediaId }) => {
    // Проверка параметров
    if (!mediaType) {
      throw new Error("Missing required parameter: mediaType");
    }
    if (!mediaId) {
      throw new Error("Missing required parameter: mediaId");
    }

    try {
      const response = await privateClient.get(
        mediaEndpoints.detail({ mediaType, mediaId })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  search: async ({ mediaType, query, page }) => {
    // Проверка параметров
    if (!mediaType) {
      throw new Error("Missing required parameter: mediaType");
    }
    if (!query) {
      throw new Error("Missing required parameter: query");
    }
    if (page === undefined) {
      throw new Error("Missing required parameter: page");
    }

    try {
      const response = await publicClient.get(
        mediaEndpoints.search({ mediaType, query, page })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  }
};
//   const mediaApi = {
//     getList: async ({ mediaType, mediaCategory, page }) => {
//       try {
//         const response = await publicClient.get(
//           mediaEndpoints.list({ mediaType, mediaCategory, page })
//         );
    
//         return { response };
//     } catch (err) { return { err }; }
//   },
//   getDetail: async ({ mediaType, mediaId }) => {
//     try {
//       const response = await privateClient.get(
//         mediaEndpoints.detail({ mediaType, mediaId })
//       );

//       return { response };
//     } catch (err) { return { err }; }
//   },
//   search: async ({ mediaType, query, page }) => {
//     try {
//       const response = await publicClient.get(
//         mediaEndpoints.search({ mediaType, query, page })
//       );

//       return { response };
//     } catch (err) { return { err }; }
//   }
// };

export default mediaApi;