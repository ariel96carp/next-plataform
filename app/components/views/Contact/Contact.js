import Link from 'next/link'

const Contact = () => (
    <section className="section">
        <div className="page-container">
            <h1 className="section-title">Contacto</h1>
            <div className="grid sm:grid-cols-2 lg:w-[70%] mx-auto">
                <div className="flex flex-col gap-10">
                    <div>
                        <h3 className="font-title-font text-xl mb-2">Teléfono</h3>
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-6 -2 24 24"
                                className="w-5"
                                fill="#676F73"
                            >
                                <path
                                    d="M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm3 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                />
                            </svg>
                            <p className="underline text-edsoft-blue">(1,2,3) - 456 - 7890</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-title-font text-xl mb-2">Correo electrónico</h3>
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-2 -5 24 24"
                                className="w-5"
                                fill="#676F73"
                            >
                                <path
                                    d="M2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v10h16V2H2zm3 6h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm10-5h2v2h-2V3z"
                                />
                            </svg>
                            <p className="underline text-edsoft-blue">arielcarp1996@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-title-font text-xl mb-2">Redes sociales</h3>
                        <div className="flex items-center gap-8">
                            <Link href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-2 -4 24 24"
                                    className="w-4"
                                    fill="#676F73"
                                >
                                    <path
                                        d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"
                                    />
                                </svg>
                            </Link>
                            <Link href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-7 -2 24 24"
                                    className="w-4"
                                    fill="#676F73"
                                >
                                    <path
                                        d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"
                                    />
                                </svg>
                            </Link>
                            <Link href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-2 -2 24 24"
                                    className="w-4"
                                    fill="#676F73"
                                >
                                    <path
                                        d="M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z"
                                    />
                                    <path
                                        d="M14.842 12.045l-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z"
                                    />
                                </svg>
                            </Link>
                            <Link href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-2 -2 24 24"
                                    className="w-4"
                                    fill="#676F73"
                                >
                                    <path
                                        d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"
                                    />
                                    <path
                                        d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"
                                    />
                                    <circle
                                        cx="15.156"
                                        cy="4.858"
                                        r="1.237"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-title-font text-xl mb-2">Dirección</h3>
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-5 -2 24 24"
                                className="w-5"
                                fill="#676F73"
                            >
                                <path
                                    d="M12 7A5 5 0 1 0 2 7c0 1.726 1.66 5.031 5 9.653 3.34-4.622 5-7.927 5-9.653zM7 20C2.333 13.91 0 9.577 0 7a7 7 0 1 1 14 0c0 2.577-2.333 6.91-7 13zm0-9a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                />
                            </svg>
                            <p className="underline text-edsoft-blue">
                                Calle Falsa #123, Springfield, Óregon, Estados Unidos
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <h3 className="font-title-font text-2xl">¿Tenés algo para decir?</h3>
                </div>
            </div>
        </div>
    </section>
)

export default Contact
