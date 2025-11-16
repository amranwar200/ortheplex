"use client"

import Card from "@/components/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { login } from '@/app/actions/auth'
import { useActionState } from 'react'

export default function LoginPage() {
    const [state, action, pending] = useActionState(login, undefined)

    return (
        <Card>
            <h1 className="text-center">Login Access</h1>
            <form className="flex flex-col space-y-2 mt-6" action={action}>
                <label htmlFor="username">Username</label>
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    autoComplete="username"
                    required
                />
                <label htmlFor="password">Password</label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    autoComplete="current-password"
                    required
                />
                {state?.errors?._form && (
                    <p className="text-red-600 text-sm">{state.errors._form[0]}</p>
                )}
                <hr className="my-4" />
                <Button
                    disabled={pending}
                    type="submit">
                    {pending ? "Logging in..." : "Login"}
                </Button>
            </form>
            <Link href="/register" className="mt-4 text-sm text-blue-600 hover:underline flex items-center justify-center">
                Don't have an account? Register
            </Link>
        </Card>
    );
}