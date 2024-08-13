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
import { Verified } from "lucide-react";
import { emailVerificationSchema } from "@/schema/zodSchema";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyOtp } from "@/action/auth";

export default function VerifyEmail() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const form = useForm({
    resolver: zodResolver(emailVerificationSchema),
    defaultValues: {
      otp: "",
    },
  });

  async function onSubmit(values) {
    try {
      const token = params.get("token");
      const otp = values.otp;
      const res = await verifyOtp({ token, otp });
      toast[res.type](res.message);
      if (res.success) {
        router.replace("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <Card className="w-full max-w-md -mt-16 shadow-2xl p-6">
        <CardHeader className="pt-0">
          <CardTitle className="flex flex-col gap-2 text-base text-center">
            Verify your Email
          </CardTitle>
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
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>One-Time Password</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      Please enter the one-time password sent to your email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={loading} type="submit" className="mx-auto">
                <Verified className="w-4 h-4 mr-2" />
                Verify
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
