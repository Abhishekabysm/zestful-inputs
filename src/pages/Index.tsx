import React from "react";
import { Link } from "react-router-dom";
import { 
  Activity, ArrowRight, Award, CheckCircle, ChevronDown, Circle, CircleDashed, 
  Dumbbell, Heart, Medal, Play, ShieldCheck, Star, Target, Users 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-fitness-light">
      {/* Header Section */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-fitness-light shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <Dumbbell className="h-8 w-8 text-fitness-primary" />
                  <span className="text-xl font-bold text-fitness-dark">FIT ZEST</span>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-fitness-dark/80 hover:text-fitness-primary px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-fitness-dark/80 hover:text-fitness-primary px-3 py-2 text-sm font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('workouts')}
                className="text-fitness-dark/80 hover:text-fitness-primary px-3 py-2 text-sm font-medium"
              >
                Workouts
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-fitness-dark/80 hover:text-fitness-primary px-3 py-2 text-sm font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('getstarted')}
                className="text-fitness-dark/80 hover:text-fitness-primary px-3 py-2 text-sm font-medium"
              >
                Get Started
              </button>
            </nav>
            <div className="md:hidden flex items-center">
              <button className="text-fitness-dark/80 hover:text-fitness-primary px-2 py-1">
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-fitness-light to-white">
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-fitness-primary/5 rounded-full filter blur-3xl animate-float opacity-70" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-fitness-secondary/5 rounded-full filter blur-2xl animate-float opacity-60" style={{ animationDelay: "1s" }} />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-fitness-primary/10 text-fitness-primary text-sm font-medium mb-6">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Transform Your Body & Mind
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fitness-dark mb-6 tracking-tight leading-tight">
                Your Journey to a <span className="text-fitness-primary">Healthier</span> You Starts Here
              </h1>
              <p className="text-fitness-dark/70 text-lg mb-8 max-w-lg">
                Join thousands achieving their fitness goals with personalized workout plans, nutrition guidance, and expert support all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-started">
                  <Button 
                    className="button-primary"
                  >
                    Get Started <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  className="border-fitness-primary/20 text-fitness-dark hover:bg-fitness-primary hover:text-white transition-colors"
                >
                  <Play className="h-4 w-4 text-fitness-primary mr-2 group-hover:text-white" /> 
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center text-sm text-fitness-dark/60">
                <CheckCircle className="h-4 w-4 text-fitness-secondary mr-2" />
                <span>No credit card required</span>
                <span className="mx-2">•</span>
                <CheckCircle className="h-4 w-4 text-fitness-secondary mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
            
            <div className="relative animate-fade-in hidden lg:block">
              <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Fitness Training" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6">
                  <div className="bg-white p-4 rounded-xl shadow-lg max-w-xs">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-fitness-primary/20 flex items-center justify-center mr-3">
                        <Activity className="h-4 w-4 text-fitness-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-fitness-dark">Daily Activity</h4>
                        <p className="text-xs text-fitness-dark/60">You're doing great!</p>
                      </div>
                    </div>
                    <div className="w-full bg-fitness-light rounded-full h-2 mb-1">
                      <div className="bg-fitness-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                    <div className="text-right text-xs text-fitness-dark/60">78% of daily goal</div>
                  </div>
                </div>
                
                <div className="absolute top-6 -left-6">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-fitness-accent mr-2" />
                      <span className="text-sm font-medium text-fitness-dark">Heart Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-fitness-dark mt-1">
                      72<span className="text-sm font-normal text-fitness-dark/60 ml-1">bpm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-fitness-primary mb-2">10k+</div>
              <p className="text-fitness-dark/70 text-sm">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-fitness-primary mb-2">500+</div>
              <p className="text-fitness-dark/70 text-sm">Workout Plans</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-fitness-primary mb-2">95%</div>
              <p className="text-fitness-dark/70 text-sm">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-fitness-primary mb-2">24/7</div>
              <p className="text-fitness-dark/70 text-sm">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-fitness-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-fitness-secondary/10 text-fitness-secondary text-sm font-medium mb-4">
              <Star className="mr-2 h-4 w-4" />
              Our Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-dark mb-4">Everything You Need to Succeed</h2>
            <p className="text-fitness-dark/70 max-w-xl mx-auto">
              FitZest provides all the tools and guidance you need to transform your body and maintain a healthy lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fitness-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-fitness-primary/10 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-fitness-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Workouts</h3>
              <p className="text-fitness-dark/70">
                Custom workouts designed for your body type, fitness level, and specific goals.
              </p>
            </div>
            
            <div className="fitness-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-fitness-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-fitness-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Nutrition Planning</h3>
              <p className="text-fitness-dark/70">
                Expert meal plans and nutritional guidance tailored to your dietary preferences.
              </p>
            </div>
            
            <div className="fitness-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-fitness-accent/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-fitness-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-fitness-dark/70">
                Connect with like-minded individuals and get motivated by shared success stories.
              </p>
            </div>
            
            <div className="fitness-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-fitness-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-fitness-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Goal Tracking</h3>
              <p className="text-fitness-dark/70">
                Monitor your progress with detailed metrics and visualizations of your journey.
              </p>
            </div>
            
            <div className="fitness-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-fitness-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-fitness-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Achievement Rewards</h3>
              <p className="text-fitness-dark/70">
                Earn badges and rewards as you hit milestones and stay consistent with your plan.
              </p>
            </div>
            
            <div className="fitness-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-fitness-accent/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-fitness-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-fitness-dark/70">
                Access to certified trainers and nutritionists for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Programs Section */}
      <section id="workouts" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-fitness-accent/10 text-fitness-accent text-sm font-medium mb-4">
              <Dumbbell className="mr-2 h-4 w-4" />
              Workout Programs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-dark mb-4">Programs for Every Goal</h2>
            <p className="text-fitness-dark/70 max-w-xl mx-auto">
              Whether you're looking to lose weight, build muscle, or improve overall fitness, we have a program for you.
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <Card className="border-none">
                  <CardContent className="p-0">
                    <div className="fitness-card p-6 h-full flex flex-col">
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                          alt="Weight Loss Program"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-fitness-primary text-white text-xs px-2 py-1 rounded">
                          Popular
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Weight Loss Program</h3>
                      <p className="text-fitness-dark/70 mb-4 flex-grow">
                        A comprehensive 12-week program designed to help you lose weight safely and effectively.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <span className="ml-2 text-sm text-fitness-dark/70">(124)</span>
                        </div>
                        <span className="text-sm font-medium text-fitness-primary">Learn More</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2">
                <Card className="border-none">
                  <CardContent className="p-0">
                    <div className="fitness-card p-6 h-full flex flex-col">
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                          alt="Muscle Building"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Muscle Building</h3>
                      <p className="text-fitness-dark/70 mb-4 flex-grow">
                        Build lean muscle mass with this 8-week high-intensity resistance training program.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-fitness-dark/20" />
                          <span className="ml-2 text-sm text-fitness-dark/70">(98)</span>
                        </div>
                        <span className="text-sm font-medium text-fitness-primary">Learn More</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2">
                <Card className="border-none">
                  <CardContent className="p-0">
                    <div className="fitness-card p-6 h-full flex flex-col">
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                          alt="Flexibility & Mobility"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Flexibility & Mobility</h3>
                      <p className="text-fitness-dark/70 mb-4 flex-grow">
                        Improve your range of motion and reduce injury risk with this comprehensive program.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <span className="ml-2 text-sm text-fitness-dark/70">(76)</span>
                        </div>
                        <span className="text-sm font-medium text-fitness-primary">Learn More</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 -left-4" />
              <CarouselNext className="relative inset-0 translate-y-0 -right-4" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-fitness-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-fitness-primary/10 text-fitness-primary text-sm font-medium mb-4">
              <Users className="mr-2 h-4 w-4" />
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-dark mb-4">What Our Members Say</h2>
            <p className="text-fitness-dark/70 max-w-xl mx-auto">
              Real results from real people who have transformed their lives with FitZest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fitness-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah J."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Sarah J.</h4>
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-fitness-dark/70 italic">
                "I've tried many fitness programs before, but FitZest is the first one that actually helped me achieve my goals. The personalized approach makes all the difference!"
              </p>
              <div className="mt-4 text-sm text-fitness-dark/50">
                Lost 28 lbs in 3 months
              </div>
            </div>
            
            <div className="fitness-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael T."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Michael T.</h4>
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-fitness-dark/70 italic">
                "The nutrition guidance alone was worth signing up. I've gained 15 pounds of muscle and my energy levels are through the roof. The community support keeps me motivated too!"
              </p>
              <div className="mt-4 text-sm text-fitness-dark/50">
                Gained 15 lbs of muscle in 4 months
              </div>
            </div>
            
            <div className="fitness-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Jennifer R."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Jennifer R.</h4>
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-fitness-dark/70 italic">
                "As a busy mom, I needed something flexible that could fit into my schedule. FitZest's approach is perfect - I can workout when I have time and still see amazing results!"
              </p>
              <div className="mt-4 text-sm text-fitness-dark/50">
                Improved overall fitness in 2 months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="getstarted" className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-fitness-secondary/5 rounded-full filter blur-3xl animate-float opacity-70" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-fitness-accent/5 rounded-full filter blur-2xl animate-float opacity-60" style={{ animationDelay: "1s" }} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-fitness-accent/10 text-fitness-accent text-sm font-medium mb-4">
              <Target className="mr-2 h-4 w-4" />
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-dark mb-4">
              Start Your Fitness Journey
            </h2>
            <p className="text-fitness-dark/70 max-w-xl mx-auto mb-8">
              Complete your profile to get personalized workout plans and track your progress towards a healthier you.
            </p>
            <Link to="/get-started">
              <Button 
                className="button-primary"
              >
                Get Started Now <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fitness-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-6 w-6 text-fitness-primary" />
                <span className="text-xl font-bold">FIT ZEST</span>
              </div>
              <p className="text-white/70 mb-4">
                Your journey to a healthier lifestyle starts with understanding your body.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Home</a></li>
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Weight Loss</a></li>
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Muscle Building</a></li>
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Flexibility</a></li>
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Nutrition</a></li>
                <li><a href="#" className="text-white/70 hover:text-fitness-primary transition-colors">Mental Wellness</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@fitzest.com
                </li>
                <li className="flex items-center text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (800) 123-4567
                </li>
                <li className="flex items-center text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Fitness Street, Health City, 90210
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2023 FitZest. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
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
    </div>
  );
};

export default Index;
