import { FacebookIcon, GoogleIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const providers = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Google", icon: GoogleIcon },
];

export default function SocialLogin() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4 text-base leading-[1.6] text-card-foreground/60">
        <Separator className="flex-1" />
        or
        <Separator className="flex-1" />
      </div>

      <div className="flex justify-center gap-4">
        {providers.map(({ name, icon: Icon }) => (
          // TODO: start the provider's OAuth flow
          <Button
            key={name}
            type="button"
            variant="outline"
            aria-label={`Continue with ${name}`}
            className="size-17.5 rounded-2xl border-border bg-card text-card-foreground"
          >
            <Icon aria-hidden="true" className="size-7!" />
          </Button>
        ))}
      </div>
    </div>
  );
}
