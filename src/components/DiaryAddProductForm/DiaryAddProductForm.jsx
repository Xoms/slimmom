import React, {Component} from 'react';
import './DiaryAddProductForm.scss';
import Button from '../shared/Button/Button';
import back from '../../img/back-arrow.svg';

class DiaryAddProductForm extends Component {

    state = {
        renderMarker: false,
    };

    handleClick = () => {
        this.setState((prevState) => {
            return {renderMarker: !prevState.renderMarker}
        })
    };

    render () {
        if (this.props.mobile) {
            return (
                <>
                <button type="button" onClick={this.handleClick} className="trigger-button">+</button>
                {this.state.renderMarker
                ?   <div className="modal">
                        <div className="button-wrapper">
                            <button onClick={this.handleClick} type="button" className="close-modal">
                                <img src={back} alt="back-arrow"/>
                            </button>
                        </div>
                        <form className="modal-form">
                            <input placeholder="Введите название продукта" type="text"/>
                            <input placeholder="Граммы" type="number"/>
                            <Button type="submit" className="secondary-button">Добавить</Button>
                        </form>
                    </div>
                : null}
                </>
            )
        } else {
            return (
                <form className='add-form'>
                    <input placeholder="Введите название продукта" type="text"/>
                    <input placeholder="Граммы" type="number"/>
                    <button type="submit" className="add-button">+</button>
                </form>
            )
        }
    };
};

export default DiaryAddProductForm;