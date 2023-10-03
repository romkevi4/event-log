interface IEvent {
  date: Date,
  importance: string,
  equipment?: string,
  message: string,
  responsible: string
  avatar?: string,
  iconImportance?: string
  isRead: boolean,
}

export type {
  IEvent
}