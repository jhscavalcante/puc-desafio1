import { User } from '../../types/User'
import { FormRegister } from './FormRegister'
import { useTranslation } from 'react-i18next'

import { useMutation } from '@apollo/client'
import { CREATE_USER_MUTATION } from 'graphql/Mutation'

export const Register = () => {
  const { t } = useTranslation()

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION)

  const saveUser = async (user: User) => {
    createUser({
      variables: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password
      }
    })

    if (error) {
      console.log(error)
    }
  }

  return (
    <div className='mt-5 accordion-1'>
      <header id='header'>
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
    </div>
  )
}
