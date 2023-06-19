import PropTypes from 'prop-types'
import Image from 'next/image'

const AboutCard = ({
    imageSrc,
    description,
    title,
    altImage,
    textLeft = false
}) => (
    <article className="grid sm:grid-cols-2 gap-6">
        <div className={`relative rounded-md overflow-hidden h-56 sm:h-60 ${textLeft && 'sm:order-last'}`}>
            <Image
                src={imageSrc}
                alt={altImage}
                fill
                sizes="(max-width: 576px) 100vw, 50vw"
                quality={100}
                placeholder="blur"
                blurDataURL={imageSrc}
                className="object-cover object-center"
                priority
            />
        </div>
        <div>
            <h3 className="text-3xl font-title-font mb-1">{title}</h3>
            <p className="text-edsoft-gray-light font-medium">
                {description}
            </p>
        </div>
    </article>
)

AboutCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    textLeft: PropTypes.bool
}

export default AboutCard
