import { registerWebModule, NativeModule } from 'expo';

// ApkInfoModule is not available on the web platform.
class ApkInfoModule extends NativeModule<{}> {}

export default registerWebModule(ApkInfoModule, 'ApkInfoModule');
