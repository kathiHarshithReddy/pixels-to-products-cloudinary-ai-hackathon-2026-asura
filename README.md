# AsuraGuard

**AI-powered media moderation & auto-organization pipeline**

Built for the **Pixels to Products — Cloudinary AI Hackathon 2026**  
**Track**: PS-01 · AI Media Pipelines  
**Team**: Asura

---

## Problem

User-generated content platforms struggle with moderating and organizing large volumes of uploaded images. Manual review is slow, expensive, and inconsistent. There is a clear need for an automated system that can instantly analyze, optimize, and organize media at scale.

## Solution

**AsuraGuard** is an AI-powered media pipeline built on Cloudinary. Users can upload images, and Cloudinary automatically optimizes, crops, and organizes them into a clean, searchable gallery.

### Key Features

- Drag & drop / multi-image upload
- Automatic image optimization (`f_auto`, `q_auto`)
- Smart content-aware cropping (`gravity: auto`)
- Clean and responsive media dashboard
- Real-time media management powered by Cloudinary

---

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Media Platform**: Cloudinary + next-cloudinary
- **Deployment**: Vercel

---

## How Cloudinary is Used

Cloudinary is the core of this project:

- **Upload API** – Handles media ingestion via unsigned upload preset
- **Image Transformations** – Automatic format & quality optimization + content-aware cropping
- **Delivery** – Optimized image delivery using `f_auto` and `q_auto`
- **Media Management** – Stores and organizes all uploaded assets

This project uses Cloudinary as an **active part of the product**, not just for static storage.

---

## Live Demo

🔗 [https://asuraguard.vercel.app](https://asuraguard.vercel.app)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kathiHarshithReddy/pixels-to-products-cloudinary-ai-hackathon-2026-asura.git
cd pixels-to-products-cloudinary-ai-hackathon-2026-asura
