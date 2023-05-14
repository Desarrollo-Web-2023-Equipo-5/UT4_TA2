import { Injectable } from '@angular/core';
import { CardComponent} from "../card/card.component";
import { Task } from '../interface/task';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000/tasks";
  catTipsUrl = "https://catfact.ninja/fact";

  async getAllTasks(): Promise<Task[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getTaskById(id:number): Promise<CardComponent | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async createTask(data:Task): Promise<void> {
    await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  async deleteTask(id:number): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  async getCatTip(): Promise<string> {
    const data = await fetch(this.catTipsUrl);
    const fact = await data.json();
    return await fact.fact ?? {};
  }


}
