import {createRef} from 'react';
import {
  StackActions,
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const isReadyRef = createRef<boolean>();

export const navigationRef = createNavigationContainerRef();

export const reset = (name: string, params?: object | undefined) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name, params}],
    });
  }
};

export const navigate = (name: never) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
};

export const push = (name: string, params?: object | undefined) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

export const replace = (name: string, params?: object | undefined) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
};
