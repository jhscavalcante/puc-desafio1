import { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { LOAD_USERS } from 'graphql/Queries'
import { User } from 'types/User'

const Users = () => {
  const { t } = useTranslation()
  const [users, setUsers] = useState<User[]>([])

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { data, loading, error } = useQuery(LOAD_USERS)

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers)
    }
  }, [data])

  return (
    <Layout>
      <div className='cards-2' style={{ backgroundColor: '#3b58e2' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='h2-heading' style={{ color: '#fff' }}>
                {users.length === 0 ? t('users_list_empty') : t('users_title')}
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              {users &&
                users.map((user: User) => {
                  return (
                    <div className='card' key={user.id}>
                      <div className='card-body'>
                        <div className='testimonial-author'>
                          {user.firstname} {user.lastname}
                        </div>
                        <div className='occupation'>{user.email}</div>
                      </div>
                      <div className='gradient-floor red-to-blue'></div>
                    </div>
                  )
                })}
            </div>
          </div>
          <hr className='section-divider' />
        </div>
      </div>
    </Layout>
  )
}

export default Users
