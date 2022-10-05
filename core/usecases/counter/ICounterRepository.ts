import CounterEntity from "../../entities/counter";

export default abstract class CounterInterface{
	abstract update(value: CounterEntity): CounterEntity 
	abstract get(): CounterEntity
}