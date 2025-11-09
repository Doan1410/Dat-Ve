export interface Movie {
  id: number;
  title: string;
  date: string;
  genre: string;
  image: string;
  state: string;
  description: string;
  actors: string;
  duration: string;      
  director: string;
  showtimes: Showtime[];
  warning: string;
  origin: string;
}
export interface Showtime {
  id: number;
  time: string;            
  cinemaId: number;       
}
