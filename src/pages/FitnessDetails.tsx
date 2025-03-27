
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Activity, 
  Heart, 
  Trophy, 
  Dumbbell, 
  ArrowRight 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FitnessData {
  height: string;
  weight: string;
  age: string;
  gender: string;
}

const FitnessDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Get the user's data from location state or use default values
  const userData: FitnessData = location.state?.userData || {
    height: "170",
    weight: "70",
    age: "30",
    gender: "male"
  };
  
  // Calculate BMI
  const heightInM = parseFloat(userData.height) / 100;
  const weightInKg = parseFloat(userData.weight);
  const bmi = weightInKg / (heightInM * heightInM);
  
  // Calculate recommended daily calorie intake (basic formula)
  let bmr = 0;
  if (userData.gender === "male") {
    bmr = 88.362 + (13.397 * weightInKg) + (4.799 * parseFloat(userData.height)) - (5.677 * parseFloat(userData.age));
  } else {
    bmr = 447.593 + (9.247 * weightInKg) + (3.098 * parseFloat(userData.height)) - (4.330 * parseFloat(userData.age));
  }
  
  // Assuming moderate activity level (multiplier 1.55)
  const dailyCalories = Math.round(bmr * 1.55);
  
  // Determine fitness status based on BMI
  const getBmiCategory = () => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Healthy Weight";
    if (bmi < 30) return "Overweight";
    return "Obesity";
  };
  
  // Get fitness recommendation based on BMI category
  const getFitnessRecommendation = () => {
    const category = getBmiCategory();
    switch (category) {
      case "Underweight":
        return "Focus on strength training and increasing caloric intake with nutrient-dense foods.";
      case "Healthy Weight":
        return "Maintain your balanced lifestyle with regular exercise and balanced nutrition.";
      case "Overweight":
        return "Incorporate more cardio exercises and create a moderate calorie deficit with nutritious foods.";
      case "Obesity":
        return "Start with low-impact activities like walking and swimming, and consult with a healthcare provider about a nutrition plan.";
      default:
        return "Maintain a balanced exercise routine and healthy eating habits.";
    }
  };
  
  const handleReturnHome = () => {
    navigate('/');
  };
  
  const workoutPlan = {
    beginner: [
      { day: "Monday", focus: "Upper Body", exercises: ["Push-ups (3×8)", "Dumbbell rows (3×10)", "Shoulder press (3×10)"] },
      { day: "Tuesday", focus: "Cardio", exercises: ["Brisk walking (30 min)", "Jumping jacks (3×1 min)", "Cycling (15 min)"] },
      { day: "Wednesday", focus: "Rest", exercises: ["Light stretching", "Foam rolling", "Mobility work"] },
      { day: "Thursday", focus: "Lower Body", exercises: ["Bodyweight squats (3×12)", "Walking lunges (3×10)", "Calf raises (3×15)"] },
      { day: "Friday", focus: "Core", exercises: ["Planks (3×30 sec)", "Russian twists (3×12)", "Bicycle crunches (3×15)"] },
      { day: "Weekend", focus: "Active Recovery", exercises: ["Light hiking", "Swimming", "Yoga"] }
    ],
    intermediate: [
      { day: "Monday", focus: "Upper Body", exercises: ["Bench press (4×10)", "Bent-over rows (4×10)", "Overhead press (3×12)"] },
      { day: "Tuesday", focus: "HIIT", exercises: ["Sprints (10×30 sec)", "Burpees (4×12)", "Mountain climbers (4×30 sec)"] },
      { day: "Wednesday", focus: "Lower Body", exercises: ["Squats (4×12)", "Romanian deadlifts (4×10)", "Lunges (3×12)"] },
      { day: "Thursday", focus: "Active Recovery", exercises: ["Light cardio (20 min)", "Dynamic stretching", "Mobility work"] },
      { day: "Friday", focus: "Full Body", exercises: ["Deadlifts (4×8)", "Push-ups (4×12)", "Pull-ups (3×8)"] },
      { day: "Weekend", focus: "Cardio & Core", exercises: ["Running (30 min)", "Plank variations (5 min total)", "Cycling (30 min)"] }
    ]
  };
  
  // Choose workout plan based on age
  const plan = parseInt(userData.age) > 40 ? workoutPlan.beginner : workoutPlan.intermediate;
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-fitness-light to-white px-4 py-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-fitness-primary/5 rounded-full filter blur-3xl animate-float opacity-70" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-fitness-secondary/5 rounded-full filter blur-2xl animate-float opacity-60" style={{ animationDelay: "1s" }} />
      <div className="absolute -top-20 right-0 w-72 h-72 bg-fitness-accent/5 rounded-full filter blur-3xl animate-float opacity-70" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-5xl w-full mx-auto z-10 animate-fade-in">
        {/* Success confirmation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-fitness-primary/10 text-fitness-primary text-sm font-medium mb-4">
            <Trophy className="mr-2 h-4 w-4" />
            PROFILE SAVED
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fitness-dark mb-4 tracking-tight">
            Your Fitness Journey Starts Now!
          </h1>
          <p className="text-fitness-dark/70 max-w-2xl mx-auto text-balance">
            Based on your profile, we've created a personalized fitness plan to help you achieve your goals. Follow these recommendations for best results.
          </p>
        </div>
        
        {/* Profile metrics section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="fitness-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-fitness-primary/10 rounded-full flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-fitness-primary" />
            </div>
            <h3 className="text-xs uppercase tracking-wider text-fitness-dark/50 mb-1">BMI</h3>
            <p className="text-3xl font-bold text-fitness-dark">{bmi.toFixed(1)}</p>
            <span className="text-sm mt-1 px-2 py-1 rounded-full bg-fitness-primary/10 text-fitness-primary font-medium">
              {getBmiCategory()}
            </span>
          </div>
          
          <div className="fitness-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-fitness-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Dumbbell className="h-6 w-6 text-fitness-secondary" />
            </div>
            <h3 className="text-xs uppercase tracking-wider text-fitness-dark/50 mb-1">Fitness Level</h3>
            <p className="text-3xl font-bold text-fitness-dark">{parseInt(userData.age) > 40 ? "Beginner" : "Intermediate"}</p>
            <span className="text-sm mt-1 px-2 py-1 rounded-full bg-fitness-secondary/10 text-fitness-secondary font-medium">
              {parseInt(userData.age) > 40 ? "Focused" : "Challenging"} Plan
            </span>
          </div>
          
          <div className="fitness-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-fitness-accent/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-fitness-accent" />
            </div>
            <h3 className="text-xs uppercase tracking-wider text-fitness-dark/50 mb-1">Daily Calories</h3>
            <p className="text-3xl font-bold text-fitness-dark">{dailyCalories}</p>
            <span className="text-sm mt-1 px-2 py-1 rounded-full bg-fitness-accent/10 text-fitness-accent font-medium">
              Recommended Intake
            </span>
          </div>
          
          <div className="fitness-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-fitness-primary/10 rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-fitness-primary" />
            </div>
            <h3 className="text-xs uppercase tracking-wider text-fitness-dark/50 mb-1">Weekly Goal</h3>
            <p className="text-3xl font-bold text-fitness-dark">{5} Workouts</p>
            <span className="text-sm mt-1 px-2 py-1 rounded-full bg-fitness-primary/10 text-fitness-primary font-medium">
              {parseInt(userData.age) > 40 ? "3 hrs" : "5 hrs"} Total
            </span>
          </div>
        </div>
        
        {/* Recommendation section */}
        <div className="fitness-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-fitness-dark mb-6 border-l-4 border-fitness-primary pl-4">Your Fitness Recommendation</h2>
          <p className="text-lg text-fitness-dark/80 mb-6">{getFitnessRecommendation()}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-fitness-dark mb-4 flex items-center">
                <Dumbbell className="h-5 w-5 text-fitness-primary mr-2" />
                Weekly Workout Plan
              </h3>
              <div className="space-y-4">
                {plan.map((day, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-sm">
                    <CardHeader className="bg-fitness-primary/5 py-3 px-4">
                      <CardTitle className="text-sm font-medium flex justify-between">
                        <span>{day.day}</span>
                        <span className="text-fitness-primary">{day.focus}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-3 px-4">
                      <ul className="text-xs space-y-1 text-fitness-dark/80">
                        {day.exercises.map((exercise, i) => (
                          <li key={i} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-fitness-primary/60 mr-2"></span>
                            {exercise}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-fitness-dark mb-4 flex items-center">
                <Heart className="h-5 w-5 text-fitness-accent mr-2" />
                Nutrition Guidelines
              </h3>
              <Card className="border-0 shadow-sm mb-4">
                <CardHeader className="bg-fitness-accent/5 py-3 px-4">
                  <CardTitle className="text-sm font-medium">Macronutrient Split</CardTitle>
                </CardHeader>
                <CardContent className="py-4 px-4">
                  <div className="flex justify-between text-xs text-fitness-dark/80 mb-2">
                    <span>Protein</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="w-full bg-fitness-light rounded-full h-2 mb-4">
                    <div className="bg-fitness-accent h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-fitness-dark/80 mb-2">
                    <span>Carbohydrates</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="w-full bg-fitness-light rounded-full h-2 mb-4">
                    <div className="bg-fitness-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-fitness-dark/80 mb-2">
                    <span>Fats</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="w-full bg-fitness-light rounded-full h-2 mb-4">
                    <div className="bg-fitness-secondary h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardHeader className="bg-fitness-secondary/5 py-3 px-4">
                  <CardTitle className="text-sm font-medium">Daily Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="py-3 px-4">
                  <ul className="text-xs space-y-3 text-fitness-dark/80">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-fitness-secondary/60 mr-2 mt-1.5"></span>
                      <span>Aim for <span className="font-medium">{Math.round(weightInKg * 2)}g of protein</span> daily (meat, fish, eggs, legumes, dairy)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-fitness-secondary/60 mr-2 mt-1.5"></span>
                      <span>Consume <span className="font-medium">2-3 liters of water</span> throughout the day</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-fitness-secondary/60 mr-2 mt-1.5"></span>
                      <span>Include <span className="font-medium">5+ servings of fruits and vegetables</span> daily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-fitness-secondary/60 mr-2 mt-1.5"></span>
                      <span>Prioritize <span className="font-medium">whole foods</span> over processed alternatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-fitness-secondary/60 mr-2 mt-1.5"></span>
                      <span>Distribute your <span className="font-medium">{dailyCalories} calories</span> across 4-5 meals daily</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Return to homepage button */}
        <div className="text-center">
          <button
            onClick={handleReturnHome}
            className="inline-flex items-center justify-center py-3 px-6 bg-fitness-gradient text-white font-medium rounded-xl shadow-button
              transition-all hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            Return to Homepage
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitnessDetails;
