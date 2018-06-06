// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBeqDR6Rs-OvM95qDDsmE-e6lMzOwru6nE',
    authDomain: 'recipes-78f3c.firebaseapp.com',
    databaseURL: 'https://recipes-78f3c.firebaseio.com',
    projectId: 'recipes-78f3c',
    storageBucket: 'recipes-78f3c.appspot.com',
    messagingSenderId: '549231605480'
  }
};
