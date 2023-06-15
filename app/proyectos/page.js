import dynamic from 'next/dynamic'
import PageLoader from '../components/common/PageLoader'

const DynamicProjects = dynamic(() => import('../components/views/Projects/ProjectsContainer'), {
    loading: () => <PageLoader />
})

const Projects = () => (
    <DynamicProjects />
)

export default Projects
