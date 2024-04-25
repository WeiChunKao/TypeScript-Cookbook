import express from 'express';
import jsonServer from 'json-server';
import history from 'connect-history-api-fallback';

const app = express();

app.use(history());
app.use('/', express.static('build'));

const router = jsonServer.router('data.json');
app.use(jsonServer.bodyParser);
app.use('/api', (req, resp, next) => router(req, resp, next));

const port = process.argv[3] || 4005;
app.listen(port, () => console.log(`Running on port ${port}`));
