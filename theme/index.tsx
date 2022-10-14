import { extendTheme, StackProps } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        primary: (props: StackProps) => ({
          backgroundColor: "black",
          color: "white",
          border: "black solid 1px",

          _hover: {
            backgroundColor: "transparent",
            color: "black",
          },

          _active: {
            backgroundColor: "black",
          },
        }),
      },
    },
  },
});

export default theme;
