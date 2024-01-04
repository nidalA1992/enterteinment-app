import { MovieCard } from '@/components';
import data from '@/data.json';

function getTrendingMovies() {
  return data.filter(movie => movie.isTrending);
}

export default function Home() {
  const trendingMovies = getTrendingMovies();

  return (
    <>
      <div className='flex flex-wrap gap-8'>
        {trendingMovies.map(m => (
          <MovieCard key={m.title} type='m' {...m} />
        ))}
      </div>
    </>
  );
}
