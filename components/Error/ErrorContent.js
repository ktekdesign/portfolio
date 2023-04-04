import React from "react";
import Link from "next/link";
import Image from "next/image";

const ErrorContent = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <Image src="/images/404.png" alt="Error" width={600} height={600} />
            <h3>Error 404 : page introuvable</h3>
            <p>
              La page que vous recherchée a été supprimée ou est inexistante.
            </p>

            <div className="back-btn">
              <Link href="/" className="btn btn-primary">
                Retour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
