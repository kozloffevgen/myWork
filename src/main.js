import { createApp } from 'vue';
import App from './App.vue';
import CommonComponent from './components/common';

const app = createApp(App);

CommonComponent.forEach((component) => {
  app.component(component.name, component);
})

app.mount('#app');
