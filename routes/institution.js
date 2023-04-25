const express =require('express')
const router = express.Router()
const institutionController = require('../controllers/institution');

router.get('/',institutionController.getinstitutions)
router.get('/filter', institutionController.filterInstitution)
router.post('/',institutionController.createInstitution)
router.put('/:id',institutionController.updateInstitution)

module.exports = router;