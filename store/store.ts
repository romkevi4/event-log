import { defineStore } from 'pinia'

import { IEvent } from '../models'
import { TIMER_DELAY } from '@/utils/constants'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentEventLog: [] as IEvent[],
    currentQuantityPages: [] as string[],
  }),
  actions: {
    setEventLog(data: IEvent[]) {
      let currentIndex = 0
      const intervalId = setInterval(() => {
        if (currentIndex < data.length) {
          this.currentEventLog.push(data[currentIndex])
          currentIndex++
        } else {
          clearInterval(intervalId)
        }
      }, TIMER_DELAY);
    },
  }
})