import React from "react";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

const StarDiagramButton = () => {
  return (
    <div className="flex flex-row">
      <Button className="p-6 text-lg rounded-r-none" variant="outline">
        <Star /> <span>Star</span>
      </Button>
      <div className="p-2 border flex items-center rounded-r-md">
        <p>60</p>
      </div>
    </div>
  );
};

export default StarDiagramButton;
