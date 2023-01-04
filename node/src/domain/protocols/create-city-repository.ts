export interface CreateCityRepository {
  createCity: (input: CreateCityRepository.Input) => Promise<CreateCityRepository.Output>
}

export namespace CreateCityRepository {
  export type Input = { name: String, country: String, subcountry: String, geonameid: string}[]
  export type Output = boolean | Error
}