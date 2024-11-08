import AdminJS from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize' // aponta qual é o ORM
import { sequelize } from '../database'
import { adminJsResources } from './resources'
import { User } from '../models'
import bcrypt from 'bcrypt'

AdminJS.registerAdapter(AdminJsSequelize) // aponta qual o adaptador do banco de dados

export const adminJs = new AdminJS({
  databases: [sequelize], // passa o banco de dados
  rootPath: '/admin',
  resources: adminJsResources, 
  branding: {
    companyName: 'OneBitFlix',
    logo: '/logoOnebitflix.svg',
    theme: {
      colors: {
        primary100: '#ff0043',
	      primary80: '#ff1a57',
	      primary60: '#ff3369',
	      primary40: '#ff4d7c',
		    primary20: '#ff668f',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  }
})

//vai construir as rotasautenticadas e inserir no app do express
export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } })

    if (user && user.role === 'admin') {
      const matched = await bcrypt.compare(password, user.password)

      if (matched) {
        return user
      }
    }

    return false
  },
  cookiePassword: 'senha-do-cookie' // toDo: variável de ambiente
}, null, {
	resave: false,
	saveUninitialized: false
})