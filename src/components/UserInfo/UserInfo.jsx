import React, {Component} from 'react';
import {connect} from 'react-redux';
import ops from '../../redux/auth/authOperations';
import './UserInfo.scss';

class UserInfo extends Component {

    handleClick = () => {
        this.props.logout(this.props.token);
    };

    render () {
        return (
            <div className="user-info-wrapper">
                <p className="user-info-wrapper-item">{this.props.userName}</p>
                <span className="user-info-wrapper-item"></span>
                <button onClick={this.handleClick} className="user-info-wrapper-item" type="button">Выйти</button>
            </div>
        )
    };

};

const mapStateToProps = state => ({
    userName: state.user.username,
    token: state.auth.accessToken,
});

const mapDispatchToProps = {
    logout: ops.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);