import express, {Express, Request, Response} from "express";
import CounterUseCase from "../core/usecases/counter/counter";
import CounterEntity from "../core/entities/counter";
import LocalVariableDatabase from "../io/counter/localVariableDatabase";

const app: Express = express();
const port = 3000
 
app.get("/", function (req: Request, res: Response) {
  res.send("Hello World");
});


app.get('/increment', function(req: Request, res: Response) {
	const usecase = new CounterUseCase(LocalVariableDatabase.getInstance())
	const newValue:CounterEntity = usecase.increment()
	res.send(newValue)
})

app.get('/decrement', function(req: Request, res: Response) {
	const usecase = new CounterUseCase(LocalVariableDatabase.getInstance())
	const newValue:CounterEntity = usecase.decrement()
	res.send(newValue)
})

export default app


export function startServer(){
	app.listen(port, function(){
		console.log('App has now started')
	})
}