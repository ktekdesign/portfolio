import React, { memo } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { newsletterUrl } from "../../utils/urls"
import axios from "axios"
import alertContent from "../../utils/alertContent"
import Heading from "./Heading"
import Container from "./Container"

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
    <Container
      className="newsletter-inner-area"
      background={{
        src: "/images/newsletter-bg.jpg",
        alt: "Newsletter background",
      }}
    >
      <div className="newsletter-content">
        <span
          className="sub-title"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          Restons en contact!
        </span>

        <Heading
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="200"
          type="h2"
        >
          Ne ratez aucune de nos actualisations et promotions
        </Heading>

        <form
          className="newsletter-form"
          onSubmit={handleSubmit(onSubmit)}
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
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
        </form>
      </div>
    </Container>
  )
}

export default memo(Newsletter)
