import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { STATUS_COLORS } from 'src/app/model/enums/task-status';
import { Category, UserTask } from 'src/app/model/user-task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {

  @Input() task!: UserTask
  @Input() categories!: Category[] | null

  currentCategory = 0
  color = STATUS_COLORS

  addCategory(): void {
    if (!this.task.categories) this.task.categories = []
    if (this.task.categories?.length > 2) return
    if (this.task.categories.find(x => x === this.currentCategory)) return
    this.task.categories.push(this.currentCategory)
    this.task = { ...this.task }
  }

  deleteCategory(id: number): void {
    if (!this.task.categories) this.task.categories = []
    this.task.categories = this.task.categories.filter(x => x !== id)
  }
}
