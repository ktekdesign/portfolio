import React, { FC, memo } from "react"
import Link from "next/link"
import Heading from "../Common/Heading"
import { Service } from "../../data/interfaces/Service"

const OurServices: FC<{ title?: boolean; services: Service[] }> = ({
  title,
  services,
}) => (
  <div className="pt-100 pb-70">
    <div className="container">
      {title && (
        <div className="section-title">
          <Heading type="h2">Nos Services</Heading>
          <p>
            Première iniciative de notre groupe lancée en Octobre 2015, notre
            objectif est d&apos;offrir une alternative crédible aux porteurs de
            projets numériques qui n&apos;ont pas le savoir-faire technique
            requis pour en assurer l&apos;exécution.
          </p>
        </div>
      )}
      <div className="row justify-content-center">
        {services.map((service, key) => {
          const { iconName, viewDetails, pageTitle, shortText } = service
          return (
            <div
              className="col-lg-4 col-sm-6"
              key={key}
              data-aos="fade-in"
              data-aos-duration="1200"
            >
              <div className="service-card-one bg-fcfbfb">
                <i className={iconName}></i>
                <Heading type="h3">
                  <Link href={viewDetails}>{pageTitle}</Link>
                </Heading>
                <p>{shortText}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default memo(OurServices)
