import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TODO WORK CONTROL';
  @ViewChild('inpval')  vals:ElementRef;
  
  todoList: { id: string; val: string }[] = [];
  ongoinglist: { id: string; val: string }[] = [];

  onAdd(todo: string) {
    todo !== '' ? this.todoList.push({ id: 'one', val: todo }) : null;
   (this.vals.nativeElement.value = '')
  }
  
  movetoOngoing(sd: any) {
    this.todoList[sd].id = 'two';
  }
  moveDone(xd:number) {
    let value = confirm('are you sure!!  it cant be undone');
    console.log(value);
    value === true ? (this.todoList[xd].id = 'three') : null;
  }
  delTodo(d:number) {
    this.todoList.splice(d, 1);
  }
}
