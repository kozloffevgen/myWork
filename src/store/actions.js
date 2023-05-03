export default {
  checkData({ dispatch, commit }) {
    const data = window.localStorage.getItem('data');
    
    if (data) {
      commit('setData', data);

      return;
    }

    dispatch('setDefaultData');
  },

  setDefaultData({ commit }) {
    const cat = require('@/assets/img/cat.jpg');
    const cat2 = require('@/assets/img/cat2.jpg');
    const defaultData = {
      0: {
        name: 'Cats',
        items: {
          firest: {
            img: cat,
          },
          second: {
            img: cat2,
          },
          third: {
            img: cat,
          }
        },
      }
    };
    const data = JSON.stringify(defaultData);

    window.localStorage.setItem('data', data);

    commit('setData', data);
  }
};
