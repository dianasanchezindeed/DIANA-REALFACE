import './globals.css'

export const metadata = {
  title: 'RealFace — La IA que te presenta a tu futura pareja',
  description: 'No más swipe infinito. RealFace usa inteligencia artificial para conectarte con personas que realmente encajan contigo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
