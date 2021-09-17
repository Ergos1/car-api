import express from 'express'
import CarController from './CarController.js'
const router = express.Router()

router.post('/cars', CarController.create)
router.get('/cars', CarController.getAll)
router.get('/cars/:id', CarController.getOne)
// router.get('/fill', CarController.fill)

export default router