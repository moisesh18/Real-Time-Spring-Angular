# Real time chat mongo, spring, angular with SockJS


##Set-up development enviroment
In order to set-up developement enviroment for this project, follow the next steps:

1. Download MongoDB Compass (its no really necessary, it just provides a UI, but if you feel the power of terminal you can use it) and import `users-database.json`. Or simply create your own database, and insert it a collection called "users". (default database name is `jsa_mongodb`, if you can change it, you should look `socket/src/main/resources/application.properties` and rename yor database). Default authentication is `admin` `welcome1` 
1. Move to backend folder with `cd socket` and run `mvn spring-boot:run`.
1. Move to frontend folder with `cd client` and run `ng serve --host=0.0.0.0` (we specifying host 0.0.0.0 to listen on all Ethernet devices, in order to test our chat in other computers)
1. Access to localhost:4200... then look up your ip, and tell other collegues to access <your ip>:4200

### Notes 
1. I recommend to download VSCode, because it default path will be always your project path, and always we should run two terminals (one of angular, and other to spring boot).
1. Backend is ready to create users, but frontend haven't implement the views to complete the process. You can verify this in `socket/src/main/java/com/chat/controller/UserController.java`
1. When you move to production or simply want to test the app with your friends, you should change the `url` in `client/src/enviroments/enviroment.ts`
