import { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import RecentList from "./RecentList";

const SearchBar = () => {
  const [input, setInput] = useState(""); // 검색어 입력값
  const [isComposing, setIsComposing] = useState(false); // 한글 조합 중 여부
  const [isFocused, setIsFocused] = useState(false); // 포커스 여부
  const [recentSearches, setRecentSearches] = useState([]); // 최근 검색어 목록
  const nav = useNavigate();
  const searchRef = useRef(null);

  //최근 검색어 불러오기
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  //검색어 저장
  const savedRecentSearches = (searchItem) => {
    const newSearches = [
      searchItem,
      ...recentSearches.filter((item) => item !== searchItem),
    ].slice(0, 5);
    setRecentSearches(newSearches);
    localStorage.setItem("recentSearches", JSON.stringify(newSearches));
  };

  const handleSearch = () => {
    if (input.trim()) {
      savedRecentSearches(input.trim());
      nav(`/search/${encodeURIComponent(input.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (!isComposing && e.key === "Enter") handleSearch();
  };

  //최근 검색어 클릭 처리
  const handleRecentSearchClick = (searchItem) => {
    setInput(searchItem);
    nav(`/search/${encodeURIComponent(searchItem)}`);
  };

  //외부 클릭시 포커스 해제
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center gap-2 px-4 py-2 h-10 bg-[#25304a] rounded-xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          placeholder="프로그램을 검색하세요."
          className="w-full outline-none bg-transparent text-white rounded-5xl"
        />
        <FiSearch
          className="text-white text-xl cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      {/* 최근 검색 결과 */}
      {isFocused && (
        <RecentList
          recentSearches={recentSearches}
          onSearchClick={handleRecentSearchClick}
        />
      )}
    </div>
  );
};

export default SearchBar;
