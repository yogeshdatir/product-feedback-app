import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 16rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem 0;
  position: sticky;
  top: 4rem;
`;

export const SidebarCard = styled.div`
  width: 100%;
  padding: 1.5rem;

  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 10px;
`;

export const CategoryFilterCard = styled(SidebarCard)`
  gap: 14px 8px;
`;

export const StatusTable = styled.table``;
