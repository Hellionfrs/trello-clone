import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const NavBar = () => {
  return (
    <header className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button>Login</Button>
          <Button>Get Taskify for free</Button>
        </div>
      </div>
    </header>
  );
};