import Project from "@/components/template/Project/Project";


type ProjectProps = {
    params: {
        id: string;
    };
};


export default function ProjectPage({ params }: ProjectProps) {

    const { id } = params;

    return (
        <Project id={id} />
    );
}
