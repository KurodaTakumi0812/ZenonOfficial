import { format } from 'date-fns';

export function logInTimeToString(date) {
  if (!date) { return ''; }
  return format(date, 'HH:mm')
}

export function logOutTimeToString(date) {
  if (!date) { return ''; }
  return format(date, 'M月d日  HH:mm')
}

export function announcementDateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy-MM-dd  HH:mm')
}