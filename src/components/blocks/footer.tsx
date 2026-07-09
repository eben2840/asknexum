import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-14 pt-28 pb-28 lg:pt-32">
      <div className="container space-y-3 text-center mb-10">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Join the ASKNEXUM wait list
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Executive advisory for cybersecurity sophistication, strategic growth,
          and institutional trust.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="/contact" target="_self">
              Join Wait List
            </a>
          </Button>
        </div>
      </div>

      {/* <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
       
        <p>Copyright © {new Date().getFullYear()}. ASKNEXUM advisory.</p>
      </nav> */}
    </footer>
  );
}
