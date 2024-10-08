"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const MainNav = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/${params.storeId}/settings`,
            label: "Settings",
            active: pathname == `/${params.storeId}/settings`,
        },
    ];
    return (
        <nav
            className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className
            )}
        >
            {routes.map((route) => {
                return (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "text-sm  transition-colors hover:text-primary",
                            route.active
                                ? "text-black font-semibold dark:text-white"
                                : "font-medium text-muted-background"
                        )}
                    >
                        {route.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export { MainNav };
