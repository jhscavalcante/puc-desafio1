import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='footer bg-gray'>
        <img
          className='decoration-circles'
          src='assets/images/decoration-circles.png'
          alt='alternative'
        />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h4 className='mb-2'>{t('footer_social_networks')}</h4>
              <h6 className='text-center text-muted'>
                {t('footer_experienced_professional')}
              </h6>
              <div className='social-container'>
                <span className='fa-stack'>
                  <a href='#facebook'>
                    <i className='fas fa-circle fa-stack-2x'></i>
                    <i className='fab fa-facebook-f fa-stack-1x'></i>
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='#twitter'>
                    <i className='fas fa-circle fa-stack-2x'></i>
                    <i className='fab fa-twitter fa-stack-1x'></i>
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='#pinterest'>
                    <i className='fas fa-circle fa-stack-2x'></i>
                    <i className='fab fa-pinterest-p fa-stack-1x'></i>
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='#instagram'>
                    <i className='fas fa-circle fa-stack-2x'></i>
                    <i className='fab fa-instagram fa-stack-1x'></i>
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='#youtube'>
                    <i className='fas fa-circle fa-stack-2x'></i>
                    <i className='fab fa-youtube fa-stack-1x'></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='copyright bg-gray'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <ul className='list-unstyled li-space-lg p-small'>
                <li>
                  <a href='/'>{t('footer_articles')}</a>
                </li>
                <li>
                  <a href='/'>{t('footer_terms_conditions')}</a>
                </li>
                <li>
                  <a href='/'>{t('footer_privacy_policy')}</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12'>
              <p className='p-small statement'>
                {t('footer_rights_reserved')}
                <a href='/'>{new Date().getFullYear()}</a>
              </p>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12'>
              <p className='p-small statement'>
                {t('footer_developed_by')}{' '}
                <a href='/' target='_blank'>
                  <span className='fw-bold'>{t('footer_developer_name')}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button id='myBtn'>
        <img src='assets/images/up-arrow.png' alt='alternative' />
      </button>
    </>
  )
}
