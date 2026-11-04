package dev.aliaref.apkinfo

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ApkInfoModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ApkInfo")

    Constant("PI") {
      Math.PI
    }
  }
}
