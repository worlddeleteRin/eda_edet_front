import { createStore } from "vuex";
import modals  from "@/store/modules/modals";
import user from "@/store/modules/user";
import theme from '@/store/modules/theme';
import site from '@/store/modules/site';
import checkout from '@/store/modules/checkout';
import catalogue from '@/store/modules/catalogue';
import cart from '@/store/modules/cart';

export default createStore({
  modules: {
	modals,
	user,
	theme,
	site,
	checkout,
	catalogue,
	cart,
  },
});
