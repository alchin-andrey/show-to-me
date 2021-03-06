import { createStore } from 'vuex';
import userStore from './user';
import Jsonposts from './postsJson';
import postsStore from './posts';
import newsStore from './news';
// import usersStore from './users';
import moduleA from './moduleA';



const store = createStore({
  modules: {
    user: userStore,
    postsJs: Jsonposts,
    // users: usersStore,
    posts: postsStore,
    news: newsStore,
    a: moduleA,
  },
});

export default store
