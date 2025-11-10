import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight">
            <span className="text-primary">VITA</span>
            <span className="text-foreground"> 2.0</span>
          </h1>
          <p className="text-xl text-muted-foreground tracking-normal">
            Premium Fitness Coaching Platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card border border-card-border rounded-lg p-6 space-y-2">
            <div className="text-4xl font-bold text-primary">31+</div>
            <div className="text-sm text-muted-foreground">Expert Coaches</div>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-6 space-y-2">
            <div className="text-4xl font-bold text-primary">14</div>
            <div className="text-sm text-muted-foreground">Sports Disciplines</div>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-6 space-y-2">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Dubai Based</div>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <button className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <p className="text-sm text-muted-foreground">
            World-class coaching across Tennis, Yoga, Boxing, and more
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Coming Soon - Full Application Launch
          </p>
        </div>
      </div>
    </div>
  );
}
