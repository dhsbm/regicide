// 动态导入本目录的所有文件，以文件名命名属性导出

const reg = /\..*\/(.+).js/
const ModulesFiles = import.meta.globEager('./**/*.js')

const exportFiles = {}
for (const path in ModulesFiles) {
  const prop = path.match(reg)[1]
  exportFiles[prop] = ModulesFiles[path].default
}
export default exportFiles
