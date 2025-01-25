/* import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        CredentialsProvider({
            clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
            clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
            tenantId: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
            scope: process.env.AUTH_MICROSOFT_ENTRA_ID_SCOPE,
        }),
    ],
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session(session, token) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
});
 */