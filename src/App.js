import React, { Component } from 'react';
import Counter from './components/Counter';
import Select from './components/Select';


var assets=[
  {value:'BNB',name:'BNB'},
  {value:'BTC',name:'BTC'},
  {value:'ETH',name:'ETH'},
  {value:'NEO',name:'NEO'},
]  

class App extends Component {

  render() {
    return (
     <div className="app">
        <Counter defaultCount={1000} step={10}/>
        <Counter defaultCount={10} step={1}/>
        <Counter defaultCount={100} step={2}/>
        <Counter defaultCount={1} step={3}/>
        <Counter defaultCount={2} step={4}/>
        <Select placeholder="请选择" lists={assets}/>
     </div>
    );
  }
}


export default App;
