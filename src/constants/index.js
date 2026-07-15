import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "50% -1500vh",
      initialMaskSize: "3100% 3100%",
      maskPos: "50% 7vh",
      maskSize: "50% 50%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "3500% 3500%",
      maskPos: "50% 35%",
      maskSize: "35% 35%",
      maskMarginTop: "-10vh",
      overLayMarginTop: "vh",
      scale: 0.8,
    };
  }

  return {
    initialMaskPos: "50% 50%",
    initialMaskSize: "4200% 3500%",
    maskPos: "50% 38%",
    maskSize: "30% 30%",
  };
};
