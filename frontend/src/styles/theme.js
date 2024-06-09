const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  extend: {
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'dark-blue-100': 'var(--dark-blue-100)',
      'dark-blue-50': 'var(--dark-blue-50)',
      'dark-blue-10': 'var(--dark-blue-10)',
      'dark-blue-70': 'var(--dark-blue-70)',
      'dark-blue-20': 'var(--dark-blue-20)',
      'blue-10': 'var(--blue-10)',
      'blue-100': 'var(--blue-100)',
      'white-10': 'var(--white-10)',
      'white-bg': 'var(--white-bg)',
      'white-100': 'var(--white-100)',
      'white-50': 'var(--white-50)',
      'orange-20': 'var(--orange-20)',
      'orange-100': 'var(--orange-100)',
      'orange-20': 'var(--orange-20)',
      'orange-10': 'var(--orange-10)',
      'orange-50': 'var(--orange-50)',
      'greyscale-1': 'var(--greyscale-1)',
      'greyscale-2': 'var(--greyscale-2)',
      'greyscale-3': 'var(--greyscale-3)',
      status: '#783434',
      'green-100': 'var(--green-100)',
      'green-50': 'var(--green-50)',
      'green-10': 'var(--green-10)',
      'green-20': '#D6F7DB',
      'red-100': 'var(--red-100)',
      'red-50': 'var(--red-50)',
      'red-10': 'var(--red-10)',
      'red-20': 'var(--red-20)',
      'neutral-base': 'var(--neutral-base)',
      'primary-button': '#205284',
      'light-blue': '#e6f3fa',
      'blue-btn': '#205284',
      'blue-btn-hover': 'rgb(22, 57, 92)',
      'red-btn-hover': '#c62828',
      'grey-main': '#777',
      'dark-grey': '#666',
      'light-grey': '#999',
      purple: '#e0ddf1',
      'orange-main': '#ff9800',
      'dark-red-100': '#972323',
      'disabled-grey': '#cccccc',
      'table-col-grey': '#F8F8F8',
      'blue-light': 'var(--blue-light)',
      'neutral-light': 'var(--neutral-light)',
      'status-active': 'var(--green-100)',
      'status-terminated': '#CB314B',
      'status-provisioned': '#608EB6',
      'midnight-blue': '#26187B',
      'light-bg': '#F0F3F5',
      'blue-70': '#58A9F3',
      'blue-20': '#CFE6FC',
      'dashboard-blue': '#EBF6FF',
      'grey-dark': '#444',
    },
    zIndex: {
      2000: '2000',
      1000: '1000',
      100: '100',
    },
    minWidth: {
      200: '200px',
      '1/2': '50%',
      auto: 'auto',
    },
    boxShadow: {
      template: `0 2.8px 2.2px 0 rgba(0, 0, 0, 0.02), 0 6.7px 5.3px 0 rgba(0, 0, 0, 0.03), 0 12.5px 10px 0 rgba(0, 0, 0, 0.04),
      0 22.3px 17.9px 0 rgba(0, 0, 0, 0.04), 0 41.8px 33.4px 0 rgba(0, 0, 0, 0.05),
      0 100px 80px 0 rgba(0, 0, 0, 0.07)`,
    },
    width: {
      'fill-available': '-webkit-fill-available',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
    },
    height: {
      'dashboard-height': 'calc(100vh - 64px)',
    },
    minWidth: {
      '1/2': '50%',
      '1/4': '25%',
    },
    fontSize: {
      '2xs': '.5rem',
    },
    transitionDelay: {
      2000: '2000ms',
      5000: '5000ms',
      3000: '3000ms',
    },
  },
}
