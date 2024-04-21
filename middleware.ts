// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };



import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

// export default authMiddleware({
//   publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
// });
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};