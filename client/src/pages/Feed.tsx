import { useState, useEffect } from 'react';
import { dummyPostsData } from '../assets/assets';
import Loading from '../components/ui/Loading';
import StoriesSection from '../components/layout/StoriesSection';

const Feed = () => {

    const [feeds, setFeeds] = useState([]);
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
          Posts
        </div>
      </div>
      <div>right sidebar</div>
    </div>
  ) : <Loading />
}

export default Feed