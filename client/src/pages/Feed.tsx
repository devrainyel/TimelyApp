import { useState, useEffect } from 'react';
import { dummyPostsData } from '../assets/assets';
import Loading from '../components/ui/Loading';
import StoriesSection from '../components/layout/StoriesSection';
import PostCard from '../components/ui/PostCard';
import RecentMessages from '../components/ui/RecentMessage';


const Feed = () => {

    const [feeds, setFeeds] = useState<typeof dummyPostsData>([]);
    const [loading, setLoading] = useState(true);

    const fetchFeeds = async () => {
        setFeeds(dummyPostsData);
        setLoading(false)
    }

    useEffect(() => {
      fetchFeeds();
    }, []) 

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      <div>
        <StoriesSection />
        <div className="p-4 space-y-6"> 
          {feeds.map((post: typeof dummyPostsData[number]) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="max-xl:hidden w-xs sticky top-0">
        <RecentMessages />
      </div>
    </div>
  ) : <Loading />
}

export default Feed