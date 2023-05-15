import { Component } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  tasks: Task[] = [];

  constructor(private apiService: ApiService ){
    this.apiService.getAllTasks()
    .then(tasks=> {
      this.tasks = tasks
    })
  }
}
