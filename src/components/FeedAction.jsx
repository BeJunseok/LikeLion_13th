import dmIcon from '../assets/direct message.svg';
import commentIcon from '../assets/icon_comment.svg';
import bookmarkIcon from '../assets/icon_mookmark.svg';
import likeIcon from '../assets/like.svg';
// FeedActions 컴포넌트
export const FeedAction = ({ likes }) => {
    

    return (
    <div className="flex-none flex flex-col justify-end">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <img src={likeIcon} alt="like" className="" />
          <img src={commentIcon} alt="comment" className="" />
          <img src={dmIcon} alt="share" className="" />
        </div>
        <img src={bookmarkIcon} alt="bookmark" className="" />
      </div>
      <div className="">좋아요 {likes}개</div>
    </div>
  );
};