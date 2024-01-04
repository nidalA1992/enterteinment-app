import data from '@/data.json';

import { MovieCard } from '@/components';
import { FourColumn } from '@/layouts';
import { Title } from '@/primitives';

function getBookmarkedMovies() {
  return data.filter(movie => movie.category === 'Movie' && movie.isBookmarked);
}

function getBookmarkedSeries() {
  return data.filter(
    movie => movie.category === 'TV Series' && movie.isBookmarked
  );
}

export default function BookmarkedPage() {
  const movies = getBookmarkedMovies();
  const series = getBookmarkedSeries();

  return (
    <>
      <FourColumn>
        <Title>Bookmarked Movies</Title>
        {movies.map(m => (
          <MovieCard key={m.title} type='s' {...m} />
        ))}
      </FourColumn>
      <FourColumn>
        <Title>Bookmarked TV Series</Title>
        {series.map(m => (
          <MovieCard key={m.title} type='s' {...m} />
        ))}
      </FourColumn>
    </>
  );
}
