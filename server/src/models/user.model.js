import mongoose from "mongoose"
import modelOptions from "./model.options.js"
import crypto from "crypto"

// userSchema - Это определение схемы пользователя. Схема определяет структуру документов в коллекции MongoDB. В данном случае, каждый пользователь имеет username, displayName, password и salt.

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    salt: {
        type: String,
        required: true,
        select: false
    }
}, modelOptions)

// userSchema.methods.setPassword Это метод схемы, который используется для установки пароля пользователя. Он генерирует случайную “соль”, затем использует эту соль и введенный пароль для создания хеша пароля с использованием алгоритма PBKDF2.

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString("hex")

    this.password = crypto.pbkdf2Sync(
        password,
        this.salt,
        1000,
        64,
        "sha512"
    ).toString("hex");
}

// userSchema.methods.validPassword Это другой метод схемы, который проверяет, является ли введенный пароль действительным. Он создает хеш введенного пароля с той же солью, что и сохраненный хеш пароля, и сравнивает их.

userSchema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(
        password,
        this.salt,
        1000,
        64,
        "sha512"
    ).toString("hex");

    return this.password === hash;
};

// userModel = mongoose.model("User", userSchema); - Эта строка создает модель Mongoose на основе схемы пользователя. Модель представляет собой конструктор, который создает документы в MongoDB.

const userModel = mongoose.model("User", userSchema);

export default userModel;