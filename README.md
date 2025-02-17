- For create user form, I added made sure that the form displays the username pre-filled if they had signed it via github, as github already provides a username. 
- If they signed in through google they don't have a username already created so they can create that in the form. 
- made the username column in users table unique in sql 

The requirements I achieved were:
🎯 Setting up a user sign-up and user login using Clerk.
🎯 Creating and displaying an error/not found page if the user visits a page that doesn’t exist.
🎯 Used a Radix UI Primitive component, to enhance UX
🎯 Enabled users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information were stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).
🎯 Enabled users to create posts associated with their Clerk userId. Posts are displayed on the user’s profile page.

There were some stretch goals I didn't achieve. 
In the future I'd like to make my own version of this and add those extra features. 

I had some issues with clerk whilst creating this and kept getting this error in my terminal, which I've attached a picture of. This was making it difficult to test the application. I think it worked on vercel but on my local machine it wasn't letting me sign in. It said the middleware might not be in my src folder, however it was. So I'm not too sure what was the issue was. When I'd close VScode or close the connection and restart it again, it would work for a bit and then the error would show again. 


- For the create user form, I made sure that the form displays the username pre-filled if they had signed it via github, as github already provides a username. 
- If they signed in through google they don't have a username already created so they can create that in the form. 
- I also made the username column in users table unique in sql. 
- However I was trying to find a way where the form would be able to suggest the username if the username has been taken by looking through the database, so some form of validation. I took too much time trying to work that out, so I left it. However if you can advise a way to do that please let me know. 

- Also I had this issue, where if the user had signed up and created their account and then after the signed back in, it would redirect them to their user profile page, which I wanted, however it wouldn't show their bio. It would only show their bio if they clicked on My profile, in the navbar. Do you know why that is? 

