import jsonwebtoken from "jsonwebtoken"
import responseHandler from "../handlers/response.handler.js"
import userModel from "../models/user.model.js"

// tokenDecode Это функция, которая декодирует JWT из заголовка авторизации HTTP-запроса. Если токен присутствует и действителен, функция возвращает декодированные данные. В противном случае, она возвращает false.

const tokenDecode = (req) => {
    try {
        const bearerHeader = req.headers["autorization"]

        if (bearerHeader) {
            const token = bearerHeader.split(" ")[1]

            return jsonwebtoken.verify(
                token,
                process.env.TOKEN_SECRET
            )
        }

        return false;
    } catch {
        return false;
    }
};

// auth - Это асинхронная функция middleware, которая используется для аутентификации пользователя. Она вызывает tokenDecode для декодирования JWT, затем проверяет, существует ли пользователь с ID, указанным в токене. Если пользователь существует, функция добавляет пользователя в объект запроса req и вызывает next() для продолжения обработки запроса. Если пользователь не существует или токен недействителен, функция отправляет ответ с кодом статуса 401 (Unauthorized).

const auth = async (req, res, next) => {
    const tokenDecoded = tokenDecode(req);

    if(!tokenDecoded) return responseHandler.unauthorized(res);

    const user = await userModel.findById(tokenDecoded.data);

    if(!user) return responseHandler.unauthorized(res);

    req.user = user;

    next();
};

export default { auth, tokenDecode };