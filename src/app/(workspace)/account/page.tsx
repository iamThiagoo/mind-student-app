"use client";
import Link from "next/link";
import { ContentLayout } from "@/components/app/panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Check, Clock, Target, Trash, Trash2Icon, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AccountPage() {
  return (
    <ContentLayout title="Workspace">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/workspace">Workspace</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Minha Conta</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8 mx-auto">
        <h1 className="text-2xl font-bold mb-6">Minha Conta</h1>
        
        {/* Add the new form section before the statistics cards */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
          <form className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Estudante" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value="student@example.com" disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Default Language</Label>
              <Select defaultValue="pt-BR">
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="destructive">
                <Trash2Icon />
                Excluir Conta
              </Button>
              
              <Button type="submit">
                <Check />
                Salvar Alterações
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </ContentLayout>
  );
}
