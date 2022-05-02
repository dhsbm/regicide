const reg = /\..*\/(.+).js/

// vite 中
const ModulesFiles = import.meta.globEager('./**/*.js')

const exportFiles = {}
for (const path in ModulesFiles) {
  const prop = path.match(reg)[1]
  exportFiles[prop] = ModulesFiles[path].default
}
export default exportFiles
