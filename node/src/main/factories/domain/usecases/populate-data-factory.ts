
import { PopulateData, setupPopulateData } from '@domain/usecases'
import { makeCitiesRepository } from '@main/factories/repository'

export const makePopulateData = (): PopulateData => {
  return setupPopulateData(makeCitiesRepository())
}
