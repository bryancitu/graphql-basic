'use strict'

const courses = [
    {
        _id: 'anyid',
        title: 'Mi titulo',
        teacher: "Mi profesor",
        description: 'una descripcion',
        topic: 'programacion'
    },
    {
        _id: 'anyid',
        title: 'Mi titulo 2',
        teacher: "Mi profesor",
        description: 'una descripcion',
        topic: 'programacion'
    },
    {
        _id: 'anyid',
        title: 'Mi titulo 3',
        teacher: "Mi profesor",
        description: 'una descripcion',
        topic: 'programacion'
    }
]

module.exports = {
    getCourses: () => {
        return courses
    }
}
// module.exports = {
//     hello: () => {
//         return 'Hola Mundo'
//     },
//     saludo: () => {
//         return 'Hola a todos'
//     }
// }