"use client";

import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

export default function Home() {
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            AsuraGuard
          </h1>
          <p className="text-zinc-400 mt-2 text-lg">
            AI-powered media moderation & auto-organization pipeline
          </p>
        </div>

        {/* Upload Button */}
        <CldUploadWidget
          uploadPreset="asuraguard_unsigned"
          onSuccess={(result: any) => {
            console.log("Upload result:", result.info);
            setUploadedImages((prev) => [result.info, ...prev]);
          }}
          options={{
            multiple: true,
            maxFiles: 10,
            sources: ["local", "url", "camera"],
            resourceType: "image",
          }}
        >
          {({ open }) => (
            <button
              onClick={() => open()}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-900/30"
            >
              + Upload Images
            </button>
          )}
        </CldUploadWidget>

        {/* Images Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uploadedImages.length === 0 && (
            <div className="col-span-full text-center py-20 text-zinc-500">
              No images uploaded yet. Click the button above to start.
            </div>
          )}

          {uploadedImages.map((img, index) => {
            const tags = img.tags || [];
            const format = img.format?.toUpperCase() || "IMAGE";
            const size = img.bytes
              ? (img.bytes / 1024).toFixed(1) + " KB"
              : "";

            return (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition"
              >
                {/* Optimized Image */}
                <div className="aspect-video bg-zinc-950 relative overflow-hidden">
                  <CldImage
                    src={img.public_id}
                    width={600}
                    height={400}
                    crop="fill"
                    gravity="auto"
                    quality="auto"
                    format="auto"
                    alt="Uploaded media"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{format}</span>
                    <span>{size}</span>
                  </div>

                  <p className="text-sm text-zinc-400 truncate font-mono">
                    {img.public_id}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.length > 0 ? (
                      tags.slice(0, 6).map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs bg-indigo-950/60 text-indigo-300 border border-indigo-900/50 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-zinc-600">
                        No tags available
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}