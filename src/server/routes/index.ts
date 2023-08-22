import * as Scry from 'scryfall-sdk';

import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Bem vindo à sua coleção de Magic the Gathering!');
});

router.post('/search-cards', async (req, res) => {

    const card = await Scry.Cards.autoCompleteName(req.body.nome);
    return res.send(card);
})

router.post('/search-card', async (req, res) => {

    const card = await Scry.Cards.autoCompleteName(req.body.nome);
    return res.send(card[0]);
})


export { router };