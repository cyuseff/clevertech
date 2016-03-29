'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import TwittListContainer from './components/TwittListContainer';

const WIDTH = 500;
const HEIGHT = 600;
const URI = 'https://infinite-earth-55046.herokuapp.com';

let iframe = document.createElement('iframe');
iframe.width = WIDTH;
iframe.height = HEIGHT;
iframe.frameBorder = 0;

let container = document.getElementById('twitter-demo');
container.width = WIDTH;
container.height = HEIGHT;
container.appendChild(iframe);

// CSS
let bootstrap = document.createElement('link');
bootstrap.rel = 'stylesheet';
bootstrap.href = URI + '/css/bootstrap.min.css';

let fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = URI + '/css/font-awesome.css';

let style = document.createElement('link');
style.rel = 'stylesheet';
style.href = URI + '/css/style.css';

let head = iframe.contentDocument.getElementsByTagName('head')[0];
head.appendChild(bootstrap);
head.appendChild(fontAwesome);
head.appendChild(style);

iframe.contentWindow.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName('head')[0],
    t = iframe.contentWindow.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(iframe.contentDocument, "script", "twitter-wjs"));

let reactApp = document.createElement('div');
reactApp.id = 'twitter-app';
iframe.contentDocument.body.appendChild(reactApp);

ReactDom.render(<TwittListContainer />, reactApp);
