# The Burger Builder App

#### Project Can be found in here :
 **[Live version](https://the-burger-builder-9bfe3.web.app)**

<p align="center">
	
<img src="https://user-images.githubusercontent.com/57604500/121778074-7a753780-cb95-11eb-9fa9-2b11bd7bf1bb.png" width=1056 height=550>
<br />
<h3 align="center">CHAT APP</h3>
</p>

* Project Description :


```
   - npx create-react-app the_burger_builder ;
   - npm run eject ;
   - Adding Prop Type Validation :  npm install --save prop-types ;
   - Accessing a Server: Firebase and the Right Databses (Create a Firebase Project) ;
   - Install HTTP/AJAX : npm install --save axios ;
   
   * #ISSUES  :  ERROR : MODULE NOT FOUND (FIXED): 
      -  Run npm install -g npm to update!;
      - (I had delete node_modules directory and package-lock.json file and then i run npm install and after that i run yarn start/npm start and its working now. ) 
      - Alternatively, rm -rf node_modules, then npm install -g npm@latest ; npm install balanced-match ; --- i hope this method will also work. 
      - Because this types of error needs to npm update .

   * Next steps : 
     - I run again after fixing the errors : npm install axios --save ;
     - yarn start is working now in my server ;
     - hoc means higher order component ;

     * Working on Adding Routing :
     * Forms and Form Validation ;
     * Redux ;

    * Redux Advance :
      - Installing and setuping the Redux Devtools ;
      - Install Redux-Thunk for executing Asynchronous Code : npm install --save redux-thunk ;
    

```

#### Planning a React App :
```
    * Component Tree/ Component Structure ;
    * Application State (Data);
    * Components vs Containers ;
     
  * Planning our App Layout and Component Tree ;

  * Adding Routing to my Burger Project :
      - npm install --save react-router-dom react-router ;
      - But we are using npm install --save react-router-dom (in here run it);
      
      * Firebase : Get User Data + Exchange a refresh token for an ID Token read in the documentation for ensuring app security.  

```


### Redux :

```
  * Adding Redux to our Project:

       - (Installing Redux and React Rdux) : npm install --save redux react-redux ;
       - Basics redux setup done ;
       


```

####  * To ACCESSING PROTECTED RESOURCES : Firebase -> Database => Rules -> 

```
          {
            "rules": {
           ".read": "auth != null" ,
            ".write": "auth != null"
            }
          }

    * OR,

      {
          "rules": {
          ".read": "true" ,
          ".write": "true" ,
            "orders": {
            ".read": "auth != null",
             ".write": "auth != null"
           }
        }
     }

     OR,

      {
        "rules": {
         "ingredients": {
            ".read": "true" ,
            ".write": "true"
       },
          "orders": {
            ".read": "auth != null" ,
             ".write": "auth != null"
        }
      }
   }


```


### Improving My Burger Project :

```
   - Improvements and Fixes : Polishing the project ;
   - hoc means higher order component ;
   - Lazy loading method is always not bettor option to choose;
   

```

### Testing React Apps :

```
   - Because "Just Clicking Around" Doesn't Do It ;

   * What is Testing ? 
   ANS: Build App ---> Test manually in browser ---> Automatic Tests
   ----> Ship App to Server .

   * Why Testing ?
   ANS: 1) Component should output "Hello" --> (First draft: PASS) + (New Feature : PASS) ;
   2) Component should always render component "PersonData" ---> (First Draft: PASS) + (New Feature : PASS) ;
   3) Component should always receive a "persons" prop ---> (First Draft : PASS) + (New Feature : FAIL) ;
   4) Component should always render the "NewPerson" component when a "editable" (true) prop is received ---> (First Draft: PASS) + (New Feature : FAIL) ;

   

   * TESTING TOOLS :
   ANSWER: 1) Test Runner : Testing Utilities ;

           2) Executes Tests and provides Validation Library : "
              Simulates" the React apps(mounts components allows you to dig into the DOM) ;

           3) Jest : Enzyme  (IMPORTANT) ;


    * What to Test ?
    ANS: Don't test the library ; Don't test complex connections! ;
    Do test isolated units! ; Do test your conditional outputs! 

    * Notes :

       - npm install --save enzyme react-test-renderer enzyme-adapter-react-16 ;

       - To test your package run : npm test/ npm run test ;

       - Jest is a javascript test runner and i can use it any javascript project ;
  
```


### Deploying the React Apps to the WEB :

```
   * From Developement to Production :
   
   * DEPLOYMENTS STEPS :

     - Check (& Adjust) Basepath : <BrowseRouter basename="/my-app/">   ;

     - Build & Optimize Project : ' npm run build ' in create-react-app-project ;

     - Server must ALWAYS serve index.html (also for 404 cases) :
     To ensure that Routing works correctly ;

     - Upload Build Artifacts to (static) Server : In /build when using create-react-app ;

     - Deploying my react apps using Firebase ;

     - Optional Hosting we also can use to deploy ( AWS S3 ) ;

     - Firebase ==> Hosting ---> Click Get Started ;

     - Install Firebase CLI : Run this : npm install -g firebase-tools / If you use mac then run : sudo npm install -g firebase-tools ;

     - Initializing my Project : (Sign in to Google : firebase login) AND, (firebase init ---> to initialize my project into my root's project directory) ;

     - (firebase init ---> then chose hostong option and press space button and press Enter to confirm ---> Select don't setup a default project ===>  What do you want to use as your public directory? build  --[write:  build] --->  Configure as a single-page app (rewrite all urls to /index.html)? (y
      /N) y (yes)  ----> File build/index.html already exists. Overwrite? (y/N) n (no) ---> press Enter) ; 

     - Then check firebaserc file and firebase.json file ;
     - firebase deploy ;
     - Project Console: https://console.firebase.google.com/project/the-burger-builder-9bfe3/overview
     Hosting URL: https://the-burger-builder-9bfe3.web.app ;

```


### Working with WEBPACK :

```
    - Webpack and creating a workflow : A Primer ;

    * What is Webpack ? 

    ANS: -  JS+JS+JS ---> Analyzes Connections and Bundles/Optimizes Everything -----> bundle.js  ;

    -  CSS+CSS ----> Analyzes Connections and Bundles/Optimizes Everything ---> bundle.css ;

    - JPG+PNG ----> Analyzes Connections and Bundles/Optimizes Everything ----> Optimized JPG + Optimizied PNG ;

    * How it Works ? 

    ANS: - Multiple Entry Points are Possible ---> entry (e.g. app.js) ;

    - File-type dependent transformations ---> Loaders(e.g. babel-loader, css-loader);

    - Global transformations ----> Plugins(e.g. uglify) ;

    - Correctly ordered, concatenated output ----> output(e.g. dist/bundle.js) ;

    * Basic Workflow Requirements :

    ANS : -  Complie Next-Gen Javascript Features ;
    - Handle JSX ;
    - CSS Autoprefixing ;
    - Support Image Imports ;
    - Optimize Code ;

    



```


### Learning Redux Saga :

```
   * Module : Installing Redux Saga (Redux Saga is an alternative to Redux-Thunk) :
   
     - npm install --save redux-saga ;
     - At last, read Redux-saga offiial page for more logics and methods ;


```

### Using Hooks in My Burger builder project:

```
    - 

```
