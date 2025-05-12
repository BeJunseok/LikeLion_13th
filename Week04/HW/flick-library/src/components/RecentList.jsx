import { FiSearch } from "react-icons/fi";

const RecentList = ({ recentSearches, onSearchClick }) => {
  // 최근 검색어가 없으면 목록 렌더링 X
  if (!recentSearches.length) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-[#25304a] rounded-xl p-2 z-100">
      <div className="text-sm text-gray-400 px-2 py-1">최근 검색어</div>
      {recentSearches.map((search, index) => (
        <div
          key={index}
          onClick={() => onSearchClick(search)}
          className="px-2 py-2 hover:bg-[#1a2234] rounded-lg cursor-pointer flex items-center gap-2"
        >
          <FiSearch className="text-gray-400" />
          <span>{search}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentList;
