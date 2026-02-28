import React, { JSX } from 'react'
import { Button } from "@/components/ui/button";

export interface PaginationProps{
    nextButtonOnClick: () => void;
    prevButtonOnClick: () => void;
}
export const Pagination: React.FC<PaginationProps> = (props:PaginationProps) : JSX.Element => {

  return (
    <div className="flex flex-col">
      

      <div className="mt-6 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            onClick={props.prevButtonOnClick}
            // disabled={!prevURL}
          >
            Prev
          </Button>
          <Button onClick={props.nextButtonOnClick} 
        //   disabled={!nextURL}
          >
            Next
          </Button>
      </div>
    </div>
  )
}
