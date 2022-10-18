import { AppContext } from './app.context';

export const getTheme = (context: AppContext) => {
  return context.theme;
};

export const getGlobalData = (context: AppContext) => {
  return context.globalData;
};

export const getHeaderLinks = (context: AppContext) => {
  return getGlobalData(context).headerLinks;
};

export const getFooterLinks = (context: AppContext) => {
  return getGlobalData(context).footerLinks;
};
