import React, {Components} from 'react';

class Select extends Components {
    constructor(props){
        super(props);
    };
    render(){
        return (
            <div className="select">
                <input type="text" readonly/><i className="iconfont icon-downsj"></i>
                <ul>
                    <li>1231</li>
                </ul>
            </div>
        )
    }
}

export default Select;