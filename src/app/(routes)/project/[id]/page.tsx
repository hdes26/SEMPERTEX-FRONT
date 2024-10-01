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
            <section className="project-content flex w-full h-5/6 p-10">
                <TaskList name="Pendiente" />
            </section>
        </>
    )
}