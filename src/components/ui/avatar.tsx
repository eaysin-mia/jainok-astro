import * as React from 'react'

import { cn } from '@/lib/utils'

type AvatarComponentProps = {
  src?: string
  alt?: string
  fallback: string
  className?: string
}

function Avatar({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
    >
      {children}
    </div>
  )
}

function AvatarImage({
  className,
  src,
  alt,
  onError,
}: {
  className?: string
  src?: string
  alt?: string
  onError?: () => void
}) {
  if (!src) return null

  return (
    <img
      data-slot="avatar-image"
      src={src}
      alt={alt}
      className={cn('aspect-square size-full object-cover', className)}
      onError={onError}
    />
  )
}

function AvatarFallback({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className,
      )}
    >
      {children}
    </div>
  )
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({
  src,
  alt,
  fallback,
  className,
}) => {
  const [imageFailed, setImageFailed] = React.useState(false)
  const showImage = !!src && !imageFailed

  return (
    <Avatar className={className}>
      {showImage ? (
        <AvatarImage src={src} alt={alt} onError={() => setImageFailed(true)} />
      ) : (
        <AvatarFallback>{fallback}</AvatarFallback>
      )}
    </Avatar>
  )
}

export default AvatarComponent
export { Avatar, AvatarImage, AvatarFallback }
