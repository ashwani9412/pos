import React, { ReactNode } from 'react'

export default function LoginLayout({children}: {children:ReactNode}) {
  return (
    <html lang='en'>
    <body>
        <main>
            <div>{children}</div>
        </main>
    </body>
    </html>
  )
}
