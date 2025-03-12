"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Zap } from "lucide-react";

export default function MindMapGenerator() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  //   const handleGenerate = async (e: React.FormEvent) => {
  //     e.preventDefault()
  //     if (!prompt.trim()) return

  //     setIsGenerating(true)
  //     // Here you would integrate with an AI service to generate the mind map
  //     // For now, we'll just simulate a delay
  //     setTimeout(() => {
  //       setIsGenerating(false)
  //       // Handle the response here
  //     }, 1500)
  //   }

  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Transform Your Ideas into{" "}
        <span className="text-purple-600">Visual Mind Maps</span> with AI
      </h1>

      <Card className="shadow-lg">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-2">Mind Map Generation</h2>
          <p className="text-gray-600 mb-6">
            Enter your prompt below and let our AI help you generate amazing
            results.
          </p>

          <form>
            <Textarea
              placeholder="Enter your prompt here..."
              className="min-h-[120px] mb-6 text-base focus-visible:ring-0"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6"
              disabled={isGenerating}
            >
              <Zap className="mr-2 h-5 w-5" />
              {isGenerating ? "Generating..." : "Generate Response"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
