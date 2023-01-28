import styled from "@emotion/styled";
import { mq } from "../../utils/themes";

export const Container = styled.div(
  {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
  },
  mq({
    flexDirection: ["column", "column", "column", "row"],
    width: ["100%", "100%", "689px", "1110px"],
    gap: [0, 0, "2rem", "2rem"],
  })
);

export const ContentWrapper = styled.div(
  {
    // width: "825px",
    // margin: "0 auto",
  },
  mq({
    // padding: ["2rem 0", "2rem 0", "2rem 0", "0"],
    flex: [1, 1, 1, 3.25],
    // width: ["375px", "689px", "689px", "825px"],
  })
);
