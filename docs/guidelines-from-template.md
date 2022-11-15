#### This file is coming from the template repo used for setting up a starter Node.JS project for your needs. 

### Steps to create a Node.JS project and circleci build pipeline

This is a template project for CircleCI Node.JS app build and deploy
- Once you have your project created from this template run 'npm install' or use your IDE to install dependencies.
- This repo contains base tests, to run them use 'npm run test' command or run using your IDE.
- To confirm project is set up properly - run project itself. It runs on port 3000 and GET request to the root '/' returns 
'{
  "status": "Success",
  "message": "Hello from Node.JS!"
  }'.
- This template repo contains the following files:
    - `.cirlcleci/config.yml`
        -  circleci pipeline looks for The `config.yml` in '.circleci' folder to create and build the pipeline
    - `Dockerfile`
        - pipeline uses this dockerfile to build Node.JS app. It uses the Node-16 distroless image.
    - `pipeline/values.yaml`
        - Jenkins use this file for deploying the apps to 'lab/dev/test/prod' environments  
    - `Jenkinsfile`
        - Jenkinsfile to use the shared pipeline code for deploying apps
    Your project should have these files when you create project using the scratch template and may have to edit these files depending on your project needs.
    - Project specific file/folders
    - config.yml contains multiple jobs to build, publish and deploy the apps
    - dependabot.yml under .dependabot folder contains dependabot settings
    - pipeline/metadata.yaml is template for integration with Harness
    - project-metadata.json - project metadata files. To update them please refer to next sources:
      - https://github.com/aetna-digital-infrastructure/metadata-standards/blob/master/TAG_MANUAL.md
      - https://cvsdigital.atlassian.net/wiki/spaces/EDS/pages/2241888491/DSO+-+Metadata+Standards
- Add project in CircleCI if it has not been added yet.
- Any additional build secrets required for your image can be added to the environment variables in CircleCI or exported directly in the config.yml
- Build should kick off in CircleCI when a pull request is opened against the project repo
- Once pipeline is executed you will see your project added to Snyk, SonarCloud, Twistlock, Checkmarx scanners.
- First time you might see sonar scanner job failed, even your project is been successfully added to SonarCloud and Quality Gate passed. To fix it, just rerun failed job.
- Once your project added to CircleCI and SonarCloud, you need to update badges in README.md file.
- Greeting endpoint (GET '/') configured/enabled from the beginning.


##GitHub Flow
- GitHub flow is enabled on the projects that allow the semantic versioning `<major version>.<minor version>.<patch version>` of the artifacts by git-tag.sh script in .circleci folder. 
- The branches naming conventions should be as follows:- feature/`<branch name>`, hotfix/`<branch name>` (branches with feature toggles) and hotfix-manual/`<branch name>` (branches without feature toggles). Feature branches update minor version and hotfix branches update patch version. Major versions are updated in git-tag.sh. 
- Branches are merged to master branch except the hotfix-manual branches, the changes in the hotfix-manual branch need to cherry picked into feature branch in order to merge changes to master branch.
## notes

