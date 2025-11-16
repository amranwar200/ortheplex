import { cn } from "@/lib/utils";

export const Card = ({children, className}) => {
    return (
        <div className={cn("p-3 sm:p-4 border rounded shadow", className)}>
            {children}
        </div>
    );
}