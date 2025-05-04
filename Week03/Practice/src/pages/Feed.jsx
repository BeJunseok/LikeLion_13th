import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';


export const Feed = () => {
    
    const feedData = [
        {
            "name": "",
            "profile" : null,
            "feedImg" : null,
            "date": "2일",
            "likes" : 5,
        }
    ];


    return (
      <main className="w-full h-[602px] bg-white flex flex-col">
        <FeedHeader profile={feedData[0].profile} name={feedData[0].name} date={feedData[0].date}/>
        <FeedImage feedImg={feedData[0].feedImg} />
        <FeedAction likes={feedData[0].likes}/>
      </main>
    );
};