import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

	test('displays message', () => {
		const wrapper = mount(App);

  expect(wrapper.text()).toContain('Hello world');
});
