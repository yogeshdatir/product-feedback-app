import styled from '@emotion/styled';
import { mq } from '../../utils/themes';

export const Container = styled.div(
  {
    display: 'flex',
    justifyContent: 'space-between',
  },
  mq({
    flexDirection: ['column', 'column', 'column', 'row'],
    width: ['100%', '100%', '689px', '1110px'],
    gap: [0, 0, '2rem', '2rem'],
  }),
);

export const ContentWrapper = styled.div(
  mq({
    flex: [1, 1, 1, 3.25],
  }),
);
