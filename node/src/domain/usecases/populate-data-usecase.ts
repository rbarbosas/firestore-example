import { DatabaseError } from "@domain/errors/database-error"
import { CreateCityRepository } from "@domain/protocols/create-city-repository"

type Input = { name: String, country: String, subcountry: String, geonameid: string}[]
type Output = boolean | DatabaseError

export type PopulateData = (input: Input) => Promise<Output>
type Setup = (repository: CreateCityRepository) => PopulateData

export const setupPopulateData: Setup =  (repository) => async (input) => {
  try {
    await repository.createCity(input)
    return true
  } catch (e) {
    throw e as Error
  }
}
