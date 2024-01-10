import data from '@/data.json';
import { MovieCard } from '@/components';
import { FourColumn } from '@/layouts';
import { Title } from '@/primitives';
import { TrendingFeed } from '@/widgets';

function getMovies() {
  return data.filter((m) => m.isTrending);
}

export default function Home() {
  const recommendedMovies = data;
  const trendingMovies = getMovies();

  return (
    <>
      <div className='col-start-[main-start] col-end-[end]'>
        <Title>Trending</Title>
        <TrendingFeed movies={trendingMovies} />
      </div>

      <div className='col-start-[main-start] col-end-[main-end]'>
        <FourColumn>
          <Title>Recommended for you</Title>
          {recommendedMovies.map((m) => (
            <MovieCard key={m.title} type='s' {...m} />
          ))}
        </FourColumn>
      </div>
    </>
  );
}
