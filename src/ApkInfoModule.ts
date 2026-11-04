import { NativeModule, requireNativeModule } from 'expo';

declare class ApkInfoModule extends NativeModule<{}> {
  PI: number;
}

export default requireNativeModule<ApkInfoModule>('ApkInfo');
