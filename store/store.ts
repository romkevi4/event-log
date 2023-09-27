import { defineStore } from 'pinia'
import { IEventLog } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentEventLog: [] as IEventLog[],
    citiesList: [] as string[]
  }),
  actions: {
    // setWeatherData(data: IWeatherData) {
    //   this.currentWeatherData.push(data)
    // },
    // setAddCities(city: string) {
    //   this.citiesList.push(city)
    // }
  }
})