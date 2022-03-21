import { App } from 'vue'
// import "element-plus/theme-chalk/src/common/"
import {
  ElDialog,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElCascader,
  ElProgress
} from 'element-plus'

const components = [
  ElButton,
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElCascader,
  ElProgress
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
