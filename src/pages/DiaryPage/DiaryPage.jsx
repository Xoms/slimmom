import React, {Component} from 'react';
import DiaryProductsList from '../../components/DiaryProductsList';
import RightSideBar from '../../components/RightSideBar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';


class DiaryPage extends Component {

  state = {
    screenWidth: window.visualViewport.width
  }

componentDidMount () {
  console.log(window)
}

  render () {
    return (
      this.state.screenWidth < 650 
      ? <><DiaryProductsList /><DiaryAddProductForm mobile={true} /><RightSideBar/></> 
      : <><DiaryAddProductForm mobile={false} /><DiaryProductsList /><RightSideBar/></>
      
    )
  }
};

export default DiaryPage;
