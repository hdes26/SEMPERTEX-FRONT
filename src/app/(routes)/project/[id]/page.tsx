'use client';
import TaskList from "@/components/organism/TaskList/TaskList";
import { addMultipleTasks } from "@/redux/features/taskListSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TaskType } from "@/types/Task";
import { useEffect, useRef, useState } from "react";

type ProjectPageProps = {
    params: {
        id: string;
    };
};

export default function ProjectPage({ params }: ProjectPageProps) {
    const { id } = params;
    const tasksFromStore = useAppSelector((state) => state.taskListReducer.tasks);
    const dispatch = useAppDispatch();

    const [taskCards, setTaskCards] = useState<TaskType[]>([
        { id: 1, name: 'Tarea de Hernan', status: 'todo' },
        { id: 2, name: 'Tarea de Hernan', status: 'inprogress' },
        { id: 3, name: 'Tarea de Hernan', status: 'completed' }
    ]);

    const hasDispatched = useRef(false);

    useEffect(() => {
        if (tasksFromStore.length === 0 && !hasDispatched.current) {
            dispatch(addMultipleTasks(taskCards));
            hasDispatched.current = true;
        }
    }, [dispatch, tasksFromStore.length, taskCards]);

    return (
        <>
            <section className="project-content flex w-full max-h-screen justify-center overflow-y-auto gap-20 p-10">
                <TaskList name="Pendiente" type="todo" key={1} />
                <TaskList name="En progreso" type="inprogress" key={2} />
                <TaskList name="Completado" type="completed" key={3} />
            </section>
        </>
    );
}
