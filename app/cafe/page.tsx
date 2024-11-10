/* flex = 유연함, justify = 가로 정렬, item = */
"use client";

import { MessageCircleHeartIcon} from "lucide-react"
import { MessageCircleMoreIcon} from "lucide-react"

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-[100dvh] bg-gray-300">
      <div className="max-w-sm w-full h-[100dvh] bg-white">
        <div className="flex justify-between bg-gray-300 px-3">
          <span className="font-bold"> Instagram </span>
          <div className="flex items-center gap-2">
            <button onClick = {() => like()}>
              <MessageCircleHeartIcon className="w-6 h-6"/>
            </button>
            <button>
              <MessageCircleMoreIcon className="w-6 h-6"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function like(){
  // console.log("like button is pushed")
  prompt("LIKE LIKE!!!");
  // confirm("yes or no!");
}