import { Component } from '@angular/core';
import { Task } from '../interface/task';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  tasks: Task[] = [];
}
