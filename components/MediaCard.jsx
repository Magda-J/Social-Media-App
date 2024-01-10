"use client";
import { CheckCircle2, X, ArrowBigDown } from "lucide-react"
import { useState } from "react"
import Home from "@/app/page";

const MediaCard = ({
    title,
    username,
    review,
    img,
    description
}) => {
    const [isViewingOpinion, setIsViewingOpinion] = useState(false)


    
    const [likeCount, setLikeCount] = useState(0)
  
    // let totalLikes = likeCount - dislikeCount;
  
    const increaseLikes = () => {
      setLikeCount(likeCount + 1)
    }
  
    const decreaseLikes = () => {
      if (likeCount > 0) {
        setLikeCount(likeCount - 1)
      }
    }

  return (
    <div className="flex flex-col flex-center h-screen mt-10">


    
    <div className=" h-1/2 flex-col  overflow-hidden">
        <img src={img} alt={description} className="rounded-lg h-full object-cover mx-auto"/>
    
    </div>
    


    <div className="mx-auto px-10 text-2xl">
       
        <p className="text-center py-4 bg-gray-200 m-2 rounded-lg px-16" onClick={() => setIsViewingOpinion(!isViewingOpinion)}>View review</p>

        <div className="flex flex-row gap-4 item-center text-center"> 
        <button className="p-4 rounded-lg bg-gray-200 " onClick={increaseLikes}>Like!</button>
        <h2 className="text-center mt-6 text-2xl">{likeCount}</h2>
        <button className="p-4 rounded-lg bg-gray-200 " onClick={decreaseLikes}>UnLike!</button>
        </div>
        

        
        

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