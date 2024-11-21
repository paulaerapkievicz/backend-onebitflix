import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { Favorite } from './Favorite'
import { Like } from './Like'
import { User } from './User'

// aqui vou definir as associações entre cada tabela
Category.hasMany(Course, { as: 'courses' }) // hasMany:uma categoria tem muitos cursos

Course.belongsTo(Category) // belongsTo: um curso pertence a uma categoria
Course.hasMany(Episode, { as: 'episodes' })
Course.belongsToMany(User, { through: Favorite })
Course.belongsToMany(User, { through: Like })
Course.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'course_id' })

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.belongsToMany(Course, { through: Like })
User.hasMany(Favorite, { as: 'favoritesCourses', foreignKey: 'user_id' })

export {
  Category,
  Course,
  Episode,
  Favorite,
  Like,
  User
}