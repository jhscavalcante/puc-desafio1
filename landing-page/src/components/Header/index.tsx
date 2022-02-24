import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div className="container">
                <a className="navbar-brand logo-text" href="/">
                    <span className="fs-5 fw-light text-muted">{t('header_occupation')}</span> <span className="fs-5">Maurine Thalli</span></a>
                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/servicos">{t('header_link_services')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">{t('header_link_about')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contatos">{t('header_link_contacts')}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
