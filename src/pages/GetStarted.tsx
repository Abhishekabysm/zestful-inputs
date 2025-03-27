
import React from "react";
import FitnessForm from "@/components/FitnessForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-fitness-light py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-fitness-primary/5 rounded-full filter blur-3xl animate-float opacity-70" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-fitness-secondary/5 rounded-full filter blur-2xl animate-float opacity-60" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-fitness-primary hover:text-fitness-secondary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-fitness-dark mb-4">
            Start Your Fitness Journey
          </h1>
          <p className="text-fitness-dark/70 max-w-xl mx-auto">
            Complete your profile to get personalized workout plans and track your progress towards a healthier you.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center w-full">
          <FitnessForm />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
