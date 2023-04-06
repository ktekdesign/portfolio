import React from 'react'
import Link from 'next/link'

const ErrorContent = () => (
  <div className="error-area ptb-100">
    <div className="container">
      <div className="error-content">
        <h3>Error 404 : page introuvable</h3>
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

export default ErrorContent
