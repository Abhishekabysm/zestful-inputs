
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import { Activity, Heart, Trophy, Dumbbell, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FormData {
  height: string;
  weight: string;
  age: string;
  gender: string;
}

const FitnessForm = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState<FormData>({
    height: "",
    weight: "",
    age: "",
    gender: "male"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.height || !formData.weight || !formData.age) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        duration: 3000,
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Success!",
        description: "Your fitness profile has been saved.",
        duration: 5000,
      });
      setIsSubmitting(false);
      
      // Navigate to fitness details page with the form data
      navigate('/fitness-details', { state: { userData: formData } });
    }, 1500);
  };
  
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="mb-8 flex items-center space-x-4 animate-fade-in">
        <div className="h-12 w-1 bg-fitness-gradient rounded-full" />
        <h2 className="text-2xl font-bold text-fitness-dark">
          Your Fitness Profile
        </h2>
      </div>
      
      <div className="fitness-card mb-10 relative">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Dumbbell className="h-8 w-8 text-fitness-primary/20 animate-pulse-soft" />
        </div>
        
        <FormField
          id="height"
          label="Height"
          type="number"
          value={formData.height}
          onChange={handleChange}
          placeholder="Enter your height"
          required
          min={50}
          max={300}
        />
        
        <FormField
          id="weight"
          label="Weight"
          type="number"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Enter your weight"
          required
          min={20}
          max={500}
        />
        
        <FormField
          id="age"
          label="Age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
          min={12}
          max={120}
        />
        
        <FormField
          id="gender"
          label="Gender"
          type="select"
          value={formData.gender}
          onChange={handleChange}
          required
          options={genderOptions}
        />
        
        <div className="mt-8 flex justify-center">
          <SubmitButton 
            text={isSubmitting ? "Saving..." : "Save Profile"} 
            disabled={isSubmitting}
            className="group"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="fitness-card p-4 flex flex-col items-center animate-slide-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          <Activity className="h-6 w-6 text-fitness-primary mb-2 animate-pulse-soft" />
          <span className="text-xs text-center text-fitness-dark/70">Activity Tracking</span>
        </div>
        
        <div className="fitness-card p-4 flex flex-col items-center animate-slide-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <Heart className="h-6 w-6 text-fitness-accent mb-2 animate-pulse-soft" />
          <span className="text-xs text-center text-fitness-dark/70">Health Metrics</span>
        </div>
        
        <div className="fitness-card p-4 flex flex-col items-center animate-slide-up opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          <Trophy className="h-6 w-6 text-fitness-secondary mb-2 animate-pulse-soft" />
          <span className="text-xs text-center text-fitness-dark/70">Goal Setting</span>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a href="#" className="inline-flex items-center text-fitness-primary hover:text-fitness-secondary transition-colors">
          <span className="mr-1">Learn more about our fitness programs</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </form>
  );
};

export default FitnessForm;
