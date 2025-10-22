import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

type ModalType = {
  name: string
  img: string
  location: string | null
  alt: string
  width: number
  height: number
  open: boolean
  onOpenChange?: (open: boolean) => void
}

export function Modal({
  name,
  img,
  location,
  alt,
  width,
  height,
  open,
  onOpenChange,
}: ModalType) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-w-[95vw] sm:max-w-[500px] md:max-w-[700px]
          w-full p-0 rounded-2xl overflow-hidden
        "
      >
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>

        <div className="flex flex-col w-full">
          {/* Image container */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[3/2]">
            <Image
              src={img}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 700px"
              priority
            />
          </div>

          {/* Info */}
          <div className="p-4 sm:p-5 bg-white">
            <p className="text-lg sm:text-xl font-semibold text-blue-950">{name}</p>
            {location && (
              <p className="text-sm sm:text-base text-gray-500 mt-1">{location}</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
