import { useState } from 'react'

function resolveImagePath(path) {
  if (!path) return ''
  if (/^(https?:|data:|blob:)/i.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}

function ImageSlot({ variant = 'hero', label, file, alt, src, photoLabel }) {
  const [failed, setFailed] = useState(false)
  const imageUrl = resolveImagePath(src || file)
  const hasImage = Boolean(imageUrl) && !failed

  return (
    <div
      className={'image-slot image-slot-' + variant + (hasImage ? ' image-slot-has-photo' : '')}
      role={hasImage ? undefined : 'img'}
      aria-label={hasImage ? undefined : alt}
      data-image-file={file}
    >
      {hasImage ? (
        <>
          <img
            className="image-slot-photo"
            src={imageUrl}
            alt={alt}
            loading={variant.startsWith('hero') ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setFailed(true)}
          />
        </>
      ) : (
        <>
          <div className="image-slot-art" aria-hidden="true">
            <span className="slot-sun" />
            <span className="slot-hill slot-hill-back" />
            <span className="slot-hill slot-hill-front" />
            <span className="slot-panel"><i /><i /><i /><i /><i /><i /></span>
          </div>
          <span className="image-slot-tag">IMAGE PLACEMENT</span>
          <div className="image-slot-caption">
            <span>{label}</span>
            <code>{file}</code>
          </div>
        </>
      )}
    </div>
  )
}

export default ImageSlot
