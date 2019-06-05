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

  // passed as prop to NavBar Component
  setUserId(userId) {
    this.setState({ userId });
  }

  // grab the purchase history of a user after they log in
  // remove the purchase history after they log out
  componentDidUpdate(prevProps, prevState) {
    // login
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
    // logout
    if (prevState.userId !== '' && this.state.userId === '') {
      this.setState({
        purchases: [],
      });
    }
  }

  render() {
    return (
      <div id="main-container">
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
