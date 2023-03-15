import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    
    return (
        <>
            <h1 className='color'>Todo List 🖥️: { todosCount }, <small className='color'>pendientes: { pendingTodosCount }</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4 className='color'>Agrega tu tarea 🫡</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={ handleNewTodo }  
                    />
                </div>

            </div>


        
        </>
    )
}
