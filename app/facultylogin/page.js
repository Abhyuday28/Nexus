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
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { facultyLoginSchema } from "@/schema/zodSchema";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import LoginSignupNav from "@/components/loginSignupNav";
import { useState } from "react";

export default function FacultyLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(facultyLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Login Successfully.");
        window.location.href = "/academic";
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <Card className="w-full max-w-md -mt-16 shadow-2xl p-6">
        <CardHeader>
          <CardTitle className="flex flex-col gap-2 text-base">
            Login to Your
            <span className="flex flex-col items-center gap-2">
              <span>
                <Image src={"/nexus.svg"} width={96} height={96} alt="logo" />
              </span>
              Account
            </span>
          </CardTitle>
          {/* <CardDescription>Login to acess</CardDescription> */}
          <LoginSignupNav />
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="gap-2 flex flex-col"
              autoComplete="off"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="abcd12@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Nexus registered e-mail</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="*********"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter your Password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href={"#"} className="text-blue-400 ml-auto text-xs">
                forgot password?
              </Link>
              <Button disabled={loading} type="submit" className="mx-auto">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-xs flex justify-end gap-1">
          <p>Don't have an accout?</p>
          <Link href={"/signup"} className="text-blue-400">
            Create an Account
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
