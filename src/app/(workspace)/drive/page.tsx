"use client";
import Link from "next/link";
import { ContentLayout } from "@/components/app/panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Download,
  Eye,
  FileUp,
  ImagePlus,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCallback, useState } from "react";
import { useImageUpload } from "@/hooks/use-image-upload";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function DrivePage() {
  const {
    previewUrl,
    fileName,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  } = useImageUpload({
    onUpload: (url) => console.log("Uploaded image URL:", url),
  });

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith("image/")) {
        const fakeEvent = {
          target: {
            files: [file],
          },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        handleFileChange(fakeEvent);
      }
    },
    [handleFileChange]
  );

  const storageUsed = 75; // GB
  const storageLimit = 100; // GB
  const usagePercentage = (storageUsed / storageLimit) * 100;

  const files = [
    { name: "document.pdf", size: "2.5 MB", date: "2024-01-20" },
    { name: "image.jpg", size: "1.8 MB", date: "2024-01-19" },
    { name: "spreadsheet.xlsx", size: "3.2 MB", date: "2024-01-18" },
  ];

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
            <BreadcrumbPage>Upload de Arquivos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8 mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Upload de Arquivos</h1>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-full space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Image Upload</h3>
                  <p className="text-sm text-muted-foreground">
                    Supported formats: JPG, PNG, GIF
                  </p>
                </div>

                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />

                {!previewUrl ? (
                  <div
                    onClick={handleThumbnailClick}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={cn(
                      "flex h-64 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted",
                      isDragging && "border-primary/50 bg-primary/5"
                    )}
                  >
                    <div className="rounded-full bg-background p-3 shadow-sm">
                      <ImagePlus className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Click to select</p>
                      <p className="text-xs text-muted-foreground">
                        or drag and drop file here
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="group relative h-64 overflow-hidden rounded-lg border">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={handleThumbnailClick}
                          className="h-9 w-9 p-0"
                        >
                          <Upload className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={handleRemove}
                          className="h-9 w-9 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {fileName && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="truncate">{fileName}</span>
                        <button
                          onClick={handleRemove}
                          className="ml-auto rounded-full p-1 hover:bg-muted"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-8 flex justify-end w-full">
            <div className="w-2/6 flex flex-col justify-end">
              <div className="flex justify-between text-sm">
                <span>
                  Storage Used: {storageUsed}GB of {storageLimit}GB
                </span>
                <span>{usagePercentage.toFixed(1)}%</span>
              </div>
              <Progress value={usagePercentage} className="h-2" />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file) => (
                <TableRow key={file.name}>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>{file.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4 !text-green-600" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4 !text-sky-600" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </ContentLayout>
  );
}
