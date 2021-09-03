import book from './book';

export default {
	definition: {
		openapi: '3.0.3',
		info: {
			title: 'Library RESTful API',
			version: '1',
			description: 'OpenAPI for Library RESTful API',
			contact: {
				name: 'Prio Arief Gunawan',
				email: 'hello.prioarief@gmail.com',
			},
		},
		servers: [
			{
				description: 'Local Server',
				url: 'http://localhost:2002/api/v1',
			},
		],
		paths: {
			...book,
		},
	},
	apis: ['./src/routes/*.ts'],
};
