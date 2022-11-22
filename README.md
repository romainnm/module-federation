# Initial setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

    1. Create the workspace: ng new mfeStarter --create-application false --minimal
    2. Generate the mfe-shell: ng generate application mfe-shell --routing --style scss
    3. Generate the mfe-project: ng generate application mfe-project --routing --style scss
    4. Add Module Federation to projects
        - ng add @angular-architects/module-federation@latest --project mfe-shell --port 4200 --type host
        - ng add @angular-architects/module-federation@latest --project mfe-project --port 4201 --type remote
    note: ideally module federation version should match the angular version


## Scripts
    "start:shell": "ng serve mfe-shell",
    "start:mfe-project": "ng serve mfe-project", 
    "start:all": "concurrently\"npm run start:shell\" \"npm run start:mfe-project\" ",

