import { authOptions } from "../lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Contact from "../components/contact";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      redirect("/api/auth/signin")
    );
  }

  return <Contact />;
}
