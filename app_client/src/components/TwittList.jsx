'use strict';

import React from 'react';
import Twitt from './Twitt';

export default function TwittList({twitts, loading}) {
  let list;
  let load;

  list = twitts.map((twitt) => {
    return (
      <Twitt key={twitt.twittId} twitt={twitt} />
    );
  });

  return (
    <div>
      <div className="media twitts-header">
        <div className="media-left">
          <img className="twitts-header-img" src="https://pbs.twimg.com/profile_images/586560973407850496/GBwrXz-__bigger.png" alt="Clevertech" />
        </div>
        <div className="media-body">
          <h3 className="twitts-header-h3"><a>Clevertech</a> Twitts Feed</h3>
          <a className="twitts-header-a">@Clevertech</a>
        </div>
      </div>

      <ul className="twitts-list">
        {list}
      </ul>

    </div>
  );
}
