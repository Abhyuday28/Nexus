/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QFtefpMP5ZL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Link from "next/link";

export default function Component() {
  return (
    <>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/bgbanner.jpg"
              alt="Hero Background"
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center space-y-6 px-4 text-center text-primary-foreground">
            <div className="space-y-3 animate-fade-in-up">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Unleash Your Digital Potential
              </h1>
              <p className="text-lg md:text-xl">
                Discover innovative solutions to transform your business and
                drive success.
              </p>
            </div>
            <Link
              href="/signup"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 animate-fade-in-up"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </section>
      </ContainerScroll>
    </>
  );
}
