// src/plugins/breakpoints.js
import { isMobile, isTablet, isDesktop } from "../Composables/useScreenBreakpoints";

export default {
  install(app) {
    app.config.globalProperties.$isMobile = isMobile;
    app.config.globalProperties.$isTablet = isTablet;
    app.config.globalProperties.$isDesktop = isDesktop;
  },
};
