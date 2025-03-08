"use client";

import Link from "next/link";
import { LayoutGrid, LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

export function UserNav() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const supabase = createClient();
  const t = useTranslations();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data }: any = await supabase.auth.getUserIdentities();
      const fullname =
        data?.identities?.[0]?.identity_data?.first_name +
        " " +
        data?.identities?.[0]?.identity_data?.last_name;
      const email = data?.identities?.[0]?.identity_data?.email;
  
      setUser(data);
      setFullName(fullname);
      setEmail(email);
    };
    fetchUser();
  }, [supabase]);

  async function onSignOut () {
    try {
      const { error } = await supabase.auth.signOut()
      if (!!error) throw error
      router.push("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("errors.somethingWentWrong"),
        description: t("errors.pleaseTryAgain"),
      })
    } finally {
      return;
    }
  }

  function getInitialsFromName(fullname: string) {
    if (!fullname) return "";
    const nameArray = fullname.trim().split(/\s+/);
    return fullname[0] + nameArray[nameArray.length - 1][0];
  }

  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="relative h-8 w-8 rounded-full"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="#" alt="Avatar" />
                  <AvatarFallback className="bg-transparent">{ getInitialsFromName(fullName!) }</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">{ t("menu.profile") }</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{ fullName }</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="/workspace" className="flex items-center">
              <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
              { t("menu.workspace") }
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="/account" className="flex items-center">
              <User className="w-4 h-4 mr-3 text-muted-foreground" />
              { t("menu.myAccount") }
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer" onClick={() => {onSignOut()}}>
          <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
          { t("menu.signOut") }
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
