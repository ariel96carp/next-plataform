import Image from 'next/image'
import Link from 'next/link'

const WelcomeBanner = () => (
    <section className="md:h-[30rem] bg-edsoft-blue py-12 md:py-0">
        <div className="page-container h-full">
            <div className="grid md:grid-cols-2 gap-10 justify-items-center items-center h-full">
                <div className="flex flex-col gap-6 text-white text-center md:text-left items-center md:items-start">
                    <h1 className="font-bold text-4xl font-title-font">Bienvenidos a EDSoft</h1>
                    <p>
                        ¿Necesitás asesoramiento urgente? ¡Nosotros te podemos ayudar en la
                        construcción de tu sitio web!
                    </p>
                    <Link
                        href="/"
                        className="button white"
                    >
                        Escríbenos ya mismo!
                    </Link>
                </div>
                <Image
                    src="/images/computer.svg"
                    alt="Computer"
                    width={0}
                    height={0}
                    className="w-[80%] sm:w-[70%] md:w-[80%] lg:w-[70%]"
                    priority
                />
            </div>
        </div>
    </section>
)

export default WelcomeBanner
