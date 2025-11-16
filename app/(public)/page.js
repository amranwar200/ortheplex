"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  
  return (
    <main className="flex flex-col items-center justify-center pt-32">
      <h1 className="text-3xl font-bold text-center">
        Welcome to the Practical Assignment App!
      </h1>
      <div className="flex mt-8">
        <Button onClick={() => router.push("/register")} className="mt-4">Get Started</Button>
        {/* onClick mailto */}
        <Button onClick={() => window.location.href = "mailto:sales@example.com"} className="mt-4 ml-4" variant="outline" >Contact sale</Button>
      </div>
    </main>
  );
}