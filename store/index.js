import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
                {
                  id: "1",
                  title: "First Post",
                  previewText: "Falana Dikana",
                  thumbnail:
                    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                },
                {
                  id: "2",
                  title: "Second Post",
                  previewText: "Falana Dikana",
                  thumbnail:
                    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                },
                {
                  id: "3",
                  title: "Third Post",
                  previewText: "Falana Dikana",
                  thumbnail:
                    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                },
              ]);
            resolve();
          }, 1000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    }, 
    getters: {
      loadedPosts(state){
        return state.loadedPosts;
      }
    }
  });
}

export default createStore;