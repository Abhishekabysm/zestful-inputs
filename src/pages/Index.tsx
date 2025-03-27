
import React from "react";
import FitnessForm from "@/components/FitnessForm";
import { Circle, CircleDashed } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-fitness-light to-white px-4 py-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-fitness-primary/5 rounded-full filter blur-3xl animate-float opacity-70" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-fitness-secondary/5 rounded-full filter blur-2xl animate-float opacity-60" style={{ animationDelay: "1s" }} />
      <div className="absolute -top-20 right-0 w-72 h-72 bg-fitness-accent/5 rounded-full filter blur-3xl animate-float opacity-70" style={{ animationDelay: "2s" }} />
      
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10">
          <Circle className="text-fitness-primary/10 h-6 w-6" />
        </div>
        <div className="absolute top-20 right-20">
          <CircleDashed className="text-fitness-accent/10 h-8 w-8" />
        </div>
        <div className="absolute bottom-10 left-1/4">
          <CircleDashed className="text-fitness-secondary/10 h-4 w-4" />
        </div>
        <div className="absolute top-1/3 right-1/3">
          <Circle className="text-fitness-primary/10 h-5 w-5" />
        </div>
      </div>
      
      {/* Main content container */}
      <div className="max-w-5xl w-full mx-auto z-10">
        {/* Header section */}
        <div className="text-center mb-12 animate-blur-in">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-fitness-primary/10 text-fitness-primary text-xs font-medium mb-4">
            FIT ZEST
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fitness-dark mb-4 tracking-tight">
            Start Your Fitness Journey
          </h1>
          <p className="text-fitness-dark/70 max-w-lg mx-auto text-balance">
            Complete your profile to get personalized workout plans and track your progress towards a healthier you.
          </p>
        </div>
        
        {/* Form section */}
        <div className="flex flex-col items-center justify-center w-full">
          <FitnessForm />
        </div>
        
        {/* Footer message */}
        <div className="text-center mt-16 text-fitness-dark/50 text-sm animate-fade-in">
          <p>Your data is secure and will only be used to enhance your fitness experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
