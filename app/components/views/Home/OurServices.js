import ServiceCard from './ServiceCard'

const OurServices = async () => (
    <section className="section">
        <h2 className="section-title">Nuestros servicios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            <ServiceCard
                svgImage={(
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-6 -2 24 24"
                        className="w-14"
                        fill="#2A88F4"
                    >
                        <path
                            d="M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm3 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                        />
                    </svg>
                )}
                title="Servicio 1"
                description="Diseñamos tu presencia en internet con presencia profesional"
            />
            <ServiceCard
                svgImage={(
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2 -4 24 24"
                        className="w-14"
                        fill="#2A88F4"
                    >
                        <path
                            d="M2 13v1h3V2H2v9h1v2H2zM1 0h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm9 3h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v6h8V5h-8zm2 9h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"
                        />
                    </svg>
                )}
                title="Servicio 2"
                description="Diseñamos tu presencia en internet con presencia profesional"
            />
            <ServiceCard
                svgImage={(
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2 -5 24 24"
                        className="w-14"
                        fill="#2A88F4"
                    >
                        <path
                            d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0 4h2v2H3V6zm0-3h2v2H3V3zm0 6h2v2H3V9zm3 0h8v2H6V9zm0-3h2v2H6V6zm0-3h2v2H6V3zm3 3h2v2H9V6zm0-3h2v2H9V3zm6 6h2v2h-2V9zm-3-3h2v2h-2V6zm0-3h2v2h-2V3zm3 0h2v5h-2V3z"
                        />
                    </svg>
                )}
                title="Servicio 3"
                description="Diseñamos tu presencia en internet con presencia profesional"
            />
        </div>
    </section>
)

export default OurServices
