import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


export default function Music() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
          The Blaring Infrared Orchestra
        </h1>
        <div className="flex mt-6 justify-center">
          <h4>The enigmatic ensemble of guitarist and composer Hannah Rachel Geisman</h4>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        Demo single &quot;November&quot; from the upcoming album &quot;Thistle&quot; available now from The Blaring Infrared Orchestra. 
        Visit your favorite music streaming service to listen and purchase.
      </div>
      <div className="flex mt-20 justify-center">
        <SocialIcon className="mr-2" url="https://open.spotify.com/artist/5Y2v8xzY2PtUItwxesnA0w" />
        <SocialIcon className="mr-2" url="http://itunes.apple.com/album/id/1669805476" />
        <SocialIcon className="mr-2" url="https://www.pandora.com/artist/the-blaring-infrared-orchestra/november/november/TRl6qvn3v5cjK6Z" />
        <SocialIcon className="mr-2" url="https://www.youtube.com/watch?v=DSmzqnz8dOQ" />
        
      </div>
    </div>
  </section>
  );
}

