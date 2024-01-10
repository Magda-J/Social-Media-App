"use client";
import { CheckCircle2, X, ArrowBigDown } from "lucide-react"
import { useState } from "react"
const MediaCard = ({
    title,
    username,
    review,
    img,
    description
}) => {
    const [isViewingOpinion, setIsViewingOpinion] = useState(false)
  return (
    <div className="flex flex-col w-full h-screen items-center mx-auto">
    <div className="w-full h-1/2 flex-col rounded-lg overflow-hidden ">
        <img src={img} alt={description} className="h-full object-cover"/>
        
    </div>
    <div className=" bottom-0  top-1">
       
        <p className="text-center py-4 bg-gray-200" onClick={() => setIsViewingOpinion(!isViewingOpinion)}>Click here to view review</p>


        </div>
            <ArrowBigDown
        className="absolute bottom-2 left-2 text-white"
        
    />
    
    {
            isViewingOpinion && <div>{review}</div>
        }
    </div>
  )
}
export default MediaCard