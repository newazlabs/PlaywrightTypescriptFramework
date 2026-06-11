#!/usr/bin/env node
// PORTAL GENERATOR: scaffolds a new portal from template/ in one command.
//
//   npm run new:portal -- amazon          (UI portal)
//   npm run new:portal -- myapi --api     (UI portal + API client template)
//
// It copies the template files, renames every "portalname" token to your
// portal name, and adds a test:<name> script to package.json.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const args = process.argv.slice(2).filter((a) => a !== '--');
const withApi = args.includes('--api');
const name = args.find((a) => !a.startsWith('-'));

if (!name || !/^[a-z][a-z0-9]*$/.test(name)) {
    console.error('Usage: npm run new:portal -- <name> [--api]');
    console.error('Portal name must be lowercase letters/numbers, e.g. "amazon"');
    process.exit(1);
}

const Name = name.charAt(0).toUpperCase() + name.slice(1);
const NAME = name.toUpperCase();

function renameTokens(content) {
    return content
        .replaceAll('PORTALNAME', NAME)
        .replaceAll('portalname', name)
        .replaceAll('Portalname', Name)
        .replaceAll('PortalName', Name);
}

function copyTemplate(fromRel, toRel) {
    const from = path.join(root, fromRel);
    const to = path.join(root, toRel);
    if (fs.existsSync(to)) {
        console.error(`Refusing to overwrite existing file: ${toRel}`);
        process.exit(1);
    }
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.writeFileSync(to, renameTokens(fs.readFileSync(from, 'utf8')));
    console.log(`  created ${toRel}`);
}

console.log(`Scaffolding portal "${name}"...`);
copyTemplate('template/config/portalname/portalname.ts',    `config/${name}/${name}.ts`);
copyTemplate('template/fixtures/portalname/portalname.ts',  `fixtures/${name}/${name}.ts`);
copyTemplate('template/pages/portalname/01_LoginPage.ts',   `pages/${name}/01_LoginPage.ts`);
copyTemplate('template/pages/portalname/02_HomePage.ts',    `pages/${name}/02_HomePage.ts`);
copyTemplate('template/pages/portalname/03_SamplePage.ts',  `pages/${name}/03_SamplePage.ts`);
copyTemplate('template/tests/portalname/portalname.spec.ts', `tests/${name}/${name}.spec.ts`);
if (withApi) {
    copyTemplate('template/api/portalname/01_SampleApi.ts', `api/${name}/01_SampleApi.ts`);
}

// Add the run script to package.json (keeps existing formatting style).
const pkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (!pkg.scripts[`test:${name}`]) {
    pkg.scripts[`test:${name}`] = `playwright test tests/${name}`;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log(`  added "test:${name}" script to package.json`);
}

console.log(`
Done! Next steps:
  1. config/${name}/${name}.ts   - fill in the URL and credentials
  2. pages/${name}/              - fill in the locators (search "TODO")
  3. tests/${name}/${name}.spec.ts - write your test steps${withApi ? `
  4. api/${name}/01_SampleApi.ts - fill in the endpoints` : ''}

Then run:  npm run test:${name} -- --headed
`);
