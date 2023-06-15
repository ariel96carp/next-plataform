import Link from 'next/link'

const AboutBanner = () => (
    <section className="about-banner">
        <div className="absolute top-0 left-0 w-full h-full bg-edsoft-blue/90">
            <div className="page-container flex flex-col items-center justify-center h-full">
                <h2
                    className="font-bold font-title-font text-3xl text-center mb-6"
                >
                    Sobre nosotros
                </h2>
                <p className="mb-3">Este es el sitio web de nuestra agencia de desarrollo</p>
                <Link
                    href="/"
                    className="py-3 px-5 border border-white font-semibold rounded-full inline-block hover:bg-white hover:text-edsoft-blue"
                >
                    Ver experiencia
                </Link>
            </div>
        </div>
    </section>
)

export default AboutBanner
