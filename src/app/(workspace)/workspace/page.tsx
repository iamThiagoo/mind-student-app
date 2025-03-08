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
import { Brain, Clock, Target, Trophy } from "lucide-react";

export default function WorkspacePage() {
  return (
    <ContentLayout title="Workspace">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Workspace</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8 mx-auto">
        <h1 className="text-2xl font-bold mb-6">Bem-vindo de volta, Estudante!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Tempo Total de Estudo</p>
                <h3 className="text-2xl font-bold">12h 30min</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Brain className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Matérias Estudadas</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Target className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Meta Diária</p>
                <h3 className="text-2xl font-bold">75%</h3>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Conquistas</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Progresso por Matéria</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Matemática</span>
                  <span className="text-sm">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Português</span>
                  <span className="text-sm">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">História</span>
                  <span className="text-sm">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Próximas Atividades</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Revisão de Geometria</p>
                  <p className="text-sm text-muted-foreground">Matemática</p>
                </div>
                <span className="text-sm text-blue-500">Hoje</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Exercícios de Interpretação</p>
                  <p className="text-sm text-muted-foreground">Português</p>
                </div>
                <span className="text-sm text-blue-500">Amanhã</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Quiz de História Antiga</p>
                  <p className="text-sm text-muted-foreground">História</p>
                </div>
                <span className="text-sm text-blue-500">Em 2 dias</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ContentLayout>
  );
}
