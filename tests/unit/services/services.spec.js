import nock from 'nock';
import { fetchRepositories, fetchUser } from '../../../src/services';
import userFixture from '../fixtures/user.json';
import reposFixture from '../fixtures/repos.json';

describe('api', () => {
  it('searches for the user', async () => {
    const expectedUser = 'joaopdmota';

    const request = nock('https://api.github.com')
      .get(`/users/${expectedUser}`)
      .reply(200, userFixture)

    const { data } = await fetchUser(expectedUser);

    expect(data).toEqual(userFixture);
    expect(request.isDone()).toBe(true);
  });

  it('searches for the repos from user', async () => {
    const expectedUser = 'joaopdmota';

    const request = nock('https://api.github.com')
      .get(`/users/${expectedUser}/repos`)
      .reply(200, reposFixture)

    const { data } = await fetchRepositories(expectedUser);

    expect(data).toEqual(reposFixture);
    expect(request.isDone()).toBe(true);
  });
})