import express from "express";
import personController from "../controllers/person.controller.js";
import router from "./media.route.js";

const route = express.Router({ mergeParams: true });

router.get("/:personId/medias", personController.personMedias);

router.get("/:personId", personController.personDetail);

export default router;