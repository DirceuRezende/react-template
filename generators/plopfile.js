/* eslint-disable no-undef */
export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.ts',
        templateFile: 'templates/stories.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  });
  plop.setGenerator('feature', {
    description: 'Create a feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your feature name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/pages/Home/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/pages/Home/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/pages/Home/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/pages/Home/stories.ts',
        templateFile: 'templates/stories.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/components/{{pascalCase name}}/stories.ts',
        templateFile: 'templates/stories.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/routes/index.tsx',
        templateFile: 'templates/routes.tsx.hbs'
      }
    ]
  });
  plop.setGenerator('service', {
    description: 'Create a service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/services/{{camelCase name}}/index.ts',
        templateFile: 'templates/service.ts.hbs'
      }
    ]
  });
};
