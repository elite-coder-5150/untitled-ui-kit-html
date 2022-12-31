## This is documentation for the Untitled UI Kit

Here is a list of all the components
1. modals
2. customer-table is no longer supported, use the tables with in the tables template.
3. Banking template.
4. settings intergrations
5. toggle

#### Modals

I learned how to open and close the modal.

#### Settings integration

This is the first time that I had to create a horizontal tab control. the tab and link have an active state. whe the tab is active simply add a border to the bottom and when the link is active change the color to primary.

Building the ingegrations component will be very easy

Tags: #figma #figma-to-html-scss-js #javascript

#### This is just a rough draft. I may not talk about all these items.

1. When I need to display two columns using the flex box, each column need to be 48% of the parent width.

2. How to use a mixin to build your media queries for the desktop, tablet and phone.

3. I've almost mastered flexbox. I love how it works. It make laying a page out much simplier that the tradational means of layouts. I haven't seen a layout that i would need CSS Grid for. I take that back. There was a couple of front end mentor challenges that i had to use CSS Grid, but that was to make the design responsibe. This is where i learned to use media queries.

4. You can change the color of an svg, not sure if i have to add a class to the svg itself or I might be able to use the color property to change the color. Either way I will find out the next time I'm online.

5. I love using this laptop for everything that I want to do. For example, I use Figma, VSCode, codekit, HyperTerminal,  Git and Github. 

6. I may have to upgrade to webstorm because the untitled ui project is gettings massive. 4,600+ lines of code and I just got started. And i've made 168 commits to github. All I have to do is push my local changes to the GitHub repositories.

7. I love that fact that I can create beatuiful web site and I don't need bootstrap to hold my hand anymore. the only thing I need from now is how they coded their components in JavaScript.

8. I learned how to create my own design system.

9. I also learned that here is a difference between a design system and a UI Kit. Untitled is a design system not a ui kit per say.

10. The table designs can be applied to any type of table. For example, you can have a cart-table for a cart page component. and have another component named cart-summer component.

11. Now this is much better. I would rather type on an external keyboard then use the keyboard on the laptop. The only reason i bought this keybaord is because i can type super fast and it's like typing at the spped of thought.

12. My coding skills is on a whole new level since I purchased Untitled UI Now I can write styles for a specific component and i can write global styles. Which means that i can add or remove sections of web pages and swap out different sections depending on the look that i'm trying to convey.
13. I coded the button group to center in the center of the screen. The button group can be placed anywhere else it needs to be.

14. I found the fastest way to develop applications. All you have to do is make a list of all the things you want the compoennt to do. Explain the different states of a button after a certain event occurs;

15.  I love the world of programming. I find it thrilling to have 20 tabs open and still have no clue how to solve a problem, and then I realized the the 3 thing that i read got me in the ball park of where I need to be to get my code working as planed; And I think I'm going to use the type of format to write documentation for the various components that i'll need to build.

16. When creating new component I'll write the name of the class or a simple function, I write done the name of eithet a class or a simple function. And if I need to use a class i simple write the name of the class and all of the method I want the class to have.

17. The issue that i was having with the pricing-table-card took me two days to figure out. I' so glad i wan't working on a client project and when things go sidewas i know how to correct things when they mess up, with just a few lines of scss.

18. I love how i design something to look and apply that anywhere that i need is priceless.
19. I can create beautiful designs without the need for Bootstrap or anyother CSS Framework.
20. Flexbox is a real game changer for me.
21. I coded a blog template and it looks almost exactly like the design except I cant get the background image to look proper, but everything within the design looks just like the figma design.
22. and the colors are 100% compatible.
23. I have a very high understanding of SCSS.
24. I can call function that i've created within a buildin function in scss/
25. I absolutely love the tools that I use every single day.
	Here is a list of apps that i use everyday as a developer
	1. git and github
	2. figma
	3. VS Code
	4. hyper terminal
	5. Obsidian for documentation writing
	6. pixeur for grabbing the colors that i need
	7. chrome to view my designs and developments.
	8. soon to be webstorm, as a matter of fact i'm going to the librry

Once I get the html scss and js done for the uikit I'll start on an building an angular project. or I just might purchase the One Design System from spline.one. If i have the money after getting internet.

I also find it odd that i can start coding at an early hour on the morning and code all day and most of the night, then findally stop coding around two in the morning with the hopes of getting to the library as soom as they open.

#### The inputs template

The inputs template is going really smoothly. I'm actually creating inputs with a single icon and an input with two icons.

when i start codeing tomorrow I'm going to code the call to action for the free trial signup section. that sould go by realy smoothly.

That is all that i have for tody.

#### Things that i need to learn

1. How to toggle a class in plain javascript. I feel once i have that down I'll be able to do more advanced things. Which brings up a few repos from Brad Traversy. My absolute favorite Udemy course is Angular front to back, which is a tutorial series. I learned a lot by watching this tutorial

#### Things i learned watching this video tutorial series

1. How to use toaster to display custom alerts
2. How to create C.R.U.D functionality in Firebase.
3. How to authenticate a user using Googles SSO. (single-sign-on).
4. How to protect certain routes so an unauthenticated can't do much.
5. How to Create a login and registration forms
6. How form validation works within Bootstrap.
7. How I can use Bootstrap with any angular project.
8. How to use font-awesome pages from npm.
9. How to reduce a field associated with all documents in the collction. In the case of ClientPanel I added up what people owed me.
10. When I wrote the employee I changed the balance to their actual salary. And when I created the leads component i reduced the money generated for each lead within the database collection.
11. I wonder if I could do the same for MySQL The way that I extract the data will be comletely different. If I choose to use MySQL i'm going to use PHP and PDO. that makes the most sense to me to use those two.
12. run this query <code>$sql = "SELECT status FROM leads WHERE id=:id";</code> to select the status  from the leads table. The exptrapulate the data, then filter out all the leads that don't have the current id. Once you have that status to put it to the browser 
	  
	  ```javascript
		while ($row = $query->fetch()</code>.
			echo<div class='status'>$row['status']</div>;.
	```
How I used the client panel to create the samething but use employees the first iteration. And the second time around I create a leads component that I found in Quantum UI Kit by spline.one. The leads design was super easy to implement.

I can use most databases, but as soon as a get a chance to use cassandra I'm going to do it.

There is also something else that i need to get into, writing tests for my components. I do know that there a two different types of testing, there is unit testing and there integration testing

I wonder of this position is more comfortable then simply laying it falt. Having the keyboard at this angule is rather new and it may not take me long to start typing faster and faster. And just like 1500+ words
#### side note

I've noticed that the better word count is actually counting the words not just the spaces

A lot of developers think very lowly of PHP because it is so easy to write bad code. Well the truth is that you can write bad code in any and I mean any programming language. Writing bad code is not the problem of the language it is the problem of the programmer.

#### Git up and running

I read somewhere that Git is an integral part of the development cycle.

#### How to create a new repository (this is the fastest and most simple way to create repos on Github)

1. Go to Github.com and create a new repository. name it what ever you want. most of the time its the name of the project.

2. then copy the url for the repo. go to your terminal of choice and type in the following command. <code>git clone https://github.com/user-name/repo-name.git</code>.  This command will clone the respo that you just created.

3. I would then create a README.md file then add it the local git rep, commit the chagnes with a commit message then for the message i would type initial commit

4. the all you have to do is <code>git push</code>.
