import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Footerbutton from './FooterButton';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        disabled: ownProps.filter === state.filter
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onClick:()=> dispatch(setFilter(ownProps.filter))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Footerbutton);