import env from '../core/env';

// type RequestAnimationFrameType = typeof window.requestAnimationFrame

// requestAnimationFrame = (
// 	env.hasGlobalWindow
// 		&& (
// 			(window.requestAnimationFrame && window.requestAnimationFrame.bind(window))
// 			// https://github.com/ecomfe/zrender/issues/189#issuecomment-224919809
// 			|| ((window as any).msRequestAnimationFrame && (window as any).msRequestAnimationFrame.bind(window))
// 			|| (window as any).mozRequestAnimationFrame
// 			// @ts-ignore
// 			|| window.webkitRequestAnimationFrame
// 		)
// ) || function (func: Parameters<RequestAnimationFrameType>[0]): number {
// 	return setTimeout(func, 16) as any;
// };

// todo HarmonyOS
// HarmonyOS does not support requestAnimationFrame
// just use setTimeout as fallback
const requestAnimationFrame = function (func: Function): number {
	return setTimeout(func, 16) as any;
};

export default requestAnimationFrame;
