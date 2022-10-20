import { createContext, useContext, useEffect, useReducer } from 'react';

import { Theme } from 'enums/theme';
import { LocalStorage } from 'utils/localStorage';
import { GlobalData } from 'interfaces';
import { HeaderLinks } from 'common/constants/header';
import {
  getTheme,
  getGlobalData,
  getFooterLinks,
  getHeaderLinks,
} from './selectors';

export interface AppContext {
  theme: Theme;
  globalData: GlobalData;
}

const initialValue: AppContext = {
  theme: Theme.LIGHT,
  globalData: {
    headerLinks: HeaderLinks,
    footerLinks: [],
  },
};

const appContext = createContext<AppContext>(initialValue);

function appReducer(state: AppContext, action: any) {
  switch (action.type) {
    case 'setTheme':
      LocalStorage.set('theme', action.payload);
      return {
        ...state,
        theme: action.payload,
      };
    case 'setGlobalData':
      return {
        ...state,
        globalData: action.payload,
      };
    default:
      return state;
  }
}

function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(appReducer, initialValue);

  const value = { ...state, dispatch };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = LocalStorage.get('theme');
      dispatch({ type: 'setTheme', payload: theme ? theme : Theme.LIGHT });
    }
  }, []);

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

function useApp(selector?: any) {
  const context = useContext(appContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return selector ? selector(context) : context;
}

const selectors = {
  getTheme,
  getGlobalData,
  getFooterLinks,
  getHeaderLinks,
};

export { AppProvider, useApp, selectors };
