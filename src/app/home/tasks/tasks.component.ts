import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Category, UserTask } from 'src/app/model/user-task';
import { TaskService } from 'src/app/services/task.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks$!: Observable<UserTask[]>
  categories$!: Observable<Category[]>

  constructor(private taskService: TaskService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadTasks()
    this.loadCategories()
  }

  loadCategories() {
    this.categories$ = this.taskService.getCategories()
  }

  loadTasks(): void {
    this.tasks$ = forkJoin([this.usersService.getUsers(), this.taskService.getTasks()]).pipe(
      map(([users, tasks]) => {
        const names: Record<number, string> = users.reduce((prev, cur) => {
          return { ...prev, [cur.id]: `${cur.firstName} ${cur.lastName}` }
        }, {})
        return tasks.map(task => {
          return { ...task, userName: names[task.userId] }
        })
      })
    )
  }

}
