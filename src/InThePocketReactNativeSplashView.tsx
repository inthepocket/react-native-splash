import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { InThePocketReactNativeSplashViewProps } from './InThePocketReactNativeSplash.types';

const NativeView: React.ComponentType<InThePocketReactNativeSplashViewProps> =
  requireNativeViewManager('InThePocketReactNativeSplash');

export default function InThePocketReactNativeSplashView(props: InThePocketReactNativeSplashViewProps) {
  return <NativeView {...props} />;
}
