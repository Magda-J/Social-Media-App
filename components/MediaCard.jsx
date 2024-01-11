"use client";
import { CheckCircle2, X, ArrowBigDown } from "lucide-react"
import { useState } from "react"
const MediaCard = ({
    username,
    title,
    review,
    img,
    description,
    rating
}) => {
    const [isViewingOpinion, setIsViewingOpinion] = useState(false)
    return (
      <div>
  <a href="#" className="group block">
    <img
      src={img}
      alt={description}
      className="h-[350px] w-full object-cover sm:h-[450px]"
    />
  
    <div className="mt-3 flex justify-between text-sm">
      <div>
      <p className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {'@'-username}
        </p>
        <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {title}
        </h3>
  
        <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
          {review}
        </p>
      </div>
  
      <p className="text-gray-900">{rating}</p>
    </div>
  </a>
      </div>
    )
}
export default MediaCard