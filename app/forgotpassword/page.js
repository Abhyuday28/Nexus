import { CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <Card className="w-full max-w-md -mt-16 shadow-2xl p-6">
        <CardHeader>
          <CardTitle className="flex flex-col gap-2 text-base">
            Reset your
            <span className="flex flex-col items-center gap-2">
              <span>
                <Image src={"/nexus.svg"} width={96} height={96} alt="logo" />
              </span>
              Password
            </span>
          </CardTitle>
          {/* <CardDescription>Login to acess</CardDescription> */}
        </CardHeader>
        {/* <LoginSignupNav /> */}
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col"
              autoComplete="off"
            >
              <FormField
                control={form.control}
                name="roll"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Roll Number</FormLabel> */}
                    {/* <FormControl>
                      <Input placeholder="20301" {...field} />
                    </FormControl> */}
                    {/* <FormDescription>Your College Roll number.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="*********"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter your Password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* <Link href={"#"} className="text-blue-400 ml-auto text-xs">
                forgot password?
              </Link> */}

              {/* disabled={loading} */}
              <Button type="submit" className="mx-auto">
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
};

export default ForgotPassword;
