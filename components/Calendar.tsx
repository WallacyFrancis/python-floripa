'use client';

import { CalendarInterface, DayInterface } from '../interfaces/CalendarInterface';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  startOfWeek,
  endOfWeek,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import '../styles/calendar.css';

/**
 * Componente de calendário que exibe o mês atual com destaque para o dia de hoje
 * @param {CalendarInterface} props - Propriedades do componente
 * @returns {JSX.Element} Componente de calendário
 */
const Calendar = ({ className = '' }: CalendarInterface): JSX.Element => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  // Gera array com todos os dias do calendário
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  // Array com os dias da semana em português
  const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

  /**
   * Renderiza um dia do calendário
   * @param {DayInterface} day - Informações do dia
   * @returns {JSX.Element} Célula do dia no calendário
   */
  const renderDay = (date: Date) => {
    const dayProps: DayInterface = {
      date,
      isToday: isToday(date),
      isCurrentMonth: isSameMonth(date, today),
    };

    return (
      <div
        key={date.toISOString()}
        className={`calendar-day ${!dayProps.isCurrentMonth ? 'other-month' : ''} ${
          dayProps.isToday ? 'today' : ''
        }`}
      >
        {format(date, 'd')}
      </div>
    );
  };

  return (
    <div className={`calendar ${className}`}>
      <div className="calendar-header">
        <div className="calendar-month text-primary-blue text-right">
          {format(today, 'MMMM yyyy', { locale: ptBR }).charAt(0).toUpperCase() + format(today, 'MMMM yyyy', { locale: ptBR }).slice(1)}
        </div>
        <div className="calendar-weekdays">
          {weekDays.map((day) => (
            <div key={day} className="calendar-weekday">
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-days">
        {calendarDays.map((day) => renderDay(day))}
      </div>
    </div>
  );
};

export default Calendar; 