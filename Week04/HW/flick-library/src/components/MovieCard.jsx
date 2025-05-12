import { useNavigate } from "react-router-dom";

const MovieCard = ({ show }) => {
  const nav = useNavigate();

  // 카드 클릭시 상세 페이지로 이동
  const handleShowClick = () => {
    nav(`/shows/${show.id}`);
  };

  return (
    <div
      onClick={handleShowClick}
      className="bg-[#25304a] w-[250px] h-[370px] mb-4 p-4 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      {show.image?.medium ? (
        <img
          src={show.image.medium}
          alt={show.name}
          className="w-[200px] h-[250px] mx-auto object-cover rounded-md"
        />
      ) : (     // 이미지가 없으면 대체 텍스트 출력
        <div className="w-[200px] h-[250px] bg-gray-700 text-gray-300 flex items-center justify-center rounded-md mx-auto text-sm">
          No Image Available
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-extrabold mb-3 truncate">{show.name}</h2>
        <div className="flex gap-3 whitespace-nowrap overflow-hidden ">
          {show.genres.map((genre) => {     // 이미지 아래 장르 출력
            return (
              <span
                key={`${show.id}-${genre}`}
                className=" py-1 bg-[#1a2234] rounded-4xl text-sm"
              >
                #{genre}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
