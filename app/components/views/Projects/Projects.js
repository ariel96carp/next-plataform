import ProjectDescriptionCard from './ProjectDescriptionCard'

const Projects = async ({ promise }) => {
    const projects = await promise
    return (
        projects.map(({
            id,
            image,
            title,
            description
        }) => (
            <ProjectDescriptionCard
                key={id}
                imageSrc={image}
                altImage={title}
                title={title}
                description={description}
            />
        ))
    )
}

export default Projects
