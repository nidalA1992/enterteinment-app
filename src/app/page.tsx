import data from '@/data.json';
import { MovieCard } from '@/components';
import { FourColumn } from '@/layouts';
import { Title } from '@/primitives';

function getMovies() {
  return data.filter((movie) => movie.isTrending);
}

export default function Home() {
  const trendingMovies = getMovies();

  return (
    <>
      <FourColumn>
        <Title>Recommended for you</Title>
        {trendingMovies.map((m) => (
          <MovieCard key={m.title} type='s' {...m} />
        ))}
      </FourColumn>
    </>
  );
}
