import { usePost } from '../../hooks/customHooks'
import { User } from '../../types/User'
import { FormRegister } from './FormRegister'
import { useTranslation } from 'react-i18next'

export const Register = () => {
  const { t } = useTranslation()
  const { apiPost } = usePost('/users')

  const saveUser = async (user: User) => {
    await apiPost(user)
  }

  return (
    <header id='header' className='accordion-1'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='text-container'>
              <h2 className='h2-heading'> {t('register_title')} </h2>
              <p className='text-white'>{t('register_description_p1')}</p>
              <p className='text-white'>{t('register_description_p2')}</p>
            </div>
          </div>
          <div className='col-lg-6'>
            <FormRegister onSaveUser={saveUser} />
          </div>
        </div>
      </div>
    </header>
  )
}
