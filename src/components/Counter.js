import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:this.props.defaultCount || 0,
            step:this.props.step || 1
        };
        this.handerClick=this.handerClick.bind(this);
    };

    handerClick(){
        this.setState({count:this.state.count+this.state.step})
    };

    render(){
        return(
            <div>
                <button onClick={this.handerClick}>点我</button>
                <p>点击次数：{this.state.count}</p>
            </div>
        )
    };
}

Counter.propTypes={
    defaultCount:PropTypes.number,
    step:PropTypes.number
  }

export default Counter;

