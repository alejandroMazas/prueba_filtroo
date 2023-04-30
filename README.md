# Filtroo tech challenge
 
## ShowTime React-Native app

This application has been created with react-native and expo. The application consists of an informative search engine of tv shows, in which you can find both the synopsis and the score, as well as other details.

![home page image](./docs/captureScreen%201.png)

### How to start 

first you must install the expo app with the following commands:

~~~

npx create-expo-app nameProject

cd nameProject
npx expo start

~~~

### How to execute

To execute the project you must enter the following commands:

~~~

npm i

npm start

~~~

### Routing

You need to install react navigation native to be able to route the pages of your application, with this commands:

~~~

npm install @react-navigation/native @react-navigation/native-stack

~~~

### Some App screnshots

![home page image](./docs/captureScreen%202.png)

This screenshot shows a list of tv shows loaded with the API. the first page is a 250 show list with a infinite scroll, when footer reach the end, the list component is updated loading the next page of shows. 

![home page image](./docs/captureScreen%204.png)

In this screenshot can see the spinner when footer reach the end of the list, loading more shows

![home page image](./docs/captureScreen%203.png)

This screenshot shows the deatail page of a show, when the button "show detail" of the previous page was pressed

In the test, you were asked to click on the image, but for design reasons I preferred to include a button to navigate.













