import data from '@/data.json';

import { MovieCard } from '@/components';
import { FourColumn } from '@/layouts';
import { Title } from '@/primitives';

function getBookmarkedMovies() {
  return data.filter(movie => movie.category === 'Movie');
}

export default function MoviesPage() {
  const movies = getBookmarkedMovies();

  return (
    <FourColumn>
      <Title>Movies</Title>
      {movies.map(m => (
        <MovieCard key={m.title} type='s' {...m} />
      ))}
    </FourColumn>
  );
}
