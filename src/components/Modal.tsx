import Image from "next/image"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { UnsplashPhoto } from "@/types"

type ModalType = {
    name:string,
    img:string,
    location:string |null,
    alt:string,
    width:number,
    height:number,
    open:boolean,
    onOpenChange?: (open: boolean) => void

}

export function Modal({name,img,location,alt,width,height,open,onOpenChange}:ModalType) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div>
      
        <DialogContent className="max-w-fit">
            <DialogTitle/>
          <div className="w-full">
            <div className="w-[400px] h-[300px]">
            <Image src={img} alt={alt} width={width} height={height} className="w-full max-h-full"/>
            </div>

            <div>
            <p>{name}</p>
            <p>{location}</p>
            </div>
        
          </div>
        
        </DialogContent>
      </div>
    </Dialog>
  )
}
