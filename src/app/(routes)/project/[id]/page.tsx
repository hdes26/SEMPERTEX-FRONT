import TaskList from "@/components/organism/TaskList/TaskList";

type ProjectPageProps = {
    params: {
        id: string;
    };
};
export default function ProjectPage({ params }: ProjectPageProps) {
    const { id } = params;

    console.log(id);

    return (
        <>
            <section className="project-content flex w-full max-h-full justify-center overflow-y-auto gap-20 p-10">
                <TaskList name="Pendiente" type="todo" key={1}/>
                <TaskList name="En progreso" type="inprogress" key={2}/>
                <TaskList name="Completado" type="completed" key={2}/>
            </section>
        </>
    )
}