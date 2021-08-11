import { createStore } from "vuex";
import modals  from "@/store/modules/modals";
import user from "@/store/modules/user";
import theme from '@/store/modules/theme';

export default createStore({
  modules: {
	modals,
	user,
	theme,
  },
});
