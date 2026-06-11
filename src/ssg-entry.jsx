import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { setSSRLanguage } from './LanguageContext.jsx'

export function renderWithLanguage(language) {
  // Force the language for this render
  setSSRLanguage(language)

  const appHtml = renderToString(React.createElement(App))

  // Reset for next render
  setSSRLanguage(null)

  return appHtml
}
