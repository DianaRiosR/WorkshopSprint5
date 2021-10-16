/* import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');


const router = routerx();

// router.get('/query', auth.verifyUsuario, categoriaController.query);
// router.delete('/remove', auth.verifyUsuario, categoriaController.remove);
router.post('/add', auth.verifyUsuario, categoriaController.añadir);
router.get('/list', auth.verifyUsuario, categoriaController.listar);
router.put('/update', auth.verifyUsuario, categoriaController.modificar);
router.put('/activate', auth.verifyUsuario, categoriaController.activate);
router.put('/deactivate', auth.verifyUsuario, categoriaController.deactivate);


module.exports = router;