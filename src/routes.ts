import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/courseController'
import { episodesController } from './controllers/episodesController'
import { authController } from './controllers/authController'
// ordem das rotas importa
const router = express.Router()

router.post('/auth/register', authController.register)

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/courses/featured', coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', coursesController.search)
router.get('/courses/:id', coursesController.show)

router.get('/episodes/stream', episodesController.stream)

export { router }