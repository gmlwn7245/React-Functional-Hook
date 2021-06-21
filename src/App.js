import React, {Component ,useState, useEffect} from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove class" onClick={function(){
        setClassShow(false);
      }}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

var funcStyle1 = 'color:blue';
var funcStyle2 = 'color:red';
var funcId = 0;
function FuncComp(props){
/*
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];
*/
  var [number, setNumber] = useState(props.initNumber);

/*
  var dateState = useState((new Date()).toString());
  var date = dateState[0];
  var setDate = dateState[1];
*/
  var [date, setDate] = useState((new Date()).toString());

  //side Effect = componentDidMount & componentDidUpdate
  useEffect(function(){
    console.log('%cfunc => useEffect number '+(++funcId), funcStyle1);
    return function(){
      //clean up
      console.log('%cfunc => useEffect number Return'+(++funcId), funcStyle1);
    }
  }, [number]);

  useEffect(function(){
    console.log('%cfunc => ComponentDidMount number '+(++funcId), 'color:green');
    return function(){
      //clean up
      console.log('%cfunc => ComponentWillUnMount number Return'+(++funcId), 'color:green');
    }
  }, []);

  useEffect(function(){
    console.log('%cfunc => useEffect date '+(++funcId), funcStyle2);
    return function(){
      //clean up
      console.log('%cfunc => useEffect date Return '+(++funcId), funcStyle2);
    }
  }, [date]);

  console.log('%cfunc => render '+(++funcId), 'style:yellow');
  return(
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random());         
          }
        }></input>
        <input type="button" value="date" onClick={
          function(){
            setDate((new Date()).toString());         
          }
        }></input>
    </div>
  );
}

class ClassComp extends Component{
  state = {
    number:this.props.initNumber,
    date:(new Date()).toString()
  }
  render(){
    return (
      <div className="container">
        <h2>class sytle componet</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
        <input type="button" value="data" onClick={
          function(){
            this.setState({date:(new Date()).toString()})
          }.bind(this)
        }></input>
      </div>
    )
  }
}


export default App;
