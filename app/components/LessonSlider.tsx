'use client';

import { useState } from 'react';

export interface Slide {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
  highlightColor?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  slides: Slide[];
}

interface LessonSliderProps {
  lesson: Lesson;
  onComplete?: () => void;
}

export default function LessonSlider({ lesson, onComplete }: LessonSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = lesson.slides.length;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = lesson.slides[currentSlide];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-white/70 text-sm font-semibold">
            Slajd {currentSlide + 1} z {totalSlides}
          </div>
          <div className="text-white/70 text-sm">
            {Math.round(progress)}% ukończone
          </div>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Slide Content */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden min-h-[500px] flex flex-col">
        {/* Slide Header */}
        <div className={`p-8 ${currentSlideData.highlightColor || 'bg-gradient-to-r from-purple-600 to-blue-600'}`}>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-6xl">{currentSlideData.icon}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              {currentSlideData.title}
            </h2>
          </div>
        </div>

        {/* Slide Body */}
        <div className="flex-1 p-8 text-white/90 text-lg leading-relaxed overflow-y-auto">
          {currentSlideData.content}
        </div>

        {/* Navigation */}
        <div className="p-6 bg-white/5 border-t border-white/10">
          <div className="flex items-center justify-between gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentSlide === 0}
              className="px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white/10 hover:bg-white/20 text-white flex items-center gap-2"
            >
              <span>←</span>
              <span className="hidden sm:inline">Poprzedni</span>
            </button>

            {/* Dots Navigation */}
            <div className="flex gap-2">
              {lesson.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-purple-500 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Przejdź do slajdu ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="px-6 py-3 rounded-xl font-bold transition-all bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="hidden sm:inline">
                {currentSlide === totalSlides - 1 ? 'Zakończ' : 'Następny'}
              </span>
              <span>{currentSlide === totalSlides - 1 ? '✓' : '→'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Navigation (optional) */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {lesson.slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
              index === currentSlide
                ? 'bg-purple-600 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            {slide.icon} {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
