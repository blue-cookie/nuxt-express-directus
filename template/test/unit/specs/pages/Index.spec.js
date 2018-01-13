/* eslint-disable */
import Vue from 'vue'
import Home from '../../../../pages/index'
import NuxtLink from '../../NuxtLinkMock'

/**
 * An example unit test
 */
describe('Index.vue', () => {
  let vm = null

  beforeEach(() => {
    const Constructor = Vue.extend(Home)
    vm = new Constructor()
    vm.$mount()
  })

  it('root element must have a "home-page" class', () => {
    expect(vm.$el.className === 'home-page')
  })
})
