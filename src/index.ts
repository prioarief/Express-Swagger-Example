import express, { Application, Request, Response, Router } from 'express';
import routes from './routes/index';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import data from './docs'

class App {
	public app: Application;
	constructor() {
		this.app = express();
		this.secure()
		this.route();
	}

	protected secure(){
		this.app.use(express.json())
		this.app.use(express.urlencoded({extended: false}))
	}

	protected route() {
		const route: Router = this.app;
		route.use('/api/v1', routes);
		route.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerJsDoc(data))
		);
		route.get('/', (req: Request, res: Response) => res.send('Here we goo'));
	}
}

const app: Application = new App().app;
const port: number = 2002;
app.listen(port, () => console.log('server running on port', port));
