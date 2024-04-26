import express from 'express'
import { getDrugs } from '../controllers/drug.js'

const router = express.Router()

router.get('/getDrugs', getDrugs)

export default router;