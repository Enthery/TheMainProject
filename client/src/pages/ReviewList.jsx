import { LoadingButton } from "@mui/lab"
import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import tmdbConfigs from "../api/config/tmdb.configs"
import reviewApi from "../api/modules/review.api"
import Container from "../components/common/Container"
import uiConfigs from "../configs/ui.configs"
import { setGlobalLoading } from "../redux/features/globalLoadingSlice"
import DeleteIcon from "@mui/icons-material/Delete"
import { routesGen } from "../routes/routes"

const REviewItem = ({ review, onRemoved }) => {
  const [onRequest, setOnRequest] = useState(false)

  const onRemove = async () => {
    if(onRequest) return
    setOnRequest(true)
    const { response, err } = await reviewApi.remove({ reviewId: review.id })
    setOnRequest(false)

    if(err) toast.error(err.message)
      if(response) {
        toast.success("Remove favorite success")
        onRemoved(review.id)
      }
  }

  return (
    <Box sx={{
      position: "relative",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      padding: 1,
      opacity: onRequest ? 0.6 : 1,
      "&:hover": { backgroundColor: "Background.paper"}
    }}>
      <Box sx={{ width: { xs: 0, md: "10%" } }}>
        <Link
        to={routesGen.mediaDetail(review.mediaType, review.mediaId)}
        style={{ color: "unset", textDecoration: "none"}}
        >
          <Box></Box>
        </Link>
      </Box>
    </Box>
  )
}

const ReviewList = () => {
  return (
    <div>ReviewList</div>
  )
}

export default ReviewList