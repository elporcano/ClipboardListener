import createObservableFromDeviceEventEmitter$ from './createObservableFromDeviceEventEmitter';

export default clipboardDidUpdate$ = (delay=1000) =>
{
	return createObservableFromDeviceEventEmitter$('clipboardUpdated')
		.throttle(delay)
		
}	