import * as React from 'react';

import { InThePocketReactNativeSplashViewProps } from './InThePocketReactNativeSplash.types';

export default function InThePocketReactNativeSplashView(props: InThePocketReactNativeSplashViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
