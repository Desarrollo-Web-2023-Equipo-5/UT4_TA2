import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Task } from '../interfaces/task.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {

  controlInputTitle: FormControl = new FormControl('', { validators: [Validators.required] })
  controlInputDescription: FormControl = new FormControl('', { validators: [Validators.required] })

  constructor(private apiService: ApiService) { }
  
  addTask() {
    if (this.controlInputTitle.invalid || this.controlInputDescription.invalid) {
      return;
    }

    const newTask: Task = {
      title: this.controlInputTitle.value,
      description: this.controlInputDescription.value,
      done: false
    }
    this.apiService.createTask(newTask).then(() => location.reload())
  }

  async addCatsk() {
    let catFact: string = await this.apiService.getCatTip()
    const newTask: Task = {
      title: "Random Cat Fact",
      description: catFact,
      done: false
    }
    this.apiService.createTask(newTask).then(() => location.reload())
  }

  routeToVideo() {
    window.open("https://www.youtube.com/watch?v=jIQ6UV2onyI&t=32s")
  }
}