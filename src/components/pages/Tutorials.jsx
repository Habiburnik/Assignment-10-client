import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from './Loading';

const videos = [
  "kJQjXAVEWt0",  
  "1vrEljMfXYo",  
  "t7-nb1wlnyA",  
  "hyLl_0d0EBw",  
  "W6cBwdhLdk8",  
  "t3_fvtCMvYY",  
  "WvnBAQFsmu0",  
  "9ovM6bntSlw",   
  "BFmmvdANZl0",
];

const Tutorial = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) return <Loading />;

  if (!user) {
    navigate('/auth/login');
    return null; // or a spinner if you prefer
  }

  const handleLearnVocab = () => {
    navigate('/lessons');
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        🎥 Spanish Tutorials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {videos.map((videoId) => (
          <div key={videoId} className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
              title="Spanish Tutorial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleLearnVocab}
          className="bg-[#5459AC] cursor-pointer hover:bg-[#001c5a] text-white px-8 py-3 rounded-xl text-lg font-semibold  transition"
        >
          Learn Vocabularies
        </button>
      </div>
    </section>
  );
};

export default Tutorial;
