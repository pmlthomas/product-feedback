import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId:
                "968635097812-svhnuvr3tsohmt0rqh89prtbv72mmakv.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
});
