import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from "./actions"

const App = ({additionalPrice, car, store, addFeature, removeFeature}) => {

  const removeItem = feature => {
    removeFeature(feature);
    // dispatch an action here to remove an item
  };

  const addItem = feature => {
    addFeature(feature)
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeItem} />
        
      </div>
      <div className="box">
        <AdditionalFeatures store={store} addFeature={addItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
additionalPrice: state.additionalPrice,
car: state.car,
store: state.store
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature})(App);