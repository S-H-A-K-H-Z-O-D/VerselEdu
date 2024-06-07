export interface CoursesModalProps {
  setIsClicked: (isClicked: boolean) => void
}

export interface ProgressCardProps {
  img?: any
  title?: string
  video?: string
  test?: string
  progress?: number
  play?: string
}

export interface CardProps {
  img?: any
  title?: string
  video?: string
  test?: string
  price?: string
  neww?: boolean
}

export interface VideoPlayerProps {
  url: string
  imgUrl?: string
  className?: string
}

export interface ImageData {
  label: string
  Component: React.FC<React.SVGProps<SVGSVGElement>>
}

export interface PaymentType {
  id: number
  title: string
  type: string
  img?: ImageData[]
}

export interface NavbarProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}
