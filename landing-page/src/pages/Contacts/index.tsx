import { Layout } from '../../components/Layout'
import { useTranslation } from 'react-i18next'

export const Contacts = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className='mt-5 accordion-1'>
        <h1 className='text-center text-white'>{t('contacts_title')}</h1>
      </div>
    </Layout>
  )
}
