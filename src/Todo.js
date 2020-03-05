import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ADDTODO,DELETETODO,COMPLETE} from './todoactions/action';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo:"",
            complete:""
        
    }}

    HandelAdd =(newtodo)=>{
       this.props.add(newtodo);

    }

    handelChange=(e)=>{
        this.setState({todo:e.target.value})
    }

    delet=(id)=>{
        this.props.delete(id)
    }
    completeitem=(id)=>{
        this.props.complete(id)
    }
    render() {
        return (
            <div>
                <div className="to-do-box">
                     <div className="box">
                        <h1 className="title1">To Do App!</h1>
                        <p className="para">Add New To-Do</p>
                        <input className="put-txt" type="text" onChange={this.handelChange}   placeholder="Enter New Task"/><br/>
                        <button className="btn" onClick={() =>this.HandelAdd(this.state)  }  >Add</button>
                    </div>
                </div>
                <div>
                    <h2 className="title2">Let's get some work done!</h2>
        
                </div>
                <div className="boxes">
                    {this.props.todo.map(el => 
                    <div>
                        <h2 className={el.complete ? 'active':""}>{el.todo}</h2>
                        <button onClick={()=>this.completeitem(el.id)}>{el.complete ? "undo" : "complete"}</button>
                        <button onClick={() => this.delet(el.id)}>Delete</button>
                        
                    </div>)}


                </div>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        todo : state.todoReducer
    }
}
const mapDispatchToProps=dispatch=>{
      return{
          add:(x)=>dispatch(ADDTODO(x)),
          delete:(x)=>dispatch(DELETETODO(x)),
          complete:(x)=>dispatch(COMPLETE(x))
      }

}



export default connect(mapStateToProps,mapDispatchToProps)(Todo);