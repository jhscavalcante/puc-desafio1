import { Layout } from '../../components/Layout'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className='mt-5 accordion-1'>
        <h1 className='text-center text-white'>{t('services_title')}</h1>
      </div>
    </Layout>
  )
}

export default Services
