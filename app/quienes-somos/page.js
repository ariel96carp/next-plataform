import dynamic from 'next/dynamic'
import PageLoader from '../components/common/PageLoader'

const DynamicAbout = dynamic(() => import('../components/views/About/About'), {
    loading: () => <PageLoader />
})

const About = () => (
    <DynamicAbout />
)

export default About
