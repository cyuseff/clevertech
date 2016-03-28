'use strict';

const twitter = require('./config/twitter');
const Twitt = require('./app_api/models/Twitt');

const USER_ID = 213807752;
const opts = {
  user_id: USER_ID,
  count: 10
};

function mapTwitt(twitt) {
  let tw = {
    twittId: twitt.id_str,
    text: twitt.text,

    retweetCount: twitt.retweet_count,
    favoriteCount: twitt.favorite_count,
    inReplyTo: twitt.in_reply_to_screen_name,

    entities: twitt.entities,

    createdAt: new Date(twitt.created_at),
    updatedAt: Date.now
  };

  let user;
  if(twitt.retweeted_status) {
    tw.retwitt = true;
    user = twitt.retweeted_status.user;
  } else {
    tw.retwitt = false;
    user = twitt.user;
  }

  tw.name = user.name;
  tw.screenName = user.screenName;
  tw.avatar = user.profile_image_url_https;

  return tw;
}

// get old twitts
twitter.get('statuses/user_timeline', opts, function(error, tweets, response) {
  console.log(error);
  tweets = tweets.map(twitt => mapTwitt(twitt));
  console.log(tweets);

  Twitt.collection.insert(tweets, {ordered: false}, (err, tweets) => {
    console.log(tweets.insertedCount);
  });
});
