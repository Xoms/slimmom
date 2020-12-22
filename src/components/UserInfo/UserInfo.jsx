import React, {Component} from 'react';
import './UserInfo.scss';

class UserInfo extends Component {

    render () {
        return (
            <div className="user-info-wrapper">
                <p className="user-info-wrapper-item">{this.props.userName}</p>
                <span className="user-info-wrapper-item"></span>
                <button className="user-info-wrapper-item" type="button">Выйти</button>
            </div>
        )
    }

};

export default UserInfo