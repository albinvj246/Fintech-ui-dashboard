# Indel Money — Auction Management Dashboard

An enterprise-grade financial dashboard built for gold loan auction management, overdue account tracking, and recovery monitoring. This application provides a modern, high-performance interface for financial institutions to manage their auction workflows with real-time data visualization.

## 🚀 Tech Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org/) (App Router)
- **Library**: [React 19.2.4](https://react.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) (Modern, high-performance styling)
- **Charts**: [Recharts 3.8.1](https://recharts.org/) (Professional data visualization)
- **Icons**: Custom SVG Icons for precision and performance
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## 🛠️ Key Features

- **Dynamic Sidebar**: Collapsible navigation with vibe-focused micro-animations and status indicators.
- **Financial Metrics**: Real-time classification of accounts (NPA, Auctionable, etc.) with visual cards.
- **Recovery Analytics**: High-density bar charts showing historical recovery performance vs. targets.
- **Auction Schedules**: Upcoming auction tracking with status badges (Today, Tomorrow, etc.).
- **Live Gold Rates**: Real-time market data monitoring for 22K and 24K gold.
- **Enterprise Ledger**: Data-dense table for managing comprehensive auction lists with advanced filtering.
- **Quick Actions**: Streamlined access to core functions like adding assets or scheduling auctions.

## 🔄 Project Workflow

### 1. Account Classification
The dashboard categorizes financial accounts into actionable segments such as **NPA (Non-Performing Assets)**, **Auctionable**, and **Overdue**. This allows managers to prioritize their daily operations based on urgency.

### 2. Market Monitoring
The integration of live **Gold Rates** ensures that auction valuations are always aligned with current market conditions, providing essential context for financial decisions.

### 3. Performance Tracking
The **Auction Recovery Chart** provides a visual representation of historical recovery data, allowing stakeholders to identify trends, seasonal variations, and performance gaps at a glance.

### 4. Operations Management
- **Auction Schedules**: Tracks upcoming auctions to ensure logistical readiness.
- **Graded Assets**: Monitors the status of assets currently in the grading phase.
- **Data Ledger**: Centralized management of all auction records with specific details like Loan ID, Asset Value, and Status.

## 🏃 Getting Started

### Prerequisites
- **Node.js**: version 20.x or later (recommended for Tailwind v4)
- **Package Manager**: npm, yarn, or pnpm

### Core Dependencies
To run this project, the following key libraries are utilized:
- **Next.js 16.2.4**: The React framework for the dashboard architecture.
- **Tailwind CSS 4.0**: For modern, high-performance styling using the new `@theme` engine.
- **Recharts 3.8.1**: Used for the Auction Recovery Chart visualization.
- **PostCSS**: Required for Tailwind v4 integration with Next.js.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/albinvj246/Fintech-ui-dashboard.git
   ```
2. **Install all dependencies**:
   ```bash
   npm install
   ```
   *This will automatically install Next.js, React, Tailwind CSS v4, and Recharts as defined in the package.json.*

3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure
- `/app`: Contains all Next.js 16 pages and layouts.
- `/app/components`: Modular React components for the dashboard.
- `/app/globals.css`: Tailwind CSS 4 configuration and global styles.
- `/public`: Static assets (currently minimal as all icons are inline SVG).
