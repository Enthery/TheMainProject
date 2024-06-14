import { validationResult } from "express-validator";

// validate - Это миддлвэр функция, которую можно использовать в маршрутах Express.js для проверки валидности входящих запросов.

const validate = (req, res, next) => {

    // const errors = validationResult(req); - Эта строка вызывает функцию validationResult с текущим запросом req в качестве аргумента. Это возвращает объект, содержащий результаты валидации запроса.
    
    const errors = validationResult(req);

    // Если в результате валидации есть ошибки, эта строка отправляет ответ со статусом 400 и сообщением первой ошибки в качестве тела ответа.

    if(!errors.isEmpty()) return res.status(400).json({
        message: errors.array()[0].msg
    });

    next();
};

export default { validate };