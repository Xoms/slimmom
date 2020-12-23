import React, {Component} from 'react';
import DiaryProductsList from '../../components/DiaryProductsList';
import RightSideBar from '../../components/RightSideBar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import { connect } from 'react-redux';
import { getProducts} from '../../redux/user/userOperations'

class DiaryPage extends Component {

  state = {
    screenWidth: window.visualViewport.width
  }

  componentDidMount() {
    this.props.getProducts({
      date: "2020-12-23"
    });
  }

  render () {
    return (
      this.state.screenWidth < 650 
      ? <><DiaryProductsList /><DiaryAddProductForm mobile={true} /><RightSideBar/></> 
      : <><DiaryAddProductForm mobile={false} /><DiaryProductsList /><RightSideBar/></>
      
    )
  }
};

export default connect(null, {getProducts})(DiaryPage);
