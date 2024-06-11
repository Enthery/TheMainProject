// responseWithData - Это функция, которая принимает объект ответа res, код статуса statusCode и данные data, и отправляет HTTP-ответ с этим кодом статуса и данными в формате JSON.

const responseWithData = (res, statusCode, data) => res.status(statusCode).json(data)

// Это функции, которые используют responseWithData для отправки HTTP-ответов с определенными кодами статуса и сообщениями. Например, функция error отправляет ответ с кодом статуса 500 и сообщением “Oops! Something wrong!”.

const error = (res) => responseWithData(res, 500, {
    status: 500,
    message: "Oops! Something wrong!"
})

const badrequest = (res, message) => responseWithData(res, 400, {
    status: 400,
    message
})

const ok = (res, data) => responseWithData(res, 200, data)

const created = (res, data) => responseWithData(res, 201, data)

const unauthorize = (res) => responseWithData(res, 401, {
    status: 401,
    message: "Unauthorized"
})

const notFound = (res) => responseWithData(res, 404, {
    status: 404,
    message: "Resource not found"
});

export default {
    error,
    badrequest,
    ok,
    created,
    unauthorize,
    notFound
};