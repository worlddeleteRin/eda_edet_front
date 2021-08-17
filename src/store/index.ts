import { createStore } from "vuex";
import modals  from "@/store/modules/modals";
import user from "@/store/modules/user";
import theme from '@/store/modules/theme';
import site from '@/store/modules/site';
import checkout from '@/store/modules/checkout';

export default createStore({
  modules: {
	modals,
	user,
	theme,
	site,
	checkout,
  },
});
