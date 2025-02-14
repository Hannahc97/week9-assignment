// Set up your middleware with the Clerk template, you don't need to write it from scratch yourself
// The only edit you'll make to the template is the logic to make speicific routes protected and others public.
// A public route is avilable to everyone at all times
// A protected route is only available to a user if they are authorised to view it (signed up/in)
// You might want to protect user information? What route displays user information?
// Do this once you've got your routes 

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/user(.*)', '/createProfile(.*)', '/posts(.*)']) 

export default clerkMiddleware(async(auth, req) => {
    if (isProtectedRoute(req)) await auth.protect();
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}