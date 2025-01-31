export type DialogProps = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onChildEvent?: (param: string) => void;
}