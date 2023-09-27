interface IEvent {
  date: Date,
  importance: string,
  equipment: string,
  message: string,
  responsible: string
  avatar?: string,
  iconImportance?: string
}

interface IEventLog {
  events: IEvent[],
}

export type {
  IEvent,
  IEventLog
}