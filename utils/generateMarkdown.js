function generateMarkdown(data) {
  const ignoredSection = type => ['title', 'description', 'tableOfContents', 'username', 'repository'].includes(type) || !data[type];
  const titleCase = ([first, ...rest]) => first.toUpperCase() + rest.join('');
  const keys = Object.keys(data).filter(key => !ignoredSection(key));
  const tableOfContents = data.tableOfContents ? '\n## Table Of Contents\n\n' + keys.map(key => `* [${titleCase(key)}](#${key})`).join('\n') : '\n\n'
  const sections = keys.map(key => `## ${titleCase(key)}\n\nTODO Add ${key} information`).join('\n\n')
  return `
![badmath](https://img.shields.io/github/last-commit/${data.username}/${data.repository})
# ${data.title}

## Description

${data.description}
${tableOfContents}

${sections}
`;
}

module.exports = generateMarkdown;
