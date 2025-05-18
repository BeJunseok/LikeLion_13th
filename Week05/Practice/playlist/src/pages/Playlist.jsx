import albumData from '../data/song.json';
import SongCard from '../components/SongCard';

export const Playlist = () => {
  return (
    <main className="p-10 flex flex-wrap gap-10">
      {albumData.map((album, index) => {
        return <SongCard key={index} {...album} />;
      })}
    </main>
  );
};
