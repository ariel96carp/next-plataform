import dynamic from 'next/dynamic'
import PageLoader from './components/common/PageLoader'

const DynamicHome = dynamic(() => import('./components/views/Home/Home'), {
    loading: () => <PageLoader />
})

const Home = () => (
    <DynamicHome />
)

export default Home
