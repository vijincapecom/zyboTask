import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface User {
    accessToken?: string;
    userExists?: boolean;
    otp?: string;
  }

  interface Session {
    user: {
      accessToken?: string;
      userExists?: boolean;
      otp?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    userExists?: boolean;
    otp?: string;
  }
}

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'Login',
      credentials: {
        accessToken: { label: 'Access Token', type: 'text' },
        user: { label: 'User Exists', type: 'text' },
        otp: { label: 'OTP', type: 'text' },
      },

      async authorize(credentials) {
       console.log('AUTHORIZE CREDENTIALS:', credentials);

  if (!credentials?.accessToken) {
    throw new Error('NO_ACCESS_TOKEN');
  } null;

        return {
          id: 'login',
          accessToken: credentials.accessToken,
          userExists: credentials.user === 'true',
          otp: credentials.otp,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.userExists = user.userExists;
        token.otp = user.otp;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        accessToken: token.accessToken,
        userExists: token.userExists,
        otp: token.otp,
      };
      return session;
    },
  },

  pages: {
    signIn: '/',
  },

  secret: process.env.NEXT_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
