import './contact.scss'import { useCallback, useState } from 'react'import emailjs from '@emailjs/browser'interface emailStatusProps {  status: 'success' | 'error' | 'loading'  message?: string}const Contact = (): JSX.Element => {  const [emailStatus, setEmailStatus] = useState<emailStatusProps | null>()  const sendEmailCallback = useCallback((e: any) => {    setEmailStatus({ status: 'loading' })    e.preventDefault()    emailjs.sendForm('detective-test', 'template_2805lv9', '#contact-form').then(      (response) => {        console.log(response.status, response.text)        setEmailStatus({ status: 'success', message: 'Sikeres email küldés!' })      },      (error) => {        console.log(error)        setEmailStatus({ status: 'error', message: 'Sikertelen email küldés, próbáld újra később!' })      }    )  }, [])  return (    <div className={'container-fluid contact py-5 px-0 background-image wow animate__animated animate__fadeInUp'}         data-wow-duration="750ms" id={'contact'}>      <div className={'row mx-0'}>        <div className={'col-12 position-relative'}>          <div className={'container py-5'}>            <div className={'row'}>              <div className={'col-12 col-lg-5 col-xl-6 align-self-center mb-5 mb-lg-0 title'}>                <h1 className={'header-font text-center text-lg-end'}>                  Kérdésed van?                </h1>                <p className={'text-center text-lg-end'}>                  Töltsd ki adatlapunkat és kollégáink pár órán belül felveszik veled a kapcsolatot!                </p>              </div>              <div className={'col-12 col-lg-6 col-xl-5 offset-lg-1 align-self-center'}>                <form className={'container'} onSubmit={sendEmailCallback} id={'contact-form'} name={'contact-form'}>                  <div className={'row'}>                    <div className={'col-12 from-group mb-5'}>                      <input type="text" className="body-font" id="contact_name" name="contact_name" placeholder="Név" required />                    </div>                    <div className={'col-12 from-group mb-5'}>                      <input type="email" className="body-font" id="contact_email" name="contact_email" placeholder="Email cím" required />                    </div>                    <div className={'col-12 from-group mb-5'}>                      <input type="text" className="body-font" id="contact_number" name="contact_number"                             placeholder="Telefonszám pl. 06201234567" pattern="[06][0-9]{10}" required />                    </div>                    <div className={'col-12 from-group mb-5'}>                      <textarea rows={4} className="body-font" id="contact_message" name="contact_message" placeholder="Rövid leírás" required />                    </div>                  </div>                  <div className={'row'}>                    <div className={'col-12 col-lg-12 mb-2'}>                      <button type="submit" disabled={emailStatus?.status === 'loading'} id={'contact-submit'}                              className="contact-button">Küldés!                      </button>                    </div>                  </div>                  {emailStatus?.status != null && emailStatus?.message != null &&                    <div className={'row'}>                      <div className={'col-12 text-end'}>                        <p className={`contact-status-message mb-5 ${emailStatus.status}`}>{emailStatus.message}</p>                      </div>                    </div>                  }                </form>              </div>            </div>          </div>        </div>      </div>    </div>  )}export default Contact