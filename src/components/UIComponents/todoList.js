import React, { useState} from 'react';
import { connect } from "react-redux";
import { add_Todo,Update_Todo } from '../redux-store/actions/todoActions';
import Todo from './todo';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


// postgrass


const useStyles = makeStyles((theme) => ({
    root:{
      marginTop:'40px'
  },
  content: {
  marginTop: '20px',
   textAlign:'center'
  }
}));



const TodoList = (props) => {

  const { items } = props;
  const classes = useStyles();
  // for todo from use
  const [inputField , setInputField] = useState('')
  const [isEdit , setisEdit] = useState(false)
  const [selectedTodo , setselectedTodo] = useState()
  // for modal use
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    console.log('handleChange---->>')
    setInputField( e.target.value)
    
  }

  const handleSubmit = (e) => {
    // console.log('handleSubmit---->>')
    e.preventDefault();

    console.log('handleSubmit_inputField---->>', inputField)
    if (!isEdit) {
       props.addTodo(inputField);
    }
    else {
      props.updateTodo(inputField, selectedTodo)
      setisEdit(false)
    }
    setInputField('');

  }

  
  const todoUpdateHandler = (todo) => {
    console.log('todoUpdateHandler---->>', todo);
    setInputField(todo.title);
    setisEdit(true) 
    setselectedTodo(todo)
    };

  return ( 

    <Grid container spacing={3} className={classes.root}>
       
        <Grid item  xs={3}/>
        <Grid item xs={6}>
          
        <div className={classes.content}>
          <Typography variant="h3"> Todo List</Typography>
            <Input placeholder="Add task here"
              onChange={handleChange}
              value={inputField || ''}
            />
            <Button variant="contained" size="small" color="primary" onClick={handleSubmit} >
              { !isEdit ? 'Add Todo': "Update" }
          </Button>
          
          <List>
              {items.Todos && items.Todos.length
                      ? items.Todos.map((todo, index) => {
                        return<Todo key={index} todo={todo} clickUpadate={() => todoUpdateHandler(todo)}/>;
                          })
              : <Typography variant="h6" gutterBottom>
                  No todo added yet!.......
                </Typography>}
          </List>  
          </div>

          
        
        </Grid>
        <Grid item  xs={3}/>
      </Grid>
 );
}

const mapStateToProps = state => ({
  items: state.AllTodos
});
const mapDispatchToProps = dispatch => ({

    addTodo: (todo) => dispatch(add_Todo(todo)),
    updateTodo: (text,oldTodo) => dispatch(Update_Todo(text,oldTodo)),
    
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);