import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <nav
      id='navbarExample'
      className='navbar navbar-expand-lg fixed-top navbar-light'
      aria-label='Main navigation'
    >
      <div className='container'>
        <a className='navbar-brand logo-text' href='/'>
          <span className='fs-5 fw-light text-muted'>
            {t('header_occupation')}
          </span>{' '}
          <span className='fs-5'>Maurine Thalli</span>
        </a>
        <button
          className='navbar-toggler p-0 border-0'
          type='button'
          id='navbarSideCollapse'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='navbar-collapse offcanvas-collapse'
          id='navbarsExampleDefault'
        >
          <ul className='navbar-nav ms-auto navbar-nav-scroll'>
            <li className='nav-item'>
              <NavLink
                exact
                className={'nav-link'}
                activeClassName='active'
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={'nav-link'}
                activeClassName='active'
                to='/servicos'
              >
                {t('header_link_services')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={'nav-link'}
                activeClassName='active'
                to='/sobre'
              >
                {t('header_link_about')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={'nav-link'}
                activeClassName='active'
                to='/contatos'
              >
                {t('header_link_contacts')}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={'nav-link'}
                activeClassName='active'
                to='/usuarios'
              >
                {t('header_link_users')}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
