import express from 'express';
import vagasRouter from './routes/vagasRoutes.js';

const app = express();

app.use(express.json());
app.use(vagasRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
