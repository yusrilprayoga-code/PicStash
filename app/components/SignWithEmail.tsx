"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInEmail () {
    const [email, setEmail] = useState<null | string>(null);

    async function signWithEmail() {
        const signInResult = await signIn("nodemailer", {
            email: email,
            callbackUrl: `${window.location.origin}`,
        });

        return signInResult;
    }


    return (
        <form action={signWithEmail}>
            <div className="flex flex-col gap-y-2">
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="name@example.com" />
            </div>
            <Button type="submit" className="mt-4 w-full">Sign in</Button>
        </form>
    )
}