import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Category { //interface para o objeto
  id: number
  name: string
  position: number
}

export interface CategoryCreationAttributes extends Optional<Category, 'id'> {} //atributos de criação

export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category {} //interface para a instância

export const Category = sequelize.define<CategoryInstance, Category>('Category', { //contexto da Aplicação, não mais o banco de dados / define o model dentro da instância do sequelize
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  position: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER
  }
})