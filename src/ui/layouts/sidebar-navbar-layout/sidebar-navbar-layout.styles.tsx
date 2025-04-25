import styled from "styled-components";
import { colors } from "$/ui/styles/tokens/tokens";
import { from } from "$/ui/styles/media-queries";
import { px2rems } from "$/ui/utils/px-to-rem";

const SIDEBAR_WIDTH_XL = px2rems(260);

export const Container = styled.div`
  display: grid;
  min-height: calc(100vh);
  grid-template-rows: auto 1fr;

  ${from.l} {
    background: ${colors.white};
    grid-template-rows: 1fr;
    grid-template-columns: ${SIDEBAR_WIDTH_XL} 1fr;
  }
`;
