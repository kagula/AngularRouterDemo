# Angular Router Demo

## Environment

- Microsoft Windows [Version 10.0.19044.2604]
- Visual Studio Community 2022 Version 17.5.1
- [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.
- NPM Version 9.50  

## The Component of Angular
The component is like the window concept from C++ Windows Program that can be a controller or can be a sub page or page.
The new component consists of the following four files
- XX.component.ts (Like Back End)
- XX.component.spec.ts (We don't care this file)
- XX.component.css (Like the style of Front End)
- XX.component.html (Like Front End)  
We use ***ng generate component XX*** command to generate the new component with app.module.ts  
If you have multi module you can using the below command to generate the new component.  
 ***ng generate component XX --module XX.module.ts***   
 Where XX is the name of a component or a module.    
   
Exampe of Generate New Component With app.module.ts  
\<The prefix of project path>\\src\\app\>ng generate component components/content1  
That will generate the following messages:  
- CREATE src/app/components/content1/content1.component.html (23 bytes)
- CREATE src/app/components/content1/content1.component.spec.ts (613 bytes)
- CREATE src/app/components/content1/content1.component.ts (210 bytes)
- CREATE src/app/components/content1/content1.component.css (0 bytes)
- UPDATE src/app/app.module.ts (415 bytes)


