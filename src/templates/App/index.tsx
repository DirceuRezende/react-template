import { ReactNode } from 'react';
import * as Styled from './styles';

export type AppProps = {
  children: ReactNode;
};

export const App = ({ children }: AppProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
