import { ReactNode } from "react"
import clsx from "clsx"

type LinkProps = {
    children: ReactNode
    className?:  string
    onClick?:  () => void
}

export const Link = ({ className, children }: LinkProps) => {
    return (
        <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className={clsx(className, `rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700`)}>
            {children}
        </button>
    )
}



