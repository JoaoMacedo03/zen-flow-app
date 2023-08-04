/* eslint-disable no-console */
import { exec } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const rootPath = dirname.substring(0, dirname.length - 7);
const rawData = readFileSync(
  path.join(rootPath, 'dist/manifest.json')
).toString();
const data = JSON.parse(rawData);

const zcliAppConfig = { parameters: {} };
data.parameters.forEach((element) => {
  zcliAppConfig.parameters[element.name] = element.default || '';
});

if (process.env.ZENDESK_APP_ID) {
  zcliAppConfig.app_id = process.env.ZENDESK_APP_ID;
}

writeFileSync(
  path.join(rootPath, 'dist/zcli.apps.config.json'),
  JSON.stringify(zcliAppConfig, null, 2)
);

const command = `zcli apps:${process.env.ZENDESK_APP_ID ? 'update' : 'create'}`;
console.log(`Running command: ${command}...`);

exec(command, { cwd: path.join(rootPath, 'dist') }, (error, stdout, _) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  if (!process.env.ZENDESK_APP_ID) {
    console.info(
      [
        'For the github action to be able to update the project in the future,\n',
        `create a repository variable with the name ZENDESK_APP_ID and the value ${
          stdout.split('app_id: ')[1]
        }.\n`,
        'you can find the repository variables in the settings of the repository.\n',
        'For more information, see https://docs.github.com/en/actions/learn-github-actions/variables'
      ].join('')
    );
  }

  console.log(stdout);
});
