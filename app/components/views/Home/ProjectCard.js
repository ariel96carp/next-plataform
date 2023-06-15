import Image from 'next/image'
import PropTypes from 'prop-types'

const ProjectCard = async ({ imageSrc, title, description }) => (
    <article className="project-card group">
        <Image
            src={imageSrc}
            alt="Proyecto"
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 20vw"
            quality={100}
            className="object-cover object-top"
        />
        <div className="project-card-mask">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
        </div>
    </article>
)

ProjectCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ProjectCard
