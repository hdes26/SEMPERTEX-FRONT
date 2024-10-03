export type TaskType = {
    id: string;
    name: string;
    status: 'pendiente' | 'en_progreso' | 'completada';
    deadline?: Date;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    is_deleted?: boolean;
}
