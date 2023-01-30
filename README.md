# Installation
For this example, we're going to install the project into a `/SportSee/` folder.\
After having cloned the repository to the `/SportSee/` folder :
```shell
git clone https://github.com/Jaucordi1/JasonAucordier_12_17122022.git SportSee
cd SportSee/
npm ci
```

# Prerequisites
1. Create a `.env` file at project's root
2. Add the following content :
```dotenv
# Switch this to "true" to use API mock instead of production one : 
VITE_MOCK_API="false"
```

# Run
```shell
npm run dev
```
