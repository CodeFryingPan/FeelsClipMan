import React, { useState } from 'react';
// // read this
// // https://dev.twitch.tv/docs/embed/video-and-clips

// export default Clips() {
//  =>    return (
//             src="https://player.twitch.tv/?<channel, video, or collection>&parent=streamernews.example.com"
//             height="<height>"
//             width="<width>"
//             allowfullscreen="<allowfullscreen>">
//         </ifrlog>
//     );
// };

// comment you code .... OK

// what is happening/
/*const Stream = () => {
  return (
    <div>
      <TwitchEmbed
        channel="moonstar_x"
        id="moonstar_x"
        theme="dark"
        muted
        onVideoPause={() => console.log(':(')}
      />
      <TwitchChat channel="moonstar_x" theme="dark" />
      <TwitchClip clip="WealthyBumblingKimchiItsBoshyTime" parent={['mycoolsite.com, anotherawesomesite.net']} />
      <TwitchPlayer video="333014765" />
    </div>
  );
} check this pan
//https://www.npmjs.com/package/react-twitch-embed
https://bestofreactjs.com/repo/talk2MeGooseman-react-twitch-embed-video-react-audio-video
 */

import { TwitchClip } from 'react-twitch-embed'; //add it, check comments above, someone added it

export const ClipCard = ({showViews, views})=>{//The showviews its better on props since we can then decide from the upper component if we show this card or not
    function handleAction(higher){
        console.log(higher)
    }
    return (
    <div className='bg-indigo-500 border rounded-lg p-8 shadow-md flex flex-col items-center hover:scale-105 hover:bg-indigo-50 transition duration-300 w-screen max-w-5xl'>
            {showViews && <p>Views: {views}</p>}

            {/* <TwitchClip clip="AlluringAliveTurtleDoritosChip-EMUsxIDfVu31n0P&parent=localhost" parent={['localhost']} /> */}

            <iframe
                src="https://clips.twitch.tv/embed?clip=AlluringAliveTurtleDoritosChip-EMUsxIDfVu31n0P8&parent=localhost"
                parent="localhost"
                height={480}
                width={850}
                allowFullScreen={false}>
            </iframe>

            {!showViews&&(<div className="flex flex-row items-center justify-center">
                <button className='p-4 hover:scale-110 bg-indigo-700 hover:bg-indigo-600' onClick={()=>handleAction(true)}>Higher</button>
                <button className='p-4 hover:scale-110 bg-indigo-700 hover:bg-indigo-600' onClick={()=>handleAction(false)}>Lower</button>
           
        </div>)} 
        </div>);
        
};

