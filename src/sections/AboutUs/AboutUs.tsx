import './aboutUs.scss'import Levi from '../../assets/levi.jpg'import Slider from "react-slick";const AboutUs = (): JSX.Element => {  const sliderSetting = {    dots: true,    infinite: true,    speed: 500,    slidesToShow: 1,    slidesToScroll: 1,  }  const reviews = [    {      name: 'Gábor',      stars: getStars(5),      halfStar: true,      description: 'Nagyon profi és diszkrét szolgáltatás, ráadásul megfizethető áron! Az iroda segített megnyugvást találni a párkapcsolati kérdéseimben, és nem kellett túl nagy összeget ráfordítanom. Nagyon köszönöm a segítséget'    },    {      name: 'Violetta',      stars: getStars(4),      halfStar: true,      description: 'Kiváló ügyfélkezelés és megfizethető árak! A nyomozók empatikusak és tapasztaltak voltak, és bár rengeteg időt szántak az ügyemre, az áraik igazán barátságosak maradtak. Csak ajánlani tudom őket!'    },    {      name: 'Levente',      stars: getStars(5),      halfStar: false,      description: 'Nagyon megkönnyebbültem, hogy a szolgáltatás nem csak profi, de árban is elérhető volt. Az iroda az érzelmi állapotomat is figyelembe vette, és nem érződött túlzott költségnek a nyugalom, amit tőlük kaptam.'    },    {      name: 'Gergő',      stars: getStars(5),      halfStar: false,      description: 'Profi nyomozás, gyors és diszkrét, ráadásul a költségek teljesen ésszerüek voltak! Meglepetésként ért, hogy egy ilyen szintű szolgáltatás megfizethető lehet. Mindenkinek ajánlom!'    }  ]  function getStars(amount: number): JSX.Element[] {    const stars = []    for (let i = 0; i < amount; i++){      stars.push(<i className="bi bi-star-fill me-1"></i>)    }    return stars  }  return (    <div className={'container py-5 about-us'} id={'about-us'}>      <div className={'row py-5 justify-content-center'}>        <div className={'col-12 col-lg-5 col-xl-6 align-self-center mb-4 mb-lg-0 wow animate__animated animate__fadeInUp'} data-wow-duration="750ms">          <h1 className={'header-font'}>Rólunk</h1>          <p>            Egy olyan magánnyomozói iroda vagyunk akik segítenek megbizonyosodni párod hűségében vagy barátod,            hozzátartozod szavahihetőségében. Akár abban is ha csak tudni akarod még, hogy mit csinál az exed.            Megkeresésedet szakképzet informatikus kollégák, és tapasztalt nyomozók fogadják.            Nálunk a diszkréciónál, csak a precíz és szakszerű nyomozás a fontosabb. Fordulj hozzánk bizalommal és            garantáljuk hogy többé nem lesznek titkok előtted.          </p>        </div>        <div className={'col-10 col-sm-12 col-lg-6 col-xl-5 offset-lg-1 align-content-center wow animate__animated animate__fadeInUp'} data-wow-duration="750ms">          <Slider {...sliderSetting}>            {reviews.map((review) => {              return (                <div className={'review px-3 mb-3'}>                  <div className={'container review-card py-4 px-5'}>                    <div className={'row'}>                      <div className={'col-12'}>                        <div className={'review-header d-flex flex-row align-items-center'}>                          <div className={'d-inline-flex'}>                            <i className="bi bi-person-circle review-person-icon"></i>                          </div>                          <div className={'d-inline-flex flex-column'}>                            <p className={'review-name'}>{review.name}</p>                            <p className={'review-stars'}>                              {review.stars.map((star) => {                                return star                              })}                              {review.halfStar &&                                <i className="bi bi-star-half"></i>                              }                            </p>                          </div>                        </div>                      </div>                    </div>                    <div className={'row'}>                      <div className={'col-12'}>                        <p className={'review-text'}>{review.description}</p>                      </div>                    </div>                  </div>                </div>              )            })}          </Slider>        </div>      </div>    </div>  )}export default AboutUs