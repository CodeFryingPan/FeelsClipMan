import React from 'react';
import ClipCard from './clips';
// how to get clips link? from our DB??? do we have one?
// PAN WHERE DO WE GET THE CLIP LINKS?
// okey but if they are the same name how can u like make an if statement  oh okey okey make sense 
// we should make it here cause this is where the core game loop happens
// they will have props and states
const WhichClip = () => {
    // on click show the views of the clip ? and should be from the twitch api 
    return (
        <div class="yeah i want flex and then both video equally on left and right">
            {/* // like a voting for button under each
            // then once they vote we show them the actual views
            // then give points 
            */}
            <ClipCard twitch_link={ "link1" }  />
            
            <ClipCard twitch_link={ "link2" } />
        </div>
    )
}