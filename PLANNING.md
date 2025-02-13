# Planning
## Problem domain: 
Social media app are rubbish, I want to make a nice simplel one for people that don't need a lot of features

## Wireframe
- Try to design for mobile first approach. Media queries will style for desktop

## Database Schema
- You need at least 2 tables 
- one for users
- one for posts 
- You'll need an extra table if you wanted to implement comments as a stretch 
- One to many relationship between one user to many posts
- If doing comments table, what's the relationship between a posts tables and a comments table
- Your foreign key in the many table (posts) should reference the id from clerk in the one (users) table
- Does the user table need an id AND clerk_id?

- Set up your app.

- Set up Clerk. Go to the website, configure clerk, download the package with npm etc.

- Complete the pages with content for the user.
(Make sure you conside what/where you'll implement your external UI package/component i.e. Radix)

- Deploy to vercel 

- To figure out how to store the clerkID in ypiur database see Manny's demo
- Open the object which has clerk id and extract Clerk user id and pass it into db 
- Make sure that your user signs up for clerk first with the `<SignUp>` component, then once they've done that you should redirect the user to the profile creation page. 
- The clerk userID doesn't exist unti; the user finishes signing up for Clerk.