import {User} from './User';

export interface Appointment {
  id: number;
  student: User;
  doctor: User;
  nurse: User;
  date: string;
  notes: string;
  state: boolean;
  occupation: string;
  "grade": string;
}
