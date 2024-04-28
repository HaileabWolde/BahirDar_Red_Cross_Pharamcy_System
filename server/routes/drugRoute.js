import express from 'express'
import { getDrugs, getSingleDrug } from '../controllers/drug.js'

const router = express.Router()

router.get('/getDrugs', getDrugs)
router.get('/getsingleDrug/:id', getSingleDrug)

export default router;