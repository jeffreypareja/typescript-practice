import PersonEntity from "../../entities/person";
import PersonRepository from "./person.repository";

export default class PersonUseCase {
	private repository: PersonRepository 

	constructor(repository: PersonRepository) {
		this.repository = repository
	}

	async get(id: number): Promise<PersonEntity> {
		const person = await this.repository.get(id)
		return person
	}

	async add(person: PersonEntity): Promise<PersonEntity> {
		const newPerson = await this.repository.add(person)
		return newPerson
	}


	async remove(id: number): Promise<void> {
		const deletedPerson = await this.repository.remove(id)
		return deletedPerson
	}

	async update(id: number, updates: PersonEntity): Promise<PersonEntity>{
		const updatedPerson: PersonEntity = await this.repository.update(id,updates)
		return updatedPerson
	}

}