import React from 'react';
import { connect } from 'react-redux';

const actionRAND = {
    type: 'RAND'
}
class Counter extends React.Component {
    handleClick(action) {
        this.props.dispatch(action)
    }
    render() {
        return <div>
            <button onClick={() => this.handleClick(actionRAND)}>
                Click_random
            </button>

            <h3>{this.props.value}</h3>
        </div>

    }
}

const mapStateToProps = (state) => {
    return {
        value: state
    }
}
const WrappedCounter = connect(mapStateToProps)(Counter);

export default WrappedCounter;