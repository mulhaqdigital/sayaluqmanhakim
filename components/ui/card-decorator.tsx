import type { ReactNode } from 'react'

export const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className='relative mx-auto h-36 w-36'>
    <div
      aria-hidden
      className='absolute inset-0 bg-[radial-gradient(circle,#00000022_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#ffffff22_1px,transparent_1px)] bg-[length:16px_16px] opacity-30'
    />
    <div aria-hidden className='absolute inset-0 bg-radial-[at_50%_50%] from-transparent to-card' />
    <div className='bg-background absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-md border shadow-xs'>
      {children}
    </div>
  </div>
)
