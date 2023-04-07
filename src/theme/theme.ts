export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    notActive: string;
    border: string;
    borderNotActive: string;
    purple: string;
    red: string;
  };
  fontFamily: {
    thin: string;
    light: string;
    regular: string;
    medium: string;
    bold: string;
    black: string;
  };
  fontSize: {
    small: string;
    regular: string;
    medium: string;
    large: string;
    xlarge: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#131316',
    background: '#f0f0fa',
    notActive: '#c2c2c3',

    border: '#131316',
    borderNotActive: '#e0e0e0',

    purple: '#6200ee',
    red: '#ff0000',
  },
  fontFamily: {
    thin: 'Roboto-Thin',
    light: 'Roboto-Light',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    black: 'Roboto-Black',
  },
  fontSize: {
    small: '12px',
    regular: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
  },
};
