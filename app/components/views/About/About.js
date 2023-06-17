import AboutCard from './AboutCard'

const About = () => {
    const ABOUT_CONTENT = [
        {
            id: 1,
            src: '/images/priscilla-du-preez-VTE4SN2I9s0-unsplash.jpg',
            title: 'Sobre nosotros',
            altImage: 'Sobre EDSoft',
            description: 'Somos una empresa de diseño web dedicada a ayudar a nuestros clientes \
            a crear una presencia en línea efectiva. Nos apasiona ayudar a las empresas a conectarse \
            con sus clientes en línea, y nos comprometemos a ofrecer diseños atractivos y eficaces \
            que satisfagan las necesidades de nuestros clientes. Nuestro equipo está formado por \
            diseñadores y desarrolladores altamente capacitados y experimentados, que trabajan \
            juntos para brindar soluciones innovadoras y personalizadas a cada uno de nuestros \
            clientes. Con un enfoque en la calidad, el servicio y la atención al cliente, nos \
            enorgullece ser líderes en la industria del diseño web.'
        },
        {
            id: 2,
            src: '/images/danial-igdery-FCHlYvR5gJI-unsplash.jpg',
            title: 'Misión',
            altImage: 'Misión de EDSoft',
            description: 'Nuestra misión es proporcionar soluciones de diseño web innovadoras y \
            personalizadas que ayuden a nuestros clientes a conectarse con sus clientes en línea. \
            Nos esforzamos por ser líderes en la industria del diseño web, y nos comprometemos a \
            ofrecer servicios de alta calidad que superen las expectativas de nuestros clientes. \
            Nos enorgullece trabajar en colaboración con nuestros clientes para desarrollar \
            soluciones únicas y efectivas que les ayuden a lograr sus objetivos de negocio en \
            línea.'
        },
        {
            id: 3,
            src: '/images/kenny-eliason-1-aA2Fadydc-unsplash.jpg',
            title: 'Visión',
            altImage: 'Visión de EDSoft',
            description: 'Nuestra visión es convertirnos en la empresa líder en la industria \
            del diseño web, ofreciendo soluciones innovadoras y personalizadas que ayuden a \
            nuestros clientes a destacar en línea. Nos comprometemos a mantenernos actualizados \
            con las últimas tendencias y tecnologías de diseño web para poder brindar \
            soluciones de alta calidad y efectivas a nuestros clientes. Buscamos establecer \
            relaciones a largo plazo con nuestros clientes, ofreciendo un servicio excepcional \
            y atención al cliente de primera clase. Estamos comprometidos a mantenernos fieles \
            a nuestros valores fundamentales de calidad, servicio y atención al cliente.'
        }
    ]
    return (
        <section className="section">
            <div className="page-container">
                <h1 className="section-title">¿Quiénes somos?</h1>
                <div className="lg:w-[65%] mx-auto flex flex-col gap-10 sm:gap-14 md:gap-20">
                    {
                        ABOUT_CONTENT.map(({
                            id,
                            src,
                            title,
                            altImage,
                            description
                        }, index) => (
                            <AboutCard
                                key={id}
                                imageSrc={src}
                                title={title}
                                altImage={altImage}
                                description={description}
                                textLeft={index % 2 !== 0}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default About
