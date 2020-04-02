/*import React from 'react';
window.id = 0;

class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      items:[]
    };
  }
  
  handleTextChange=(event)=>{
    this.setState({text:event.target.value});
    
  }
  
  handleAddItem=(event)=> {
    event.preventDefault();
    
    let newItem = {
      id: window.id++,
      text: this.state.text,
      done: false
    };
    
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ""
    }));
  }
    markItemCompleted=(itemId)=> {
      let updatedItems = this.state.items.map(item => {
          if(itemId === item.id){
            item.done = !item.done;
          }
          return item;
      });
          //State Updates are Merged
          this.setState({
            items:[].concat(updatedItems)
          });
    }
      handleDeleteItem=(itemId)=> {
        let updatedItems = this.state.items.filter(item => {
          return item.id !== itemId;
        });
        
        this.setState({
          items: [].concat(updatedItems)
        });
      }

  
  
  render(){
  return (
      <div className="main-div">
      <h1 className="heading">todos</h1>
      <div className="col-md-3">
            <ToDoList items={this.state.items} onItemCompleted={this.markItemCompleted}
            onDeleteItem={this.handleDeleteItem} />
      </div>
      <div>
      
        <input onChange={this.handleTextChange} value={this.state.text} 
        className="enter-input" type="text" name="name" placeholder="Please enter your todo" />
        
        </div>
      </div>
          );
  }
}
//<div>{this.state.text}</div>  onClick={this.handleAddItem}


class ToDoItem extends React.Component{
  
  markCompleted=(event)=>{
    this.props.onItemCompleted(this.props.id);
  }
  
  deleteItem= (event) => {
    this.props.onDeleteItem(this.props.id);
  }
  
  render(){
    let itemClass = "form-check todoitem" + (this.props.completed ? "done" : "undone");
    return(
      <li className={itemClass} ref={li => this._listItem = li}>
      <label className="form-check-label">
      <input type="checkbox" className="form-check-input" onChange={this.markCompleted}/>
      {this.props.text}
      <input type="text" className="enter-input">{this.props.text}</input>
      </label>
      <button type="button" className="btn btn-danger btn-sm" 
      onClick={this.deleteItem}>X</button>
      </li>
      );
  }
  
}

class ToDoList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.items.map(item => (
        <ToDoItem key={item.id} id={item.id} text={item.text} completed={item.done}
        onItemCompleted={this.props.onItemCompleted}
        onDeleteItem={this.props.onDeleteItem} />
        ))}
      </ul>
      );
  }
}
//ReactDOM.render(<toDo />,document.getElementById('root'));
 
 export {ToDo};*/
 
import React from 'react'; 


/*window.id = 0;
let noOfItemsLeft=0;
 
 class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      toDoItems:[],
      toDoUserInput:'',
      count:0
    };
  }
  
  handleKey = (event) => {
    this.setState({toDoUserInput : event.target.value});
  }
  
  handleAddItem= (event) => {
    if(event.keyCode === 13) {
      if(event.target.value === "") {
        alert("please enter the Text");
      }
      else {
        this.addTodo(this.state.toDoUserInput);
        this.setState({
        toDoItems :[...this.state.toDoItems,this.state.toDoUserInput]
        });
        event.target.value="";
      }
    }
  }
  addTodo(title){
    
    this.setState({
      count:noOfItemsLeft + 1,
          //toDoItems : [...this.state.toDoItems,this.state.toDoUserInput],
          toDoItems:this.state.toDoItems.concat({
             id: window.id++,
             text: this.state.toDoUserInput,
             done: false,
             count: noOfItemsLeft + 1
          })
    });
     noOfItemsLeft += 1;    
  }
  
   removeTodo = (id) => {
     let updatedList = this.state.toDoItems;
     let index = updatedList.indexOf(id);
     updatedList.splice(index, 1);
     
     this.setState({
       toDoItems : updatedList,
       count: noOfItemsLeft - 1
     });
     noOfItemsLeft -=1;
   }
  
  render(){
    return(
      <div className="main-div">
      <h1 className="heading">todos</h1>
      <input onChange={this.handleKey} onKeyDown={this.handleAddItem} value={this.state.value} 
        className="enter-input" type="text" name="name" placeholder="Please enter your todo" />
      <ul>
      
       {this.state.toDoItems.map( (item, i) =>
       <li key={i} id={item.id} count={this.state.count}>
           
           <input type="checkbox" />
           
           <input value={item} type="text" className="enter-input"/>
           
           <input type="button" value="X" onClick={(e)=>this.removeTodo(e,item.id)}/>
       </li>
       )}
      </ul>
      
      <Footer count={this.state.count}/>
      
      </div>
      );
  }
}

class Footer extends React.Component{
    constructor(props){
      super(props);
      this.state={
        find:0
      };
    }
    
  render(){
    
  return(
    
            <footer className="footer">
                <strong className="todo-count" >{this.props.count} left</strong>
                <ul className="filters">
                    <li>All</li>
                    
                    <li className="footer-content">Completed</li>
  
                    <li>Active</li>
                </ul>
            </footer>
        );
        
  }    
}*/


class ToDo extends React.Component{
  render(){
    return(
      <div>Hello bro??</div>
      )
  }
}
export {ToDo};


