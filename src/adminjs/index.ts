import AdminJS from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize' // aponta qual é o ORM
import { sequelize } from '../database'
import { adminJsResources } from './resources'
import { locale } from './locale'
import { dashboardOptions } from './dashboard'
import { brandingOptions } from './branding'
import { authtenticationOptions } from './authentication'

AdminJS.registerAdapter(AdminJsSequelize) // aponta qual o adaptador do banco de dados

export const adminJs = new AdminJS({
  databases: [sequelize], // passa o banco de dados
  rootPath: '/admin',
  resources: adminJsResources,
  branding: brandingOptions,
  locale: locale,
  dashboard: dashboardOptions,
})

//vai construir as rotasautenticadas e inserir no app do express
export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authtenticationOptions,
  null, {
	resave: false,
	saveUninitialized: false
})