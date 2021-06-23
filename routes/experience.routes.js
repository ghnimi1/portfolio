const router = require('express').Router()
const ExperienceController = require('../controllers/experience.controller')
const auth = require('../middleware/auth')

router.get('/', auth, ExperienceController.getAllExperience);
router.post('/', auth, ExperienceController.createExperience);
router.delete('/:id', auth, ExperienceController.deleteExperience);
router.put('/:id', auth, ExperienceController.updateExperience);

module.exports = router