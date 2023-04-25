const express =require('express')
const router = express.Router()
const courseController = require('../controllers/course');

router.get('/', courseController.getcourses)
router.get('/filter', courseController.filterCourse )
router.post('/', courseController.createCourse )
router.put('/:id', courseController.updateCourse )

module.exports = router;