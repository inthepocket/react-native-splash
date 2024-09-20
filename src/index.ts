import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to InThePocketReactNativeSplash.web.ts
// and on native platforms to InThePocketReactNativeSplash.ts
import InThePocketReactNativeSplashModule from './InThePocketReactNativeSplashModule';
import InThePocketReactNativeSplashView from './InThePocketReactNativeSplashView';
import { ChangeEventPayload, InThePocketReactNativeSplashViewProps } from './InThePocketReactNativeSplash.types';

// Get the native constant value.
export const PI = InThePocketReactNativeSplashModule.PI;

export function hello(): string {
  return InThePocketReactNativeSplashModule.hello();
}

export async function setValueAsync(value: string) {
  return await InThePocketReactNativeSplashModule.setValueAsync(value);
}

const emitter = new EventEmitter(InThePocketReactNativeSplashModule ?? NativeModulesProxy.InThePocketReactNativeSplash);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { InThePocketReactNativeSplashView, InThePocketReactNativeSplashViewProps, ChangeEventPayload };

export function hide(): string {
  return InThePocketReactNativeSplashModule.hide();
}
