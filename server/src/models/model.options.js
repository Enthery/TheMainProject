
// Настройки модели Mongoose для обработки данных и их преобразования

const modelOptions = {
    toJSON: {
        virtuals: true,
        transform: (_, obj) => {
            delete obj._id;
            return obj
        }
    },
    toObject: {
        virtuals: true,
        transform: (_, obj) => {
            delete obj._id;
            return obj
        }
    },
    versionKey: false,
    timestamps: true
};

// toJSON и toObject: Эти опции определяют поведение при преобразовании экземпляров Mongoose в JSON и JavaScript-объекты соответственно.

// virtuals: true: Это позволяет включить виртуальные поля в выводе. Виртуальные поля - это поля, которые не сохраняются в MongoDB, но которые можно вычислить на основе других полей.

// transform: (_, obj) => { ... }: Это функция преобразования, которая вызывается каждый раз, когда экземпляр Mongoose преобразуется в JSON или объект. В данном случае, она удаляет поле _id из вывода.

// versionKey: false: Это отключает версионный ключ __v в документах MongoDB. Версионный ключ обычно используется для предотвращения конфликтов при одновременном изменении документа несколькими операциями.

// timestamps: true: Это автоматически добавляет поля createdAt и updatedAt в каждый документ, отслеживая время создания и последнего обновления документа.

export default modelOptions;