export enum TaskStatus {
    InProgress = 'Open',
    Done = 'Done',
    Overdue = 'Overdue'
}

export const STATUS_COLORS = {
    [TaskStatus.Done]: 'Green',
    [TaskStatus.InProgress]: 'Orange',
    [TaskStatus.Overdue]: 'Red',

}