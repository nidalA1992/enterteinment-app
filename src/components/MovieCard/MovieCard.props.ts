import { IMovieModel } from '@/models/movie.interface';

export interface IMovieCardProps extends Partial<IMovieModel> {
  type: 'm' | 's';
}
