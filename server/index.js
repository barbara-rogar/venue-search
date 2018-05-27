import express from 'express';

import config from './config'
import router from './routes';

const app = express();

app.use(router);

app.listen(config.express.port);

console.log('Server started');
