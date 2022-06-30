import express from 'express';
import productRouter from './routes';
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

app.use(productRouter);

app.use('/test', (req, res) => { res.json('Hello world') });

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => console.log(`server running on ${PORT}`))

