export interface CalendarInterface {
  className?: string;
}

export interface DayInterface {
  date: Date;
  isToday: boolean;
  isCurrentMonth: boolean;
} 