# node.js npm scratch template project

## Steps to create a nodejs project and circleci build pipeline
Use this project as a template for CircleCI nodejs app build and deploy
- This scratch repo contains the following files. Your project should have these files when you create project using the scratch template and may have to edit these files depending on your project needs.
    - `.cirlcleci/config.yml`
        -  circleci pipeline looks for The `config.yml` in '.circleci' folder to create and build the pipeline
    - `Dockerfile`
        - pipeline uses this dockerfile to build nodejs app. It uses the base node:10.15.0-alpine image.
    - `pipeline/values.yaml`
        - Jenkins use this file for deploying the apps to 'lab/infra/dev/test/prod' environments  
    - `Jenkinsfile`
        - Jenkinsfile to use the shared pipeline code for deploying apps
- Project specific file/folders
    - Add your project related folders like 'src/test/config..etc' and any other files/folders that may required for building the project
- config.yml contains multiple jobs to build, publish and deploy the apps
    - `build` job
        - build job runs npm install, npm build and/or npm test and creates the docker image for nodejs image.
    - `publish-hc-nexus` job
        - This job runs only on feature branches. publish-hc-nexus job executes after the build job is successful and then it tags the nodejs image with sha, publishes it to HC nexus
    - `publish-ah-nexus` job
        - This job runs only Master branch. publish-ah-nexus job executes after the build job is successful and in parallel with 'publish-lab-nexus' job to tag the nodejs app with Master tag and publish it to AH Nexus
    - 'deploy' job
        - deploy job triggers the deployment of nodejs app to HC jenkins to deploy  the app in desired environment 'lab/infra/dev/test/prod'. 
    - 'tag-and-publish-to-nexus' job
        - This job semantically tags the artifacts and pushes the tagged artifacts to the nexus repository. The job is invoked when the branches are merged to master except the hotfix-manual branch that is never merged to master. For hotfix-manual branch the job is invoked when a pull request is created.
- By default, the image uploaded to AH Nexus Repo will be tagged as `${DOCKER_REGISTRY_URL}/${DOCKER_REGISTRY_USERNAME}/${CIRCLE_PROJECT_REPONAME}:Master`.
    - `${CIRCLE_PROJECT_REPONAME}` refers to the image name
    - `${DOCKER_REGISTRY_URL}` refers to AH nexus url
    - `${DOCKER_REGISTRY_USERNAME}` refers to directory in which the image is available in AH nexus.
- The image uploaded to HC Nexus Repo will be tagged as `${DOCKER_REGISTRY_URL}/${DOCKER_REGISTRY_USERNAME}/${CIRCLE_PROJECT_REPONAME}:${SHA1_SHORT}`.
    - `${SHA1_SHORT}` refers to the sha used while building the app.
- Scan image using Twistlock for vulnerabilities
    - Build will fail if scan does not pass minimum vulnerability threshold set in config.yml
- Add project in CircleCI if it has not been added yet.
- Any additional build secrets required for your image can be added to the environment variables in CircleCI or exported directly in the config.yml
- Build should kick off in CircleCI when a pull request is opened against the project repo

##GitHub Flow
- GitHub flow is enabled on the projects that allows the semantic versioning `<major version>.<minor version>.<patch version>` of the artifacts by git-tag.sh script in .circleci folder. 
- The branches naming conventions should be as follows:- feature/`<branch name>`, hotfix/`<branch name>` (branches with feature toggles) and hotfix-manual/`<branch name>` (branches without feature toggles). Feature branches update minor version and hotfix branches update patch version. Major versions are updated in git-tag.sh. 
- Branches are merged to master branch except the hotfix-manual branches, the changes in the hotfix-manual branch need to cherry picked into feature branch in order to merge changes to master branch.
## notes
- node is really really cool!
