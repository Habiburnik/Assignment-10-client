import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from './Loading';


const difficultyColors = {
  easy: 'bg-green-100 border-green-300',
  medium: 'bg-yellow-100 border-yellow-300',
  hard: 'bg-red-100 border-red-300',
};

const Lesson = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [vocabList, setVocabList] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {


    fetch('/spanish_words.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.lesson_no === parseInt(id)
        );
        setVocabList(filtered);
      })

      .catch((err) => console.error("Failed to load JSON:", err));
  }, [id]);

  const openModal = (word) => {
    setSelectedWord(word);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWord(null);
  };

  const goBack = () => {
    navigate('/lessons');
  };



  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        📘 Lesson {id}
      </h1>

      {/* Word Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vocabList.map((word) => (
          <div
            key={word.id}
            className={`border p-4 rounded-xl shadow-sm ${difficultyColors[word.difficulty] || 'bg-gray-100'}`}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{word.word}</h2>
            <p className="text-gray-600"><strong>Meaning:</strong> {word.meaning}</p>
            <p className="text-gray-600"><strong>Pronunciation:</strong> {word.pronunciation}</p>
            <p className="text-gray-600"><strong>Part of Speech:</strong> {word.part_of_speech}</p>

            <button
              onClick={() => openModal(word)}
              className="mt-4 cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              When to Say
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedWord && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center z-50" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)', 
          backdropFilter: 'blur(3px)',                
          WebkitBackdropFilter: 'blur(6px)',          
        }}>
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 text-xl"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedWord.word}</h2>
            <p className="mb-2"><strong>Meaning:</strong> {selectedWord.meaning}</p>
            <p className="mb-2"><strong>When to Say:</strong> {selectedWord.when_to_say}</p>
            <p className="mb-2"><strong>Example:</strong> {selectedWord.example}</p>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-12 text-center">
        <button
          onClick={goBack}
          className="bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          ⬅️ Back to Lessons
        </button>
      </div>
    </section>
  );
};

export default Lesson;
