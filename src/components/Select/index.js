import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.css'

class Select extends Component {
    constructor(props){
        super(props);
        this.state={
            showList:false,
            value:''
        };
        this.toggleList=this.toggleList.bind(this);
        this.selectValue=this.selectValue.bind(this);
    };

    toggleList(){
        this.setState({
            showList:!this.state.showList
        })
    }

    selectValue(selected){
        this.setState({
            value:selected.value
        })
    }

    
    render(){
        const listDom=[];
        this.props.lists.map(function(v,i){
            return listDom.push(<li key={i} data-value={v.value} onClick={this.selectValue.bind(this,v)}>{v.name}</li>)
         },this)
        return (
            <div className="select" onClick={this.toggleList}>
                <input type="text" value={this.state.value} placeholder={this.props.placeholder} readOnly/><i className="iconfont icon-downsj"></i>
                <ul className={this.state.showList?'f-db':'f-dn'}>
                    {
                        listDom
                    }
                </ul>
            </div>
        )
    }
}

Select.propTypes={
    placeholder:PropTypes.string,
    lists:PropTypes.array
}

export default Select;