/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Heart, 
  Droplets, 
  ShieldCheck, 
  Clock, 
  User, 
  ChevronRight, 
  BookOpen, 
  Activity,
  AlertCircle,
  CheckCircle2,
  Info
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      id: "symptoms",
      title: "Silent Symptoms",
      icon: <AlertCircle className="w-5 h-5 text-destructive" />,
      content: "Kidney disease is often called a 'silent killer' because most people don't have symptoms until the disease is advanced. Early signs can include fatigue, trouble concentrating, poor appetite, and trouble sleeping.",
      details: [
        "Swelling in your ankles, feet, or hands (edema)",
        "Shortness of breath, especially with activity",
        "Puffy eyes, especially in the morning",
        "Dry, itchy skin",
        "Increased need to urinate, especially at night"
      ]
    },
    {
      id: "prevention",
      title: "Prevention Strategies",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      content: "Managing risk factors is the most effective way to prevent chronic kidney disease (CKD). High blood pressure and diabetes are the leading causes.",
      details: [
        "Control your blood sugar if you have diabetes",
        "Maintain a healthy blood pressure (below 120/80)",
        "Eat a balanced diet low in salt and processed sugars",
        "Stay hydrated, but don't overdo it",
        "Exercise regularly and maintain a healthy weight",
        "Avoid excessive use of over-the-counter pain medications (NSAIDs)"
      ]
    },
    {
      id: "survival",
      title: "Survival & Management",
      icon: <Activity className="w-5 h-5 text-primary" />,
      content: "If diagnosed, CKD can be managed to slow its progression. It's not a death sentence, but it requires significant lifestyle adjustments.",
      details: [
        "Regular check-ups with a nephrologist",
        "Strict adherence to prescribed medications",
        "Renal-friendly diet (monitoring potassium, phosphorus, and protein)",
        "Mental health support and community connection",
        "Exploring treatment options like dialysis or transplant early"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          {...fadeIn}
        >
          <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium tracking-wider uppercase bg-background/50 backdrop-blur-sm">
            Health & Awareness Guide
          </Badge>
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-primary mb-6 leading-[1.1]">
            Kidney Disease: <br />
            <span className="italic">What I Learned Too Late</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            "A guide to prevention and survival, born from a journey I wish I had started sooner."
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By Odion</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <motion.section 
              className="prose prose-stone lg:prose-xl dark:prose-invert max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-primary mb-6">The Unseen Journey</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Most of us take our kidneys for granted. These two bean-shaped organs, no larger than a computer mouse, work tirelessly to filter your blood, regulate blood pressure, and keep your bones healthy. But when they start to fail, they don't scream. They whisper.
              </p>
              <div className="bg-muted p-8 rounded-3xl border border-border/50 italic text-primary/80 leading-relaxed relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Info className="w-12 h-12" />
                </div>
                "I spent years ignoring the subtle signs—the occasional swelling, the fatigue I blamed on work. By the time I realized something was wrong, my kidneys were already at 20% capacity. This guide is what I wish someone had handed me ten years ago."
              </div>
            </motion.section>

            <section className="space-y-8">
              <h2 className="text-3xl font-serif text-primary">Core Knowledge</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {sections.map((section) => (
                  <AccordionItem 
                    key={section.id} 
                    value={section.id}
                    className="border border-border/50 rounded-2xl px-6 bg-card overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="p-2 rounded-full bg-muted">
                          {section.icon}
                        </div>
                        <span className="text-xl font-serif font-medium">{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground">
                      <p className="mb-6 leading-relaxed">{section.content}</p>
                      <ul className="space-y-3">
                        {section.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <motion.section 
              className="bg-primary text-primary-foreground p-10 rounded-[2rem] shadow-xl relative overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-serif mb-6">Take Action Today</h2>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  The best time to care for your kidneys was yesterday. The second best time is now. Schedule a simple blood test (eGFR) and urine test (uACR) with your doctor. It could save your life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary-foreground/10 text-primary-foreground border-none backdrop-blur-sm">
                    #KidneyHealth
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary-foreground/10 text-primary-foreground border-none backdrop-blur-sm">
                    #Prevention
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary-foreground/10 text-primary-foreground border-none backdrop-blur-sm">
                    #Awareness
                  </Badge>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
            </motion.section>

            <Separator className="bg-border/50" />

            <motion.section 
              className="space-y-8 py-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-serif text-primary">Copyright & Disclaimer</h2>
                <p className="text-sm text-muted-foreground">© 2026 Odion • All Rights Reserved</p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed space-y-6">
                <p className="text-justify">
                  All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations used in reviews or educational purposes.
                </p>

                <div className="bg-destructive/5 border-l-4 border-destructive p-6 rounded-r-2xl italic text-destructive/90">
                  <div className="flex items-center gap-2 mb-2 font-bold not-italic uppercase tracking-wider text-xs">
                    <AlertCircle className="w-4 h-4" />
                    Medical Disclaimer
                  </div>
                  This book is intended for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
                </div>

                <p className="text-justify">
                  The author shares personal experiences in this book to raise awareness and help others make informed decisions. However, individual health situations may vary, and readers are encouraged to consult medical professionals for proper care.
                </p>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <Card className="border-border/50 rounded-[2rem] bg-muted/30 overflow-hidden sticky top-8">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-serif">Quick Resources</CardTitle>
                <CardDescription>Essential links and tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Droplets className="w-5 h-5 text-primary" />
                      <span className="font-medium">Hydration Tracker</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="font-medium">BP Log Template</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="font-medium">Dietary Guide PDF</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                <Separator className="bg-border/50" />
                
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <h4 className="font-serif font-bold text-primary mb-2">Did you know?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    1 in 7 adults in the US (about 37 million people) are estimated to have CKD, and most don't know it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="border-t border-border/50 py-12 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm mb-4 italic">
            "Dedicated to everyone fighting the silent battle."
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <Heart className="w-5 h-5 text-destructive fill-destructive/20" />
          </div>
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest">
            © 2024 Kidney Care Guide • By Odion
          </p>
        </div>
      </footer>
    </div>
  );
}
