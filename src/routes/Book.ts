import { Request, Response, Router } from 'express';
import { nanoid } from 'nanoid';

interface BooksInterface {
	id: string;
	title: string;
	author: string;
	rate: number;
	reviews?: Array<{ name: string; review: string }>;
}

let Books: Array<BooksInterface> = [
	{
		id: 'YNTKTS',
		title: 'Computer Science',
		author: 'Prio Arief Gunawan',
		rate: 9,
	},
	{
		id: 'YTBJTS',
		title: 'How to win treeble winners',
		author: 'Sir Alex Ferguson',
		rate: 10,
	},
];
class BookRouter {
	public router: Router;
	constructor() {
		this.router = Router();
		this.route();
	}

	protected route() {
		const route: Router = this.router;

		route.get('/', (req: Request, res: Response) => {
			return res.send(Books);
		});
		route.post('/', (req: Request, res: Response) => {
			if(!req.body) return res.status(400).json({data: "Bad request"});
			Books.push({...req.body, id: nanoid(6)})
			return res.status(200).json({data: "add successfull"});
		});

		route.get('/:id', (req: Request, res: Response) => {
			const data = Books.find((e: BooksInterface) => e.id === req.params.id);
			return res
				.status(data ? 200 : 404)
				.json({ data: data || 'Data not found' });
		});
		route.put('/:id', (req: Request, res: Response) => {
			const data = Books.find((e: BooksInterface) => e.id === req.params.id);
			if(!data) return res.status(404).json({data: 'Data not found'})
			Books = Books.map((e: BooksInterface) => {
				if(e.id === req.params.id){
					return {
						...e,
						title: req.body.title,
						author: req.body.author,
						rate: req.body.rate,
					}
				}else{
					return e
				}
			});
			return res
				.status(200)
				.json({ data: "Update Success"});
		});
		route.delete('/:id', (req: Request, res: Response) => {
			const data = Books.find((e: BooksInterface) => e.id === req.params.id);
			if(!data) return res.status(404).json({data: 'Data not found'})
			Books = Books.filter((e: BooksInterface) => e.id !== data.id)
			console.log(Books)
			return res
				.status(200)
				.json({ data: "Delete Success"});
		});
	}
}

export default new BookRouter().router;
