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
        _id: 'anyid2',
        title: 'Mi titulo 2',
        teacher: "Mi profesor",
        description: 'una descripcion',
        topic: 'programacion'
    },
    {
        _id: 'anyid3',
        title: 'Mi titulo 3',
        teacher: "Mi profesor",
        description: 'una descripcion',
        topic: 'programacion'
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },
        getCourse: (root, args) => {
            console.log(args);
            const course = courses.filter(course => course._id === args.id)
            console.log("my course",course);
            return course.pop()
        }
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