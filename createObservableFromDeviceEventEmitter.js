import React, {DeviceEventEmitter} from 'react-native';
import {Observable} from 'rx-lite'

/**
 * Creates an Observable to listen to any event of DeviceEventEmitter
 * @param type {string} Event type
 */

export default createObservableFromDeviceEventEmitter$ = type => {
let subscription;
return Observable.fromEventPattern(
handler => subscription = DeviceEventEmitter.addListener(type, handler),
handler => subscription.remove()
  )
}