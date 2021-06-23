const router = require('express').Router()
const SkillsController = require('../controllers/skills.controller')
const auth = require('../middleware/auth')

router.get('/', auth, SkillsController.getAllSkills);
router.post('/', auth, SkillsController.createSkills);
router.delete('/:id', auth, SkillsController.deleteSkills);
router.put('/:id', auth, SkillsController.updateSkills);

module.exports = router