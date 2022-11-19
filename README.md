# UPDATED SpaceRock - EXAM PROJECT
## ProOktatas Full-stack Develpoer bootcamp - JAVASCRIPT MODULE 

### **_Introduction_**
During the 4 months Javascript module, I have learned the basics and more of vanilla Javascript. In this exam project, there were some requirements. The project needed to be a CRUD app with a database connection. 

It needed an update as Tailwind Elements library and Tailwind Css itself had some conflict and because of that some of the feature is not working in the original project :( Then I realized if I need to rewrite most of the stuff, why not just rewrite as a Vue project. :) I also planning to try to use the concept of microservices. Lets dig in!

### **_Used Technologies_**
0. Vue
1. Tailwind Css and Tailwind library
2. Node Js / Express JS
3. MongoDB

## **_The project itself_**
The project idea is based on the ESA SACF https://sacf.esa.int/ . It is the European Space Agency Curator Facility and I am lucky to say I know some amazing people from there. I enjoyed to work on this project as it was a match with my geology degree.

**Aim of the Project**

To make a simple CRUD application where the user can add, modify and delete data (which is connected to a database). I also added a register and login site (using cookies) and a image uploading feature.

**Challenges within the Project**

- Cookies - in the beginning the frontend and backend listened to different ports and therefore cookies were not send. Solution was to bring everything in one port. I needed to do this anyway in order to deploy the page. So now node js serving/building the Vue frontend. 
- Making a good structure for Views and components. That is always tricky :D There is still place to improve this by using the concept of microservices later
- Register/Login: Before sessions had their own database, now I took this out and the sessions are saved under the user database. It works ok, but if the user does not log out and the cookie expires then we have a problem... So place to improve - probably session should have its own database again.

## **_What have I learned_** 

1. Tons of Vue. 
2. MongoDB
3. Tailwind Css and Tailwind Elements

## Deployed: 2022. November

https://spacerockvue.onrender.com

For testing purpose use test@test.com for username with the password test on the login form. But PLEASE LOGOUT when you are done :pray: