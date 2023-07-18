import { defineContainer } from './vue-component-lib/utils';
export const MyButton = defineContainer('my-button', undefined);
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last'
]);
//# sourceMappingURL=components.js.map