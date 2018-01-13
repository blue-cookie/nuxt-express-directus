import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

// Example of testing only generated html
test('Route / exits and render HTML', async t => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<h2 style="font-size: 2.8rem; margin-bottom: 15px;" class="text-light">Cover your Car, Bike or Caravan</h2>'))
})

// Example of testing via DOM checking
test('Route / exits and render HTML with CSS applied', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
  const element = window.document.querySelector('.home-page')
  t.not(element, null)
  // t.is(element.textContent, 'Hello world!')
  // t.is(element.className, 'red')
  // t.is(window.getComputedStyle(element).color, 'red')
})

// Close the Nuxt server
test.after('Closing server', t => {
  nuxt.close()
})
