import React from "react"
import Link from "next/link"
import Heading from "../Common/Heading"

const ErrorContent = () => (
  <div className="error-area ptb-100">
    <div className="container">
      <div className="error-content">
        <Heading type="h3">Error 404 : page introuvable</Heading>
        <p>La page que vous recherchée a été supprimée ou est inexistante.</p>

        <div className="back-btn">
          <Link href="/" className="btn btn-primary">
            Retour
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default React.memo(ErrorContent)
