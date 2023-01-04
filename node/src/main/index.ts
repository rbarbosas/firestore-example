import {  makePopulateDataController } from "./factories";
import * as fs from "fs";
import * as path from "path";
import { parse as csvParse } from 'csv-parse';
import { CityModel } from "@domain/models";

const csvPath = path.resolve(__dirname, '../cities.csv');
const file = fs.readFileSync(csvPath, { encoding: 'utf-8' });

csvParse(file, {
  delimiter: ',',
  columns: ['name', 'country', 'subcountry', 'geonameid'],
}, (error, result: CityModel[]) => {
  if (error) {
    console.error(error);
  }
  makePopulateDataController().perform(result)
});
