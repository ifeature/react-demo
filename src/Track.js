import React from 'react';
import { connect } from 'react-redux';

function Track({ track }) {
    return (
        <div>{track.name}</div>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        track: state.tracks.find(track => track.id === +ownProps.params.id)
    };
}

export default connect(mapStateToProps)(Track);