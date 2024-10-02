import React from 'react';
import './style.css';
import ProjectList from '../../organism/ProjectsList/ProjectsList';
import AddProjectButton from '@/components/molecules/addProjectButton/AddProjectButton';


export const Home = () => {
    return (
        <section className="main-content flex flex-col w-full h-full">
            <AddProjectButton text=' + Agregar proyecto' />
            <ProjectList />
        </section>
    );
};

export default Home;