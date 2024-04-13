'use client';

import { Button } from '@chakra-ui/react';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/action';

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div>
                    <label
                        className="mb-3 mt-5"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
                            id="email"
                            //type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label
                        className="mb-3 mt-5"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            minLength={6}
                        />
                    </div>
                </div>
                <LoginButton />
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>

            </div>
        </form >
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button type='submit' className="mt-4 w-full" aria-disabled={pending}>
            <a href="/posts">Log in</a>
        </Button>
    );
}
