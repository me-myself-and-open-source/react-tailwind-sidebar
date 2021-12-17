import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../tailwind.config.js"
import { useMediaQuery } from "react-responsive"

const fullConfig = resolveConfig(tailwindConfig)

export default function useBreakpoint(breakpoin) {
    return useMediaQuery({
        query: `(min-width: ${fullConfig.theme.screens[breakpoin]})`
    })
}