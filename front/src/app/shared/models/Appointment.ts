import {User} from './User';

export interface Appointment {
  id: number;
  patient: User;
  doctor: User;
  nurse: User;
  date: string;
  notes: string;
  state: boolean;
  occupation: string;
  grade: string;
}
