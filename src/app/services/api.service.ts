import { Injectable } from '@angular/core';
import { CardComponent} from "../card/card.component";
import { Task } from '../interfaces/task.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000";
  catTipsUrl = "https://catfact.ninja/fact";

  constructor( private http: HttpClient ) { }

  createUser(data: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, data);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }

  getAllTasksFromUser(id: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}/users/${id}/tasks`)
      .pipe(
        map((res: any) => res.tasks)
      );
  }

  getTaskById(userId: string, taskId: string): Observable<Task> {
    return this.http.get<Task>(`${this.url}/users/${userId}/tasks/${taskId}`);
  }

  updateTask(userId: string, taskId: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}/users/${userId}/tasks/${taskId}`, task);
  }

  deleteTaskById(userId: string, taskId: string): Observable<Task> {
    return this.http.delete<Task>(`${this.url}/users/${userId}/tasks/${taskId}`);
  }

  createTask(userId: string, task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.url}/users/${userId}/tasks`, task);
  }

  async getCatTip(): Promise<string> {
    const data = await fetch(this.catTipsUrl);
    const fact = await data.json();
    return await fact.fact ?? '';
  }

  async changeTaskStatus(task: Task) {
    task.done = !task.done;
    await fetch(`${this.url}/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  }
}
