import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from './Loading';

const Lessons = () => {

  const { user, loading } = useContext(AuthContext);


  const navigate = useNavigate();

  const lessonCards = Array.from({ length: 10 }, (_, i) => i + 1); // [1, 2, ..., 10]

  const handleLessonClick = (lessonNo) => {
    navigate(`/lesson/${lessonNo}`);
  };

  const handleViewMore = () => {
    if (user) {
      navigate('/tutorials');
    } else {
      alert('Please log in to view more tutorials!');
    }
  };

  if (loading) {
    return (<Loading></Loading>
    )
  } else

    return (
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Let’s Learn Spanish
        </h1>

        {/* Lessons Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {lessonCards.map((lessonNo) => (
            <div
              key={lessonNo}
              onClick={() => handleLessonClick(lessonNo)}
              className="cursor-pointer p-6 bg-[#648DB3] rounded-xl shadow hover:shadow-lg transition text-center font-medium text-lg text-white hover:bg-[#001c5a]"
            >
              Lesson {lessonNo}
            </div>
          ))}
        </div>

        {/* Tutorial Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">🎥 Alphabet Tutorial</h2>
          <p className="text-gray-600 mb-4">Learn how to pronounce Spanish letters and sounds</p>
          <div className="w-full max-w-3xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-md"
              src="https://www.youtube.com/embed/kJQjXAVEWt0?si=0L8EPXx906fx5uvQ"
              title="Spanish Alphabet Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleViewMore}
            className="bg-[#5459AC] hover:bg-[#001c5a] text-white px-6 py-3 text-lg rounded-xl transition"
          >
            View More Tutorials
          </button>
        </div>
      </section>
    );
};

export default Lessons;
