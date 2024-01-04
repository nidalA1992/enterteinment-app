import data from '@/data.json';

import { MovieCard } from '@/components';
import { FourColumn } from '@/layouts';
import { Title } from '@/primitives';

function getBookmarkedSeries() {
  return data.filter(movie => movie.category === 'TV Series');
}

export default function TvSeriesPage() {
  const series = getBookmarkedSeries();

  return (
    <>
      <FourColumn>
        <Title>TV Series</Title>
        {series.map(m => (
          <MovieCard key={m.title} type='s' {...m} />
        ))}
      </FourColumn>
    </>
  );
}
