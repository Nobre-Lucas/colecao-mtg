import express from 'express';

const server = express();

server.get('/', (_, res) => {
    return res.send('Bem vindo à sua coleção de Magic the Gathering!');
});

export { server };