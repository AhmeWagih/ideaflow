import { toPng } from "html-to-image";
import React from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Download, Share2 } from "lucide-react";

const ShareMindMap = () => {
  const exportAsImage = () => {
    const reactFlowNode = document.querySelector(".react-flow");
    if (!reactFlowNode) return;

    toPng(reactFlowNode as HTMLElement, {
      backgroundColor: "#fff",
      quality: 1,
      pixelRatio: 2,
      filter: (node) => {
        return (
          !node.classList?.contains("react-flow__minimap") &&
          !node.classList?.contains("react-flow__controls")
        );
      },
    })
      .then((dataUrl: string) => {
        const link = document.createElement("a");
        link.download = `mindmap-${new Date().toISOString().slice(0, 10)}.png`;
        link.href = dataUrl;
        link.click();

        toast("Your mind map has been exported as an image");
      })
      .catch((error: unknown) => {
        console.error("Error exporting image:", error);
        toast("There was an error exporting your mind map");
      });
  };
  return (
    <div className="fixed bottom-4 right-4 z-10 flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* <DropdownMenuItem onClick={handleShareClick}>
            <Share2 className="mr-2 h-4 w-4" />
            Share mind map
          </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={exportAsImage}>
            <Download className="mr-2 h-4 w-4" />
            Export as image
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share mind map</DialogTitle>
            <DialogDescription>
              Share your mind map with others or make it public for the
              community.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2 py-4">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input id="link" value={shareLink} readOnly className="w-full" />
            </div>
            <Button
              size="sm"
              type="button"
              variant="outline"
              onClick={copyToClipboard}
              className="px-3"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                {isPublic ? (
                  <Globe className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="text-sm font-medium">
                  {isPublic ? "Public" : "Private"} sharing
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {isPublic
                  ? "Anyone can discover and view your mind map"
                  : "Only people with the link can view your mind map"}
              </p>
            </div>
            <Switch
              checked={isPublic}
              onCheckedChange={setIsPublic}
              id="visibility-mode"
            />
          </div>
          <DialogFooter className="sm:justify-between">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              {isPublic ? "Share publicly" : "Share privately"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default ShareMindMap;
