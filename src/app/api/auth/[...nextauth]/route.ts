import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, genSalt, hash } from 'bcrypt';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        //
        // const response = await fetch(`${process.env.API_DATABASE_URL}/stats_scores/GetUser`,{
        //     method:'GET',
        //     body:JSON.stringify(credentials),
        //     headers:{'Content-Type': 'application/json'}
        // });

        // const user = await response.json();

        const user2 = {
            email:'ofirsegal99@gmail.com',
            password:'1234'
        }

        const salt = await genSalt(10);
        const _hashedPassword = await hash(user2.password, salt);
        console.log(user2)
        console.log(_hashedPassword)
        const passwordCorrect = await compare(
          credentials?.password || '',
        //   user.password
        _hashedPassword
        );

        console.log({ passwordCorrect });

        if (passwordCorrect) {
          return {
            // id: user.id,
            // email: user.email,
            id: 'user.id',
            email: user2.email,
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };