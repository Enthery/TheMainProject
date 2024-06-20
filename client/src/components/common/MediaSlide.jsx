import { useEffect, useState } from "react"
import { SwiperSlide } from "swiper/react"
import mediaApi from "../../api/modules/media.api"
import AutoSwiper from "./AutoSwiper"
import { toast } from "react-toastify"
import MediaItem from "./MediaItem"

// const MediaSlide = ({ mediaType, mediaCategory }) => {
//     const [medias, setMedias] = useState([]);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const getMedias = async () => {
//         try {
//           console.log("mediaType:", mediaType);
//           console.log("mediaCategory:", mediaCategory);
  
//           if (!mediaType) {
//             throw new Error("Missing required parameter: mediaType");
//           }
//           if (!mediaCategory) {
//             throw new Error("Missing required parameter: mediaCategory");
//           }
  
//           const { response, err } = await mediaApi.getList({
//             mediaType,
//             mediaCategory,
//             page: 1
//           });
  
//           if (response) {
//             setMedias(response.results);
//           }
//           if (err) {
//             throw err;
//           }
//         } catch (error) {
//           setError(error.message);
//           toast.error(error.message);
//         }
//       };
  
//       getMedias();
//     }, [mediaType, mediaCategory]);
  
//     if (error) {
//       return <div>Error: {error}</div>;
//     }
  
//     return (
//       <AutoSwiper>
//         {medias.map((media, index) => (
//           <SwiperSlide key={index}>
//             <MediaItem media={media} mediaType={mediaType} />
//           </SwiperSlide>
//         ))}
//       </AutoSwiper>
//     );
//   };

const MediaSlide = ({ mediaType, mediaCategory }) => {
    const [medias, setMedias] = useState([])

    useEffect(() => {
        const getMedias = async () => {
            const { response, err } = await mediaApi.getList({
                mediaType,
                mediaCategory,
                page: 1
            })

            if(response) setMedias(response.results)
                if(err) toast.error(err.message)
        }

    getMedias();
    }, [mediaType, mediaCategory])

  return (
    <AutoSwiper>
        {medias.map((media, index) => (
            <SwiperSlide key={index}>
                <MediaItem media={media} mediaType={mediaType} />
            </SwiperSlide>
        ))}
    </AutoSwiper>
  )
}

export default MediaSlide