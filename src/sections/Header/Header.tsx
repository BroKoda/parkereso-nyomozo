import './header.scss'import hatLogo from '../../assets/hat.png'const Header = (): JSX.Element => {  return (    <div className={'container-fluid px-0 pb-5 header background-image'} id={'home'}>      <div className={'row mx-0'}>        <div className={'col-12 position-relative'}>          <div className={'container'}>            <div className={'row'}>              <div className={'col-12 menu'}>                <nav className="navbar navbar-expand-md">                  <div className="container-fluid py-3 px-0">                    <img src={hatLogo} alt={'Logo'} className={'me-4'} />                    <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse"                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"                            aria-label="Toggle navigation">                      <span><i className="bi bi-list"></i></span>                    </button>                    <div className="collapse navbar-collapse mt-3 mt-md-0" id="navbarNav">                      <ul className="navbar-nav">                        <li className="nav-item me-3">                          <a className="nav-link" aria-current="page" href="#home">Home</a>                        </li>                        <li className="nav-item me-3">                          <a className="nav-link" href="#services">Szolgáltatásaink</a>                        </li>                        <li className="nav-item me-3">                          <a className="nav-link" href="#about-us">Rólunk</a>                        </li>                        <li className="nav-item me-3">                          <a className="nav-link" href='#contact'>Kapcsolat</a>                        </li>                      </ul>                    </div>                  </div>                </nav>              </div>            </div>            <div className={'row pt-5'}>              <div className={'col-12 pt-5 title text-center text-lg-start'}>                <h1 className={'header-font pt-5 mb-4'}>Nem bizol a párodban?</h1>                <p className={'mb-5'}>                  Valódi és szakszerű segítség megfizethető áron, ügyvédi garanciával, maximális diszkrécióval.                </p>              </div>            </div>            <div className={'row pb-5'}>              <div className={'col-12 col-lg-6 col-xl-5'}>                <a href={'#contact'}><button className={'contact-button mb-5'}>Lépj velünk kapcsolatba!</button></a>              </div>            </div>          </div>        </div>      </div>    </div>  )}export default Header