import PersonEntity from "../../entities/person";

export default abstract class PersonRepository {
	abstract add(person: PersonEntity): Promise<PersonEntity>;
	abstract get(id: number): Promise<PersonEntity>;
	abstract remove(id: number): Promise<void>;
	abstract update(id: number, updates: PersonEntity): Promise<PersonEntity>
}