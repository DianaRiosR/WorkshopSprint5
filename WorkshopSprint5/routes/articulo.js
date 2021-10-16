/* import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();

// router.get('/query', auth.verifyUsuario, articuloController.query);
// router.get('/queryCodigo', auth.verifyUsuario, articuloController.queryCodigo);
// router.delete('/remove', auth.verifyUsuario, articuloController.remove);
router.post('/add', auth.verifyUsuario, articuloController.agregar);
router.get('/list', articuloController.listar);
router.put('/update', auth.verifyUsuario, articuloController.update);
router.put('/activate', auth.verifyUsuario, articuloController.enabled);
router.put('/deactivate', auth.verifyUsuario, articuloController.disabled);

module.exports = router;