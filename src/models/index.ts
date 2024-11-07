import { Category } from './Category'
import { Course } from './Course'

// aqui vou definir as associações entre cada tabela
Category.hasMany(Course) // hasMany:uma categoria tem muitos cursos
Course.belongsTo(Category) // belongsTo: um curso pertence a uma categoria

export {
  Category,
  Course
}