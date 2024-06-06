import responseHandler from "../handlers/response.handler.js"
import favoriteModel from "../models/favorite.model.js"

const addFavorite = async (req, res) => {
    try {
        const isFavorite = await favoriteModel.findOne({
            user: req.user.id,
            mediaId: req.body.mediaId
        })

        if(isFavorite) return responseHandler.ok(res, isFavorite)

        const favorite = new favoriteModel({
            ...req.body,
            user: req.user.id
        })

        await favorite.save()

        responseHandler.created(res, favorite)
    } catch {
        responseHandler.error(res);
    }
};

const removeFavorite = async (req, res) => {
    try {
        const { favoriteId } = req.params

        const favorite = await favoriteModel.findOne({
            user: req.user.id,
            _id: favoriteId
        })

        if(!favorite) return responseHandler.notFound(res)

        await favorite.remove();

        responseHandler.ok(res);
    } catch {
        responseHandler.error(res);
    }
};

const getFavoritesOfUser = async (req, res) => {
    try {
        const favorite = await favoriteModel.find({ user: req.user.id }).sort("-createdAt");

        responseHandler.ok(res, favorite);
    } catch {
        responseHandler.error(res);
    }
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };

// addFavorite: Эта функция добавляет новый элемент в избранное пользователя. Сначала она проверяет, есть ли уже такой элемент в избранном пользователя. Если такой элемент уже есть, функция возвращает его. Если такого элемента нет, функция создает новый элемент и сохраняет его в базе данных.

// removeFavorite: Эта функция удаляет элемент из избранного пользователя. Она ищет элемент в избранном пользователя и, если он найден, удаляет его. Если такого элемента нет, функция возвращает сообщение об ошибке.

// getFavoritesOfUser: Эта функция возвращает все элементы из избранного пользователя. Она ищет все элементы в избранном пользователя и возвращает их, отсортированные по дате создания в обратном порядке.