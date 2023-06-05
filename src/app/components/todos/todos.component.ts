import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 @Input() todos:any[]=[];
 @Output() todosChange=new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    console.log(this.todos)
  }
  

  editTodoText:string='';
  editTodoIndex:number=-1;
  
  deleteTodo(index:number){
    this.todos=this.todos.filter((todo, ind)=>ind!=index);
    this.todosChange.emit(this.todos)
  }

  saveTodo(){
     this.todos=this.todos.map((todo, ind)=>{
      return ind!=this.editTodoIndex?todo:this.editTodoText;
     })
    this.todosChange.emit(this.todos);
    this.editTodoIndex=-1;
    this.editTodoText=''
  }

  handleEditClick(todo:string, index:number){
    this.editTodoText=todo;
    this.editTodoIndex=index

  }

  

}
