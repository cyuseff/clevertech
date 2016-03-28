'use strict';

import React from 'react';

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function dateToString(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default function Twitt({twitt}) {
  return(
    <li>
      <small className="text-muted">reply</small>

      <div className="media">
        <div className="media-left">
          <img className="media-object twitt-avatar" src={twitt.avatar} alt={twitt.name}/>
        </div>
        <div className="media-body">
          <ul className="list-inline">
            <li><a href={`https://twitter.com/${twitt.screenName}`} target="_blank">{twitt.name}</a></li>
            <li className="text-muted">{`@${twitt.screenName}`}</li>
            <li>{dateToString(twitt.createdAt)}</li>
          </ul>

          <h4>{twitt.text}</h4>

          <ul className="list-inline">
            <li><a href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456">Reply</a></li>
            <li><a href="https://twitter.com/intent/retweet?tweet_id=463440424141459456">Retweet</a></li>
            <li><a href="https://twitter.com/intent/like?tweet_id=463440424141459456">Like</a></li>
          </ul>

        </div>
      </div>
    </li>
  );
};
