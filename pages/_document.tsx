import { Html, Head, Main, NextScript } from "next/document"

import { cloneElement } from "react"

class CSPNextScript extends NextScript {
  getScripts(files) {
    return super
      .getScripts(files)
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getPolyfillScripts() {
    return super
      .getPolyfillScripts()
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getDynamicChunks(files) {
    return super
      .getDynamicChunks(files)
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
}
class CSPHead extends Head {
  getScripts(files) {
    return super
      .getScripts(files)
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getPolyfillScripts() {
    return super
      .getPolyfillScripts()
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getDynamicChunks(files) {
    return super
      .getDynamicChunks(files)
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
}

export default function Document() {
  return (
    <Html lang="fr-FR">
      <CSPHead>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </CSPHead>
      <body>
        <Main />
        <CSPNextScript nonce={process.env.nonce} />
      </body>
    </Html>
  )
}
