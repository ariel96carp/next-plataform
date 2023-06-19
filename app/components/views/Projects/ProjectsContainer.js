import { Suspense } from 'react'
import Projects from './Projects'
import SkeletonLoading from '../../common/SkeletonLoading'

const ProjectsContainer = async () => {
    const { API_URL } = process.env
    const response = await fetch(`${API_URL}/api/projects`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return (
        <section className="section">
            <div className="page-container">
                <h1 className="section-title">Proyectos</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-12">
                    <Suspense fallback={<SkeletonLoading />}>
                        <Projects promise={data} />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default ProjectsContainer
