import { Provider } from 'react-redux';
import { StyledThemeProvider } from '../src/styles/styled-theme-provider';
import store from '../src/store';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <StyledThemeProvider>
        <Story />
      </StyledThemeProvider>
    </Provider>
  ),
];
