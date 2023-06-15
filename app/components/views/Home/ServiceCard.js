import PropTypes from 'prop-types'

const ServiceCard = ({ svgImage, title, description }) => (
    <article
        className="flex flex-col gap-3 items-center text-center"
    >
        {svgImage}
        <h3 className="font-black text-2xl font-title-font">{title}</h3>
        <p className="text-edsoft-gray-light">{description}</p>
    </article>
)

ServiceCard.propTypes = {
    svgImage: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ServiceCard
