/* eslint-disable */
import Vue from 'vue'
import Footer from '../../../components/Footer'
import NuxtLink from '../NuxtLinkMock'

/**
 * An example unit test
 */
describe('Footer.vue', () => {
  let vm = null

  beforeEach(() => {
    Footer['components'] = {
      NuxtLink
    }
    const Constructor = Vue.extend(Footer)
    vm = new Constructor()
    vm.$mount()
  })

  it('root element must have a "footer-component" class', () => {
    expect(vm.$el.className === 'footer-component')
  })
})
