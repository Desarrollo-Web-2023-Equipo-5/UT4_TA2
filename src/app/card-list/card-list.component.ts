import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { ApiService } from '../services/api.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  controlInputTitle: FormControl = new FormControl('', { validators: [Validators.required] })
  controlInputDescription: FormControl = new FormControl('', { validators: [Validators.required] })
  tasks: Task[] = [];

  constructor(private apiService: ApiService ){ }

  ngOnInit(): void {
    this.apiService.getAllTasksFromUser('1')
    .subscribe({
      next: tasks => this.tasks = tasks
    })
  }
  
  addTask() {
    if (this.controlInputTitle.invalid || this.controlInputDescription.invalid) {
      return;
    }

    const newTask: Task = {
      title: this.controlInputTitle.value,
      description: this.controlInputDescription.value,
      done: false
    }
    this.apiService.createTask("1", newTask).subscribe({
      next: () => this.tasks.push(newTask),
    })
  }

  async addCatsk() {
    let catFact: string = await this.apiService.getCatTip()
    const newTask: Task = {
      title: "Random Cat Fact",
      description: catFact,
      done: false
    }
    this.apiService.createTask("1", newTask).subscribe({
      next: () => this.tasks.push(newTask)
    })
  }

  routeToVideo() {
    window.open("https://www.youtube.com/watch?v=jIQ6UV2onyI&t=32s")
  }

  removeTask(task: Task) {
    this.apiService.deleteTaskById("1", task.id!.toString()).subscribe({
      next: () => this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }
}
