import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image"
import { newsletterUrl } from "../../utils/urls"
import axios from "axios"
import { saira } from "../../utils/fonts"
import alertContent from "../../utils/alertContent"

type Inputs = {
  name: string
  email: string
}

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post(newsletterUrl, data)
      alertContent("Félicitations!", response.data)
      reset({
        name: "",
        email: "",
      })
    } catch (error) {
      if (error instanceof Error) {
        alertContent("Désolé", error.message, "error")
      }
    }
  }

  return (
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
            onSubmit={handleSubmit(onSubmit)}
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
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="error">Veuillez remplir ce champ</span>
                  )}
                </div>
                <div className="col-lg-7 col-md-6 pos-rel mt-10">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="error">Veuillez remplir ce champ</span>
                  )}
                  <button type="submit">Je m&apos;inscris!</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Newsletter)
