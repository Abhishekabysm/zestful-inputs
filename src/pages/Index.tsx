
import React from "react";
import FitnessForm from "@/components/FitnessForm";
import { Circle, CircleDashed, Dumbbell, Medal, Target } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
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
        <div className="absolute bottom-1/4 right-1/4">
          <Dumbbell className="text-fitness-accent/10 h-7 w-7" />
        </div>
        <div className="absolute top-1/2 left-1/5">
          <Medal className="text-fitness-secondary/10 h-6 w-6" />
        </div>
        <div className="absolute bottom-1/3 right-10">
          <Target className="text-fitness-primary/10 h-8 w-8" />
        </div>
      </div>
      
      {/* Main content container */}
      <div className="max-w-5xl w-full mx-auto z-10">
        {/* Header section */}
        <div className="text-center mb-12 animate-blur-in">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-fitness-primary/10 text-fitness-primary text-sm font-medium mb-4">
            <Dumbbell className="mr-2 h-4 w-4" />
            FIT ZEST
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fitness-dark mb-4 tracking-tight">
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
        
        {/* Features section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-fitness-dark">Why Choose Fit Zest?</h2>
            <p className="text-fitness-dark/70 mt-2">We're committed to helping you achieve your fitness goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="fitness-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-fitness-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-fitness-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Plans</h3>
              <p className="text-fitness-dark/70 text-sm">Custom fitness programs tailored to your specific goals and needs</p>
            </div>
            
            <div className="fitness-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-fitness-accent/10 rounded-full flex items-center justify-center mb-4">
                <Medal className="h-6 w-6 text-fitness-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-fitness-dark/70 text-sm">Monitor your improvements with detailed analytics and insights</p>
            </div>
            
            <div className="fitness-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-fitness-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-fitness-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
              <p className="text-fitness-dark/70 text-sm">Access to professional trainers and nutritionists for support</p>
            </div>
          </div>
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
