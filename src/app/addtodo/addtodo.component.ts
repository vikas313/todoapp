import { Component, OnInit, ElementRef, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent implements OnInit {
  constructor() {}
  @ViewChild('inpval') vals: ElementRef;

  todoList: { id: string; val: string }[] = [];
   @Output() deletedlist: { id: string; val: string }[] = [];

  onAdd(todo: string) {
    todo !== ''
      ? this.todoList.push({ id: 'one', val: todo })
      : alert("empty TODO won't work here!!");
    this.vals.nativeElement.value = '';
  }

  movetoOngoing(sd: any) {
    this.todoList[sd].id = 'two';
  }
  moveDone(xd: number) {
    let value = confirm('are you sure!!  it cant be undone');
    console.log(value);
    value === true ? (this.todoList[xd].id = 'three') : null;
  }
  delTodo(d: number) {
    this.deletedlist.push(...this.todoList.slice(d, 1));

    this.todoList.splice(d, 1);
  }

  ngOnInit(): void {}
}
