import { Router } from 'express'
import { getCrew, createCrew, updateCrew, deleteCrew } from '../controllers/crew.controller'

const router = Router()

router.get('/', getCrew)
router.post('/', createCrew)
router.put('/:id', updateCrew)
router.delete('/:id', deleteCrew)

export default router