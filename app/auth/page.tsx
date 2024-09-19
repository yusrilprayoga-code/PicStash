import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import SignInWithGoogle from "../components/SignInWithGoogle";
  import SignInEmail from "../components/SignWithEmail";
  
  export default function AuthRoute() {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Please Sign In</CardTitle>
            <CardDescription>
              To access this page, you need to sign in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <SignInEmail />
              <SignInWithGoogle />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  