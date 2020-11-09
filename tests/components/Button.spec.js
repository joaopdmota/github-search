import { mount } from '@vue/test-utils';
import Button from '../../src/components/Button/Button.vue';

	test('displays message', () => {
		const wrapper = mount(Button);

  expect(wrapper.text()).toContain('Button');
});
