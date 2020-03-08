var todoList={
    todoArray:[],
    displayTodo:function(){
        console.log('Todolist :');
        for(var i=0;i<this.todoArray.length;i++)
        {
            if(this.todoArray[i].completed)
            {
                console.log("(X)",this.todoArray[i].text);
            } 
            else{
                console.log("( )",this.todoArray[i].text);
            }
            
        }
    },
    addTodo: function(TodoText)
    {
        this.todoArray.push
        ({
            completed: false,
            text: TodoText
        });
        this.displayTodo();
    },
    changeTodo: function(index,TodoText)
    {
        this.todoArray[index].text=TodoText;
        this.displayTodo();
    },
    deleteTodo: function(index)
    {
        this.todoArray.splice(index,1);
        this.displayTodo();
    },toggleCompleted: function(index)
    {
        this.todoArray[index].completed=true;
        this.displayTodo();
    }
}
todoList.addTodo('Item1');
todoList.addTodo('Item2');
todoList.addTodo('Item3');
todoList.addTodo('Item4');

var displayAllBtn=document.getElementById('displayAllBtn');
displayAllBtn.addEventListener('click', function(){todoList.displayTodo()});