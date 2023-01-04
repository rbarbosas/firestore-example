
import { chunkArray, printProgress } from "@application/helpers";
import { CreateCityRepository } from "@domain/protocols/create-city-repository";
import { CreateOrUpdateRepository } from "@domain/protocols/create-or-update-repository"
import { FirebaseRepository } from "./firebase-repository"

export class CitiesRepository extends FirebaseRepository implements
  CreateOrUpdateRepository, CreateCityRepository {
  async createOrUpdate({ batch, colle, data, checkDuplicate = true }: CreateOrUpdateRepository.Input): Promise<CreateOrUpdateRepository.Output> {
    
    if(checkDuplicate){
      const register = await colle.where('name', '==', data.name).get();
      if (register.empty) {
        const value = colle.doc();
        batch.set(value, data)
        return value.id
      } else {
        return register.docs[0].id;
      }
    }
    const value = colle.doc();
    batch.set(value, data)
    return value.id
  }

  async createCity(input: CreateCityRepository.Input): Promise<CreateCityRepository.Output> {

    const db = this.getRepository()

    console.log('Init progress: ')

    
    const data = chunkArray(input, 3)

    for await (const [index, chunk] of data.entries()) {

      printProgress(((index / data.length) * 100).toString())

      const batch = this.getBatch()
      for (const { name, country, subcountry, geonameid } of chunk) {
        const colle = db.collection('cities');
        await this.createOrUpdate({ batch, colle, data: { name, country, subcountry, geonameid }, checkDuplicate: false})
      }
      await batch.commit()
      printProgress('100')
      
    }
    console.log('Success!')


    return true;

  }


}
