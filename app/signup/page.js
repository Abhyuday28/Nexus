"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogIn, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signupSchema } from "@/schema/zodSchema";
import { signup } from "@/action/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginSignupNav from "@/components/loginSignupNav";

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      roll: "",
      email: "",
      registration: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const res = await signup(values);
      toast[res.type](res.message);
      if (res.success) {
        form.reset();
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-start md:items-center justify-center min-h-[calc(100vh-64px)]">
      <Card className="w-full max-w-lg mt-0 shadow-2xl p-6 max-h-[calc(100vh-64px)] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex flex-col gap-2 text-base">
            Create Your
            <span className="flex flex-col items-center gap-2">
              <span>
                <Image src={"/nexus.svg"} width={96} height={96} alt="logo" />
              </span>
              Account
            </span>
          </CardTitle>

          <LoginSignupNav />
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols- md:grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Your name"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Your First name.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name (optional)</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="" {...field} />
                      </FormControl>
                      <FormDescription>Last Name</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="roll"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roll Number</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        disabled={loading}
                        placeholder="20301"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Your College Roll number.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="registration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registration Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={loading}
                        placeholder="20105113001"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your College Registration no.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        disabled={loading}
                        placeholder="asdfg@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Your College Email.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          disabled={loading}
                          placeholder="*********"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Create your Password</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          disabled={loading}
                          placeholder="*********"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Re-enter your Password</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button disabled={loading} type="submit" className="mx-auto">
                <PlusCircle className="w-4 h-4 mr-2" />
                Create account
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-xs flex justify-end gap-1">
          <p>Already have an account?</p>
          <Link href={"/login"} className="text-blue-400">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
