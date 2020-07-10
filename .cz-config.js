module.exports = {

  types: [
    { value: 'feat', name: 'feat:     新增特性' },
    { value: 'fix', name: 'fix:      修复 Bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式变更（不影响功能）' },
    { value: 'refactor', name: 'refactor: 代码重构' },
    { value: 'perf', name: 'perf:     改善性能' },
    { value: 'test', name: 'test:     添加测试功能' },
    { value: 'build', name: 'build:    变更项目构建或外部依赖' },
    { value: 'chore', name: 'chore:    变更构建流程或辅助工具' },
    { value: 'revert', name: 'revert:   回退' },
  ],

  scopes: [
    { name: 'component' },
    { name: 'config' },
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
  // override the messages, defaults are as follows
  messages: {
    type: '选择即将提交的修改类型:',
    scope: '本次变更作用域（可选）:',
    // used if allowCustomScopes is true
    customScope: '自定义变更作用域:',
    subject: '简单描述本次变更，动词开头:\n',
    body: '详细描述变更（可选），使用 "|" 另起一行:\n',
    breaking: '列出重大变更（可选）:\n',
    footer: '列出本次变更关闭的 ISSUES （可选），如： #31, #34:\n',
    confirmCommit: '确定提交上述信息？',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100,

};
