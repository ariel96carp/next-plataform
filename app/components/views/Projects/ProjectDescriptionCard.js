import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

const ProjectDescriptionCard = ({
    imageSrc,
    title,
    description,
    altImage
}) => (
    <article className="rounded-md overflow-hidden shadow-md flex flex-col">
        <div className="h-52 relative">
            <Image
                src={imageSrc}
                alt={altImage}
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={100}
                className="object-cover object-left-top"
                priority
            />
        </div>
        <div className="p-4 flex flex-col items-start gap-3 bg-white grow">
            <h3 className="font-title-font text-2xl">{title}</h3>
            <p className="text-edsoft-gray-light font-medium">
                {description}
            </p>
            <Link
                href="/"
                className="font-bold text-edsoft-blue mt-auto"
            >
                Ver proyecto
            </Link>
        </div>
    </article>
)

ProjectDescriptionCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired
}

export default ProjectDescriptionCard
