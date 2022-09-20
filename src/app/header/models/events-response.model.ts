import { SingleEvent } from './single-event.model';

export interface EventsResponse {
  date: string;
  events: SingleEvent[];
  wikipedia: string;
}
