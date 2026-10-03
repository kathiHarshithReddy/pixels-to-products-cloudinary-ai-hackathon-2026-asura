# AsuraGuard

**AI-powered media moderation & auto-organization pipeline**

Built for the **Pixels to Products — Cloudinary AI Hackathon 2026** (Track 1: AI Media Pipelines)

---

## Problem

User-generated content platforms face major challenges in moderating and organizing large volumes of uploaded images. Manual review is slow, expensive, and inconsistent. There is a clear need for an automated system that can instantly analyze, tag, optimize, and organize media at scale.

## Solution

**AsuraGuard** is an AI-powered media pipeline that uses Cloudinary to automatically process uploaded images. When a user uploads media, Cloudinary handles optimization, delivery, and organization, creating a clean and searchable gallery.

### Key Features

- Drag & drop image upload
- Automatic image optimization (`f_auto`, `q_auto`)
- Smart content-aware cropping
- Clean and responsive dashboard
- Real-time media management using Cloudinary

---

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Media Platform**: Cloudinary
- **Deployment**: Vercel

---

## How Cloudinary is Used

Cloudinary is the core of this project:

- **Upload API** – Handles media ingestion
- **Image Transformations** – Automatic optimization and smart cropping
- **Delivery** – Optimized image delivery with `f_auto` and `q_auto`
- **Media Management** – Stores and organizes all uploaded assets

This project uses Cloudinary as an active part of the product, not just for static storage.

---

## Live Demo

🔗 [https://asuraguard.vercel.app](https://asuraguard.vercel.app)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HackIndiaXYZ/pixels-to-products-cloudinary-ai-hackathon-2026-asura.git
cd pixels-to-products-cloudinary-ai-hackathon-2026-asura
