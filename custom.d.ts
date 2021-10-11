/*interface Window extends EventTarget, AnimationFrameProvider, GlobalEventHandlers, WindowEventHandlers, WindowLocalStorage, WindowOrWorkerGlobalScope, WindowSessionStorage {
	jsUnitTestSuite: () => function;
}*/

/*declare module "sap/m/MessageBox" { // https://github.com/Microsoft/TypeScript/issues/14080
   interface MessageBox {
        xshow(
            message: string
        ): void
    }
}*/


// export default class Button extends Control implements IFormContent {

declare module "sap/m/Button" {  
    export default interface Button {
        xshow(
            message: string
        ): void
    }
}
