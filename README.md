# The Burger Builder App

### Builded by Falguni Islam (Self-Taught Software Developer)


* NOTES :


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
     -  


```