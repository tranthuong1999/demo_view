import { useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints({
    mobile: 600,
    tablet: 1024,
    desktop: Infinity,
});

export const isMobile = breakpoints.smaller("mobile");
export const isTablet = breakpoints.between("mobile", "tablet");
export const isDesktop = breakpoints.greater("tablet");
