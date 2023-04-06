import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import Image from 'next/image'
import baseUrl from '../../utils/baseUrl'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { saira } from '../../utils/fonts'
const MySwal = withReactContent(Swal)

const alertContent = (title: string, message: string) => {
  MySwal.fire({
    title: title,
    text: message,
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}

const Newsletter = () => {
  const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] =
    useState('')
  const [name, setName]: [string, Dispatch<SetStateAction<string>>] =
    useState('')

  const saveContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = `${baseUrl}/api/newsletter`
      const list = 'd81b5b46-1c22-4ca2-9335-522510a54f82'
      const payload = { name, email, list }
      const response = await axios.post(url, payload)
      setEmail('')
      setName('')
      alertContent('Félicitations!', response.data)
    } catch (error) {
      if (error instanceof Error) {
        alertContent('Désolé', error.message)
      }
    }
  }
  return (
    <>
      <div className="newsletter-area">
        <Image
          src="/images/newsletter-bg.jpg"
          className="newsletter-background"
          alt="Newsletter image de fond"
          fill
        />
        <div className="newsletter-inner-area">
          <div className="newsletter-content">
            <span
              className="sub-title"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Restons en contact!
            </span>

            <h2
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
              className={saira.className}
            >
              Ne ratez aucune de nos actualisations et promotions
            </h2>

            <form
              className="newsletter-form"
              onSubmit={saveContact}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-6 mt-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nome"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-lg-7 col-md-6 pos-rel mt-10">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Votre email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <button type="submit">Je m&apos;inscris!</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter