import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Button from '@/packages/button/Button.vue';

describe('Button.vue', () => {
  it('1. 测试属性 type', () => {
    const type = 'primary';
    const wrapper = shallowMount(Button, {
      propsData: { type },
    });
    expect(wrapper.vm.type).to.include(type);
  });
});
