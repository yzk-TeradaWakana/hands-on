export default function (plop) {
    plop.setGenerator('component', {
      description: 'Generate a new component with a folder structure',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name:',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/common/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'src/plop-templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/common/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'src/plop-templates/Component.test.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/common/{{pascalCase name}}/index.tsx',
          templateFile: 'src/plop-templates/index.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/common/{{pascalCase name}}/{{pascalCase name}}.style.ts',
          templateFile: 'src/plop-templates/Component.style.ts.hbs',
        },
      ],
    });
  };
  