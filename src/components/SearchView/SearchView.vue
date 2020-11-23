<template>
  <Wrapper direction="column">
    <Container justify="center" alignItems="center">
      <H1>Github profile search</H1>
      <Divider space="20" />
      <Wrapper>
        <b-form-input
          id="search_input"
          :state="state"
          v-model="search"
          placeholder="Enter your name"
          @keyup.enter="searchUser"
        ></b-form-input>
        <Separator space="10" />
        <b-button variant="dark" @click="searchUser" id="search_button">
          <b-spinner label="Spinning" v-if="loading"></b-spinner>
          <span v-else>
            Pesquisar
          </span>
        </b-button>
      </Wrapper>
    </Container>
    <Wrapper
      v-if="error"
      justify="center"
      direction="column"
      id="not_found_user"
    >
      <Divider space="20" />
      <b-alert show variant="danger">Falha ao pesquisar usuário</b-alert>
      <Divider space="20" />
    </Wrapper>
    <Wrapper
      id="user_info"
      v-if="user"
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Divider space="20" />
      <Wrapper>
        <Img :src="user.avatar_url" />
        <Separator space="30" />
        <Wrapper direction="column" justify="flex-start">
          <Wrapper alignItems="center">
            <H1 color="black">Nome:</H1>
            <Separator space="5" />
            <H2 color="black">{{ user.name }}</H2>
          </Wrapper>
          <Wrapper alignItems="center">
            <H1 color="black">Usuário:</H1>
            <Separator space="5" />
            <H2 color="black">{{ user.login }}</H2>
          </Wrapper>
          <Wrapper alignItems="center">
            <H1 color="black">Seguidores:</H1>
            <Separator space="5" />
            <H2 color="black">{{ user.followers }}</H2>
          </Wrapper>
          <Wrapper alignItems="center">
            <H1 color="black">Repositórios:</H1>
            <Separator space="5" />
            <H2 color="black">{{ user.public_repos }}</H2>
          </Wrapper>

          <H1 color="black" size="16">Main repositories:</H1>
          <a
            v-for="(repo, index) in user.repos"
            :href="repo.html_url"
            :key="index"
          >
            {{ repo.name }}
          </a>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  </Wrapper>
</template>

<script>
import { Container } from './styles';
import { H1, H2, Img } from '../Interface';
import { Wrapper, Divider, Separator } from '../Layout';
import { fetchRepositories, fetchUser } from '../../services';

export default {
  name: 'SearchView',
  data: () => ({
    search: '',
    state: null,
    user: null,
    loading: false,
    error: false,
  }),
  methods: {
    resetStates() {
      this.user = null;
      this.error = false;
    },
    validateUser() {
      if (this.user || this.error) this.resetStates();
      if (this.search !== '') {
        this.state = true;
        return this.state;
      }

      this.state = false;
      return this.state;
    },
    async searchUser() {
      if (this.validateUser()) {
        this.state = null;
        try {
          this.loading = true;
          const { data: user } = await fetchUser(this.search);
          this.user = user;
          const { data: repos } = await fetchRepositories(this.user.login);
          if (repos.length > 4) {
            repos.length = 4;
          }
          this.user.repos = repos;
        } catch {
          this.error = true;
        } finally {
          this.loading = false;
        }
      }
    },
  },
  components: {
    Container,
    H1,
    H2,
    Divider,
    Wrapper,
    Separator,
    Img,
  },
};
</script>

<style scoped>
button {
  box-shadow: unset !important;
}
</style>
