import { ComponentPropsWithoutRef } from 'react'

export function BrandNormal(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={70}
            height={45}
            viewBox="0 0 70 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g strokeWidth={2.45216}>
                <path
                    stroke="url(#paint0_linear_1063_0)"
                    d="M67.858 14.041l-.178 27.26c-.009 1.328-.73 1.732-1.755 1.725l-5.738-.037c-1.23-.008-1.74-.42-1.731-1.748l.25-38.185c.005-.919-3.566-.343-8.706 0-9.74.651-13.763 3.432-13.798 8.838l-.19 29.2c-.008 1.124.501 1.74 1.73 1.748l5.637.037c1.23.008 1.746-.602 1.753-1.725l.176-26.953c.02-3.054 3.37-4.223 6.692-4.201h9c6.858 0 6.873 1.796 6.858 4.042h0zM2.075 13.618l.178 27.26c.008 1.328.729 1.731 1.754 1.725l5.739-.038c1.23-.008 1.74-.42 1.73-1.747l-.249-38.185c-.006-.92 3.565-.344 8.705 0 9.74.65 13.763 3.432 13.798 8.838l.191 29.2c.007 1.123-.502 1.74-1.73 1.747l-5.638.037c-1.23.008-1.745-.601-1.753-1.724l-.176-26.954c-.02-3.054-3.369-4.222-6.692-4.2h-9c-6.857 0-6.872 1.796-6.857 4.042v-.001z"
                />
            </g>

            <defs>
                <linearGradient
                    id="paint0_linear_1063_0"
                    x1={51.9086}
                    y1={55.9143}
                    x2={80.43}
                    y2={32.1613}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#BC2C38" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1063_0"
                    x1={34.76}
                    y1={14.9173}
                    x2={6.23866}
                    y2={38.6702}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF5B4C" />
                    <stop offset={1} stopColor="#BC2C38" />
                </linearGradient>
            </defs>
        </svg>
    )
}
