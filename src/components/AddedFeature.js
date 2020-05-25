import React from 'react';
import { connect } from 'react-redux';
import { deleteFeature } from '../actions'

const AddedFeature = props => {
  // console.log("In AddedFeature",props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> {props.deleteFeature(props.feature)}}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  { deleteFeature }
)(AddedFeature);
