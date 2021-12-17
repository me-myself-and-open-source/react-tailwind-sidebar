import { useMediaQuery } from "react-responsive"

import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../tailwind.config.js"

const fullConfig = resolveConfig(tailwindConfig)

export default function useBreakpoint(breakpoin) {
    return useMediaQuery({
        query: `(min-width: ${fullConfig.theme.screens[breakpoin]})`
    })
}