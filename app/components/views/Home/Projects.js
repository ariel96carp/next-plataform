import ProjectCard from './ProjectCard'

const Projects = async ({ promise }) => {
    const projects = await promise
    return (
        projects.map(({
            id,
            image,
            title,
            description
        }) => (
            <ProjectCard
                key={id}
                imageSrc={image}
                title={title}
                description={description}
            />
        ))
    )
}

export default Projects
