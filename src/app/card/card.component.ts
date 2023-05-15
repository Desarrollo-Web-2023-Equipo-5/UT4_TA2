import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task!: Task 

  constructor(private apiService: ApiService) {}

  deleteTask(): void {
    if (!this.task.id) { return } 
    this.apiService.deleteTask(this.task.id).then(() => location.reload())
  }

  changeTaskStatus(): void { 
    this.apiService.changeTaskStatus(this.task)
  }

}
