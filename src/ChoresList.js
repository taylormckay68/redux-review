import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChoresList extends Component {
    render() {
        return (
            <div className="chores_list">
                {this.props.chores.map(e => {
                    return (
                        <div>{e}</div>
                    )
                })}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(ChoresList)