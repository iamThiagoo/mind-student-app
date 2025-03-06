import { DialogProps } from "@/components/@types/dialog";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

export function TermsDialog({ isOpen, onOpenChange } : DialogProps) {

  const t = useTranslations("terms");

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <h2 className="text-center font-bold text-2xl">{t('termsOfService')}</h2>
      </DialogContent>
    </Dialog>
  );
}