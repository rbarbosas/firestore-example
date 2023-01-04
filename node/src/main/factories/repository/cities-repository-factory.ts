import { CitiesRepository } from "@infra/repository"

export const makeCitiesRepository = (): CitiesRepository => {
  return new CitiesRepository()
}
