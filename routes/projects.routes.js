const router = require('express').Router()
const ProjectsController = require('../controllers/projects.controller')
const fileUpload = require('../middleware/file-upload')

router.get('/', ProjectsController.getAllProjects);
router.post('/', fileUpload.single('photo'), ProjectsController.createProject);
router.delete('/:id', ProjectsController.deleteProject);
router.put('/:id', fileUpload.single('photo'), ProjectsController.updateProject);

module.exports = router