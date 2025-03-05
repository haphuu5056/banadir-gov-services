import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  separator?: React.ReactNode
}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  isCurrent?: boolean
}

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  asChild?: boolean
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, children, separator = <ChevronRight className="h-3 w-3" />, ...props }, ref) => {
    const items = React.Children.toArray(children)
    const itemsWithSeparators = items.map((item, index) => {
      if (index === items.length - 1) {
        return item
      }
      return (
        <React.Fragment key={index}>
          {item}
          <li className="mx-1 inline-flex items-center">{separator}</li>
        </React.Fragment>
      )
    })

    return (
      <nav ref={ref} aria-label="breadcrumb" className={cn("text-sm text-muted-foreground", className)} {...props}>
        <ol className="flex flex-wrap items-center">{itemsWithSeparators}</ol>
      </nav>
    )
  },
)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, children, isCurrent, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("inline-flex items-center", className)}
        aria-current={isCurrent ? "page" : undefined}
        {...props}
      >
        {children}
      </li>
    )
  },
)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, children, asChild, ...props }, ref) => {
    return asChild ? (
      <span ref={ref} className={cn("hover:text-foreground transition-colors", className)} {...props}>
        {children}
      </span>
    ) : (
      <Link {...props} href={props.href || "#"} className={cn("hover:text-foreground transition-colors", className)}>
        {children}
      </Link>
    )
  }
)
BreadcrumbLink.displayName = "BreadcrumbLink"

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink }

