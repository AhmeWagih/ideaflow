import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiModels } from "@/constants";
import { TAiModel } from "@/constants/types";
import { ChevronDownIcon, CopyPlusIcon } from "lucide-react";

interface AiDropdownProps {
  selectedModel: TAiModel;
  onModelSelect: (model: TAiModel) => void;
}

export default function AiDropdown({
  selectedModel,
  onModelSelect,
}: AiDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="py-6" asChild>
        <Button variant="outline">
          {selectedModel.name || "Choose The Model"}
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {AiModels.map((model: TAiModel) => {
          return (
            <DropdownMenuItem
              key={model.name}
              onClick={() => onModelSelect(model)}
            >
              <CopyPlusIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              {model.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
