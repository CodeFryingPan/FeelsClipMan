import React from 'react';
import { ClipCard } from "./component/clips"
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="overflow-auto p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col gap-8 items-center justify-center w-full h-full h-screen font-mono">
      <h1 className='text-3xl p-8 text-indigo-200 font-bold'>
        Welcome to FeelsClipMan
      </h1>
      <p className="text-xl flex text-center">
        Do you think you know everything about Twitch? Let's test your knowledge.
      </p>
      <button 
      // onClick={() => navigate('/game')}
              className="bg-indigo-800 text-white rounded-lg p-4 shadow-lg hover:scale-110 hover:bg-indigo-700 duration-300 transition ease-out font-semibold">
        Let's Start :)
      </button>
      <a href="#" title="click the clip you think have the more views than the other" className='rules font-bold'>How to play </a>
      <p>Guess which Twitch clip has a higher viewcount between the Two.</p>


    <ClipCard showViews={true} views={1999}/>
    </div>
  );
}
