import dynamic from 'next/dynamic'
import PageLoader from '../components/common/PageLoader'

const DynamicContact = dynamic(() => import('../components/views/Contact/Contact'), {
    loading: () => <PageLoader />
})

const Contact = () => (
    <DynamicContact />
)

export default Contact
