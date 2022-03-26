# hackerbay-nodejs

This is nodejs api I have developed for hackerbay interview.

I built a simple stateless microservice in Nodejs, with three major functionalities -

Authentication ----> both login and registration
JSON patching
Image Thumbnail Generation


My app consists the folder which are going to explain each and how it works.

models ----> contains the abstarction data for user to authenticate.

controllers ----> contains the function of doing actions to the database and connected with routes.

middleware ---->   contains validation wich controlls every input for the user should be valid and auth for a user is            authenticated or not using JWT.


utils ---->  is used to sign with JWT and used to hash the password during registration.

routes ----> contains the user routes for any functions defined in controllers and contain thumbnails with function defined.

uploads ----> destination folder for thumbnails image.
demo    ----> sample screenshots for registration adn login


      other two files are  

      1. index.js  which is the starting point of the application

      2. test.js   which is used to test the functionality of the application



         # programming languages,frameworks,libraries and database I have used


         1. javascript ----> language
         2. nodejs     ----> javascript runtime
         3. expressjs  ----> framework for nodejs
         4  mocha      ----> test-framework running on nodejs
         5. mongodb    ----> databse

         & differrent libraries used in this implementation which are imported in index.js and other files.
