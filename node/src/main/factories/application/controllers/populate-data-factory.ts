
import { PopulateDataController } from "@application/controllers"
import { makePopulateData } from "@main/factories/domain"

export const makePopulateDataController = () => {
  return new PopulateDataController(makePopulateData())
}

