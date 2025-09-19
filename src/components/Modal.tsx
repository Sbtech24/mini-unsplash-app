import Image from "next/image"
import {
  Dialog,

  DialogContent,
  DialogTitle,

} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"


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
      <div className="max-w-fit">
      
        <DialogContent className="max-w-fit w-max px-0 pt-0">
          <VisuallyHidden>
           <DialogTitle/>

          </VisuallyHidden>
          <div className="w-full">
            <div className="w-[400px] h-[300px]">
            <Image src={img} alt={alt} width={width} height={height} className="w-full max-h-full"/>
            </div>

            <div className="p-4">
            <p className="text-xl font-medium text-blue-950">{name}</p>
            <p className="text-sm text-gray-500">{location}</p>
            </div>
        
          </div>
        
        </DialogContent>
      </div>
    </Dialog>
  )
}
