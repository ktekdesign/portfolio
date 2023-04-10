import React, { memo } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import { newsletterUrl, contactUrl } from "../../utils/urls"
import alertContent from "../../utils/alertContent"
import Heading from "../Common/Heading"
import Container from "../Common/Container"

type Inputs = {
  name: string
  email: string
  number: string
  subject: string
  text: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const contact = {
        ...data,
        list: "contact",
      }

      await axios.post(contactUrl, contact)
      await axios.post(newsletterUrl, contact)

      alertContent(
        "Félicitation!",
        "Nous avons reçu votre message. Nous vous répondrons dans le plus bref délai"
      )
      reset({
        name: "",
        email: "",
        number: "",
        subject: "",
        text: "",
      })
    } catch (error) {
      if (error instanceof Error) {
        alertContent(
          `Dommage! Votre demande de contact n'a pas été envoyé à ${contactUrl}`,
          error.message,
          "error"
        )
      }
    }
  }

  return (
    <div className="contact-form">
      <div className="contact-title">
        <Heading type="h2">Contactez-nous</Heading>
        <p>Nous serons ravis de discuter de votre projet avec vous.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className="contact-form-box">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nom"
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="error">Veuillez remplir ce champ</span>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Veuillez remplir ce champ</span>}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Téléphone"
                  className="form-control"
                  {...register("number")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Sujet"
                  className="form-control"
                  {...register("subject", { required: true })}
                />
                {errors.subject && <span>Veuillez remplir ce champ</span>}
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea
                  cols={30}
                  rows={6}
                  placeholder="Votre message..."
                  className="form-control"
                  {...register("text", { required: true })}
                />
                {errors.text && <span>Veuillez remplir ce champ</span>}
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </div>
          </div>
        </Container>
      </form>
    </div>
  )
}

export default memo(ContactForm)
