import { createApp } from 'vue';
import { createStore } from 'vuex'
import App from './App.vue';
import CommonComponent from './components/common';
import storeData from './store';

const app = createApp(App);
const store = createStore({
  ...storeData
})

CommonComponent.forEach((component) => {
  app.component(component.name, component);
})

app.use(store).mount('#app');
