import { Suspense } from 'react'
import SkeletonLoading from '../../common/SkeletonLoading'
import Projects from './Projects'

const ProjectsContainer = async () => {
    const response = await fetch('http://localhost:3000/api/projects', {
        cache: 'no-store'
    })
    const data = await response.json()
    return (
        <section className="section">
            <div className="page-container">
                <h2 className="section-title">Ultimos proyectos</h2>
                <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
                    <Suspense fallback={<SkeletonLoading />}>
                        <Projects promise={data} />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default ProjectsContainer
