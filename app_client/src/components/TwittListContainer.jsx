'use strict';

import React from 'react';
import TwittList from './TwittList';
import Fetch from '../utils/Fetch';

export default class TwittListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitts: [],
      loading: false
    };
    this.TIME = 5 * 1000;
  }

  componentDidMount() {
    this.getTwitts();
  }

  getTwitts() {
    this.setState({loading: true});

    let opts;
    if(this.state.twitts.length) {
      opts = {last: this.state.twitts[0].createdAt};
    }

    Fetch.get('https://infinite-earth-55046.herokuapp.com/api/v1/twitts', opts)
      .then((data) => {
        let state = {loading: false}
        let twitts = data.twitts;

        if(twitts.length) {
          twitts = twitts.concat(this.state.twitts);
          state.twitts = twitts;
        }

        this.setState(state);
        window.setTimeout(() => this.getTwitts(), this.TIME);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <TwittList twitts={this.state.twitts} loading={this.state.loading} />
    );
  }
}
