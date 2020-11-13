import { mount } from '@vue/test-utils';
import nock from 'nock';
import SearchView from '../../../../src/components/SearchView/SearchView.vue';
import userFixture from './fixtures/user.json';
import reposFixture from './fixtures/repos.json';

describe('search view component', () => {
	test('renders the correct snapshot', () => {
		const wrapper = mount(SearchView);
		expect(wrapper).toMatchSnapshot();
	});

	describe('when user input some value', () => {
			describe('when github api returns an user', () => {
				beforeAll(() => {
					const expectedUser = 'joaopdmota';
					nock('https://api.github.com').get(`/users/${expectedUser}`).reply(200, { data: userFixture});
					nock('https://api.github.com').get(`/users/${expectedUser}/repos`).reply(200, { data: reposFixture});
				});

				test('should render user info', async () => {
					const wrapper = mount(SearchView);
					const input = wrapper.find('#search_input');
					await input.setValue('joaopdmota');
					const button = wrapper.find('#search_button');
					await button.trigger('click');
					expect(wrapper.vm.loading).toBe(true);

					wrapper.vm.$nextTick(() => {
						expect(wrapper.vm.loading).toBe(false);
						expect(wrapper.vm.error).toBe(false);
						expect(wrapper.find('#user_info').exists()).toBe(true);
						done();
					})
				});
			})

			describe('when github api returns an error', () => {
				// test('', () => {
				// 	const wrapper = mount(SearchView);
				// 	expect(wrapper).toMatchSnapshot();
				// });
			})
	})

	describe('when user does not input value', () => {
		// test('', () => {
		// 	const wrapper = mount(SearchView);
		// 	expect(wrapper).toMatchSnapshot();
		// });
	});
});