import fs from 'fs/promises'
import path from 'path'
import { build } from 'esbuild'
import { fileURLToPath, pathToFileURL } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const outDir = path.join(projectRoot, '.ssg')
const entryPoint = path.join(projectRoot, 'src', 'ssg-entry.jsx')
const outFile = path.join(outDir, 'ssg-entry.cjs')

await fs.mkdir(outDir, { recursive: true })

await build({
  entryPoints: [entryPoint],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile: outFile,
  external: ['react-icons', 'react-icons/fa'],
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx',
    '.css': 'text',
    '.jpg': 'dataurl',
    '.jpeg': 'dataurl',
    '.png': 'dataurl',
    '.svg': 'dataurl'
  },
  banner: {
    js: 'const React = require("react")'
  },
  logLevel: 'silent'
})

const { renderWithLanguage } = await import(pathToFileURL(outFile).href)

const indexPath = path.join(distDir, 'index.html')
const template = await fs.readFile(indexPath, 'utf8')

// Language configurations with SEO metadata
const languages = [
  {
    code: 'fr',
    filename: 'index.html',
    title: 'Harold Jacquot - Responsable Opérations IT & Plateformes Digitales',
    description: 'CV - Expertise en opérations IT, leadership d\'équipes internationales et gestion de plateformes stratégiques en Europe.',
    htmlLang: 'fr'
  },
  {
    code: 'en',
    filename: 'index-en.html',
    title: 'Harold Jacquot - Head of IT Operations & Digital Platforms',
    description: 'Resume - Expert in IT operations, international team leadership, and strategic platform management across Europe.',
    htmlLang: 'en'
  }
]

for (const lang of languages) {
  const appHtml = renderWithLanguage(lang.code)
  const formattedHtml = appHtml.replace(/></g, '>\n<')

  let rendered = template.replace(
    '<div id="root"></div>',
    `<div id="root">
${formattedHtml}
</div>`
  )

  // Update HTML lang attribute
  rendered = rendered.replace(/<html lang="[^"]*"/, `<html lang="${lang.htmlLang}"`)

  // Update title
  rendered = rendered.replace(/<title>[^<]*<\/title>/, `<title>${lang.title}</title>`)

  // Update or add meta description
  if (rendered.includes('<meta name="description"')) {
    rendered = rendered.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${lang.description}"`
    )
  } else {
    rendered = rendered.replace(
      /<meta name="viewport"[^>]*>/,
      `<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${lang.description}" />`
    )
  }

  // Remove crossorigin attributes for local static serving
  rendered = rendered.replace(/ crossorigin/g, '')

  // Remove animation styles that were meant for client-side React
  rendered = rendered.replace(/ style="opacity:0[^"]*"/g, '')

  // Remove the React script for fully static mode (no JS, pure HTML+CSS)
  rendered = rendered.replace(/<script type="module"[^>]*><\/script>/g, '')

  const outputPath = path.join(distDir, lang.filename)
  await fs.writeFile(outputPath, rendered, 'utf8')
  console.log(`✅ ${lang.filename} generated (${lang.htmlLang})`)
}

console.log('📝 Both versions generated: index.html (FR) and index-en.html (EN)')
