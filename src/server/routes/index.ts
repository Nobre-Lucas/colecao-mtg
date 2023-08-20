import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Bem vindo à sua coleção de Magic the Gathering!');
});


export { router };