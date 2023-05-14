import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Task } from '../interface/task';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  

  constructor(private apiService: ApiService) { }
  
  addTask() {

    const inputTitle = document.getElementById('input-ul') as HTMLInputElement | null;
    const taskTitle = inputTitle?.value;
    const inputDesc = document.getElementById('desc-ul') as HTMLInputElement | null;
    const taskDesc = inputDesc?.value;
    if (!taskTitle || !taskDesc) {
      return
    }
    const newTask: Task = {
      title: taskTitle,
      description: taskDesc,
      done: false
    }
    this.apiService.createTask(newTask)
  }



  async addCatsk() {
    let catFact: string = await this.apiService.getCatTip()
    const newTask: Task = {
      title: "Random Cat Fact",
      description: catFact,
      done: false
    }
    this.apiService.createTask(newTask)
  }

  routeToVideo() {
    window.open("https://www.youtube.com/watch?v=jIQ6UV2onyI&t=32s")
  }
}