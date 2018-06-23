import * as express from 'express';

const morgan = require('morgan');

import {WelcomeController} from './routes/welcome';

const app: express.Application = express();
const port: any = process.env.PORT || 3000;

const morgan_middle: any = morgan('combined')

app.use(morgan_middle);

app.use('/welcome', WelcomeController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
    console.log(app._router.stack)
});
