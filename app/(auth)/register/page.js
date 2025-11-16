"use client"

import Card from "@/components/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { signup } from '@/app/actions/auth'
import { useActionState } from 'react'

export default function RegisterPage() {
    const [state, action, pending] = useActionState(signup, undefined)

    return (
        <Card>
            <h1 className="text-center">Register Account</h1>
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
                {state?.errors?.username && (
                    <p className="text-red-600 text-sm">{state.errors.username[0]}</p>
                )}
                <label htmlFor="password">Password</label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    autoComplete="new-password"
                    required
                />
                {state?.errors?.password && (
                    <div className="text-red-600 text-sm">
                        <p>Password must:</p>
                        <ul className="list-disc list-inside">
                            {state.errors.password.map((error, index) => (
                                <li key={index}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <hr className="my-4" />
                <Button
                    disabled={pending}
                    type="submit">
                    {pending ? "Registering..." : "Register"}
                </Button>
            </form>
            <Link href="/login" className="mt-4 text-sm text-blue-600 hover:underline flex items-center justify-center">
                Already have an account? Login
            </Link>
        </Card>
    );
}