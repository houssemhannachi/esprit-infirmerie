import {User} from './User';

export interface Appointment {
  id: number;
  student: User;
  professional: User;
  date: string;
  notes: string;
  state: boolean;
}
