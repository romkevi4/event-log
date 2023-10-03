import { IEvent } from '../../models'

export const pageView: string[] = ['Таблица', 'Карточки']
export const quantityPages: string[] = ['1', '...', '10']

export const exampleEvents: IEvent[] = [
  {
    date: new Date(),
    importance: 'Высокая',
    equipment: 'Вегас',
    message: 'Сервер Vegas недоступен',
    responsible: 'Смирнов В.А.',
    isRead: false
  },

  {
    date: new Date(),
    importance: 'Низкая',
    equipment: 'Коммутатор',
    message: 'Потеряно сетевое соединение',
    responsible: 'Капустин С.С.',
    isRead: false
  },

  {
    date: new Date(),
    importance: 'Низкая',
    equipment: 'Люк',
    message: 'Открыта крышка',
    responsible: 'Ветрова И.С.',
    isRead: false
  },

  {
    date: new Date(),
    importance: 'Высокая',
    equipment: 'ИБП',
    message: 'Низкий заряд батареи',
    responsible: 'Лавочкин А.В.',
    isRead: false
  },

  {
    date: new Date(),
    importance: 'Критическая',
    equipment: 'Трансформатор',
    message: 'Недостаточное количество масла',
    responsible: 'Ольшанская Е.Г.',
    isRead: false
  },

  {
    date: new Date(),
    importance: 'Критическая',
    equipment: 'ЛВС',
    message: 'Обрыв силового кабеля',
    responsible: 'Ветрова И.С.',
    isRead: false
  },

  {
    date: new Date(),
    importance: 'Высокая',
    message: 'Отсутствует подтверждение пуска в работу',
    responsible: 'Смирнов В.А.',
    isRead: false
  },
]