import styled from 'styled-components';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Divider } from '@mui/material';
import { MOBILE_WIDTH } from '../../../../libs/constants';

export const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
  }
`;

export const StyledDivider = styled(Divider)`
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
