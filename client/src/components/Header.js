import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        );
      default:
        return [
          <li key="payments" style={{ margin: '0px 20px' }}><Payments /></li>,
          <li key="credit" style={{ margin: '0px 20px' }}>Credits: {this.props.auth.credits}</li>,
          <li key="logout" style={{ margin: '0px 20px' }}><a href="/api/logout">Logout</a></li>
        ];
    }
  }
  render() {
    return (
      <header className="no-padding">
        <div className="navbar-fixed">
          <nav style={{ left: 0 }}>
            <div className="nav-wrapper blue">
              <Link 
                to={this.props.auth ? '/surveys' : '/'} 
                className="left brand-logo"
                style={{ marginLeft: 10, fontSize: 36 }}
              >
                Maily
              </Link>
              <ul className="right">
                { this.renderContent() }
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(Header);