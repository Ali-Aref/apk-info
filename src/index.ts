// Reexport the native module. On web, it will be resolved to ApkInfoModule.web.ts
// and on native platforms to ApkInfoModule.ts
export { default } from './ApkInfoModule';
export * from './ApkInfo.types';
