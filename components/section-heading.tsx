import { Reveal } from './reveal'

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
