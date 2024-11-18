import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'
import bcrypt from 'bcrypt'

// Definição do tipo de callback para verificação de senha 
type CheckPasswordCallback = (err?: Error, isSame?: boolean) => void

// Definir a interface para os atributos do usuário
export interface User {
  id: number
  firstName: string
  lastName: string
  phone: string
  birth: Date
  email: string
  password: string
  role: 'admin' | 'user'
}

// Definir os atributos opcionais para criação
export interface UserCreationAttributes
  extends Optional<User, 'id'> {}

// Estender a interface do Sequelize Model
export interface UserInstance
  extends Model<User, UserCreationAttributes>, User {
    checkPassword: (password: string, callbackfn: CheckPasswordCallback) => void
  }

// Definir o modelo no Sequelize
export const User = sequelize.define<UserInstance, User>('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  birth: {
    allowNull: false,
    type: DataTypes.DATE
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
        isIn: [['admin', 'user']]
    }
  }
},{
    hooks: {
        beforeSave: async (user) => {
          if (user.isNewRecord || user.changed('password')) {
            user.password = await bcrypt.hash(user.password.toString(), 10); // hash: criptografa a senha
          }
        }
      }
})

//Adicionar o método checkPassword ao protótipo
User.prototype.checkPassword = function ( password: string, callbackfn: CheckPasswordCallback) {
  bcrypt.compare(password, this.password, (err, isSame) => {
    if (err) {
      callbackfn(err)
    } else {
      callbackfn(err, isSame)
    }
  })
}