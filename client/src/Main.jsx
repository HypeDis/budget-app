import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './components/NavBar.jsx';
import PurchaseCard from './components/PurchaseCard.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      purchases: [],
    };

    this.setUserId = this.setUserId.bind(this);
  }

  setUserId(userId) {
    this.setState({ userId });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.userId !== '' && prevState.userId !== this.state.userId) {
      // console.log('get purchases');

      const url = `/purchases/${this.state.userId}`;
      console.log(url);
      axios
        .get(url)
        .then(response => {
          this.setState({ purchases: response.data });
        })
        .catch(e => console.error(e));
    }
    if (prevState.userId !== '' && this.state.userId === '') {
      this.setState({
        purchases: [],
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar setUserId={this.setUserId} />
        <div id="purchase-container">
          {this.state.purchases.length
            ? this.state.purchases.map(purchase => (
                <PurchaseCard
                  key={purchase.id}
                  name={purchase.name}
                  cost={purchase.cost}
                />
              ))
            : ''}
        </div>
      </div>
    );
  }
}

export default Main;
