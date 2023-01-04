import { ApplicationError } from "@domain/errors/application-error"
import { CityModel } from "@domain/models"
import { PopulateData } from "@domain/usecases"
//import { Controller } from "./controller"


type Input = { name: String, country: String, subcountry: String, geonameid: string} []
type Output = string | Error

export class PopulateDataController {
  constructor(private readonly populateData: PopulateData) {
  }
  

  async perform(cities: Input): Promise<Output> {
    const populate = await this.populateData(cities)
    if (populate instanceof Error) {
      return new ApplicationError()
    }

    return 'Populate success'
  }
}
