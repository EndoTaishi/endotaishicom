import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isCreating = nextUrl.pathname.startsWith('/posts/create');
      const isEditing = nextUrl.pathname.endsWith('/edit');
      if (isCreating || isEditing) {
        return isLoggedIn; // Redirect unauthenticated users to login page
      } 
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
