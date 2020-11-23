import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import SearchView from '../../../../src/components/SearchView/SearchView.vue';
import userFixture from '../../fixtures/user.json';
import reposFixture from '../../fixtures/repos.json';

jest.mock('../../../../src/services');

import { fetchRepositories, fetchUser } from '../../../../src/services';

describe('search view component', () => {
	test('renders the correct snapshot', () => {
		const wrapper = mount(SearchView);
		expect(wrapper).toMatchSnapshot();
	});

	describe('when user input some value', () => {
			describe('when github api returns an user', () => {
					test('should render user info', async () => {
					beforeAll(() => {
						fetchRepositories.mockImplementation(() => ({ data: reposFixture }));
						fetchUser.mockImplementation(() => ({ data: userFixture }));
					});

					const wrapper = mount(SearchView);
					const input = wrapper.find('#search_input');
					await input.setValue('joaopdmota');
					const button = wrapper.find('#search_button');
					await button.trigger('click');

					await flushPromises();

					expect(wrapper.vm.loading).toBe(false);
					expect(wrapper.vm.error).toBe(false);
					expect(wrapper.find('#user_info').exists()).toBe(true);
				});
			});

			describe('when github api returns an error', () => {
				test('should render an error', async () => {

					const wrapper = mount(SearchView);
					const input = wrapper.find('#search_input');
					await input.setValue('kdpaso');
					const button = wrapper.find('#search_button');
					await button.trigger('click');

					await flushPromises();

					expect(wrapper.vm.loading).toBe(false);
					expect(wrapper.vm.error).toBe(true);
					expect(wrapper.find('#not_found_user').exists()).toBe(true);
				});
			});
	});

	describe('when user does not input value', () => {
		test('should change input state', async () => {

			const wrapper = mount(SearchView);
			const input = wrapper.find('#search_input');
			await input.setValue('');
			const button = wrapper.find('#search_button');
			await button.trigger('click');

			await flushPromises();

			// invalid state
			expect(wrapper.vm.state).toBe(false);
		});
	});
});