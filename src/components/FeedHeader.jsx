import moreIcon from '../assets/more.svg';
import OuterRing from '../assets/outer ring.svg'; 

// FeedHeader 컴포넌트
export const FeedHeader = ({ profile, name, date }) => {


    return(
    <div className="flex-none flex flex-row items-center">
      <div className="relative">
          <img  src={OuterRing} 
                alt="story ring" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px]" />
          <img src={profile} alt="profile" className="" />
      </div>
      <span className="">{name}</span>
      <span className="text-xs text-[#737373]">{date}</span>
      <div className="flex-1" />
      <div className="flex-none"><img src={moreIcon} alt="more" className='w-4 h-4'/></div>
    </div>
    );
};