# Prerequisites
This repo makes use of [NodeJS](https://nodejs.org/) (and its package manager `npm`) to work.\
[Git](https://git-scm.com/) is used to get the code on your computer.\
You need them on your computer to install and run the application.

---
# Installation
## Step 1: Clone the repo
To clone the repo and install its dependencies, open a terminal and run the following commands :
> **IMPORTANT :** Don't forget to replace **{PROJECT_ROOT}** by the folder path you want the project to be located at.
```shell
git clone https://github.com/Jaucordi1/JasonAucordier_12_17122022.git {PROJECT_ROOT}
cd {PROJECT_ROOT}
```
> **NOTE :** From now on we'll assume commands are run from **{PROJECT_ROOT}** folder.

## Step 2: Download npm dependencies
To install project's dependencies, run the following command in your terminal :
```shell
npm ci
```
If you're alone working on it and don't want to lock dependencies versions, run this one instead :
```shell
npm install
```

## Step 3: Set environment variables
Create `{PROJECT_ROOT}/.env` file and copy/paste this : 
```dotenv
# Switch this to "true" to use API mock instead of production one : 
VITE_MOCK_API="false"
```

---
# Run
To run the application locally, run the following command :
```shell
npm run dev
```
Then open the application in your favorite browser at http://localhost:5173/
