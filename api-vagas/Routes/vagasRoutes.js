import express from 'express';
import { criarVaga, listarVagas, listarVagaPorId, atualizarVaga, apagarVaga, listarVagasPorCargo, listarVagasPorCidade } from '../Controllers/vagasController.js';

const router = express.Router();

router.post('/vagas', criarVaga);
router.get('/vagas', listarVagas);
router.get('/vagas/:id', listarVagaPorId);
router.put('/vagas/:id', atualizarVaga);
router.delete('/vagas/:id', apagarVaga);
router.get('/cargo/:cargo', listarVagasPorCargo);
router.get('/localizacao/:cidade', listarVagasPorCidade);

export default router;