/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, AlertCircle, Printer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 py-8 md:py-20 print:p-0 relative">
      
      {/* Floating Download PDF Button */}
      <button 
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 no-print font-medium"
      >
        <Printer className="w-5 h-5" />
        Download PDF
      </button>

      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12 md:space-y-32 print:space-y-0">
        
        {/* Page 1: Cover */}
        <motion.section 
          className="book-page items-center text-center space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-primary leading-[1.1] tracking-tight">
              Kidney Disease: <br />
              <span className="text-slate-900 dark:text-white">What I Learned Too Late</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground tracking-wide">
              A COMPREHENSIVE GUIDE TO PREVENTION AND SURVIVAL
            </p>
          </div>
          
          <div className="w-full aspect-[4/5] max-w-md bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 transform -rotate-1 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Cover Image" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground font-semibold">Written By</p>
            <p className="text-3xl font-heading font-bold text-slate-900 dark:text-white">Odion</p>
          </div>
          
          <div className="page-number">Page 1</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 2: Copyright */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <h2 className="text-4xl font-heading text-center text-primary">Copyright & Legal Notice</h2>
          
          <div className="space-y-8 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            <p className="text-center font-bold text-slate-900 dark:text-white text-lg">© 2026 Odion • All Rights Reserved</p>
            
            <p className="text-justify leading-relaxed">
              No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations used in reviews or educational purposes.
            </p>

            <div className="medical-warning">
              <div className="flex items-center gap-2 mb-4 font-bold not-italic uppercase tracking-widest text-xs text-emerald-600 dark:text-emerald-400">
                <AlertCircle className="w-5 h-5" />
                Medical Disclaimer
              </div>
              This book is intended for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
            </div>

            <p className="text-justify leading-relaxed">
              The author shares personal experiences in this book to raise awareness and help others make informed decisions. However, individual health situations may vary, and readers are encouraged to consult medical professionals for proper care.
            </p>
          </div>
          
          <div className="page-number">Page 2</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 3: Dedication */}
        <motion.section 
          className="book-page text-center space-y-12"
          {...fadeIn}
        >
          <h2 className="text-4xl font-heading text-primary">Dedication</h2>
          
          <div className="space-y-10 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light italic text-slate-600 dark:text-slate-400">
            <p className="text-3xl font-heading font-bold not-italic text-slate-900 dark:text-white mb-8">
              This book is dedicated to my beloved mother.
            </p>
            <p>
              Your strength, your courage, and your fight through pain will never be forgotten.
            </p>
            <p>
              Though you are no longer here, your story lives on through these pages.
            </p>
            <p>
              May your journey become a lesson that helps others live longer, healthier lives.
            </p>
            <div className="pt-12 space-y-3 text-primary font-medium not-italic tracking-wide">
              <p>You will always be remembered.</p>
              <p>You will always be loved.</p>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Heart className="w-10 h-10 text-destructive fill-destructive animate-pulse" />
          </div>
          
          <div className="page-number">Page 3</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 4: Preface */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <h2 className="text-4xl font-heading text-primary">Preface</h2>
          
          <div className="space-y-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              This book was not written from theory alone. It was written from real-life experience, from moments of confusion, pain, hope, and lessons learned too late.
            </p>

            <p>
              Kidney disease is something many people do not fully understand until it becomes serious. The signs are often ignored, the questions are not asked, and the right actions are delayed.
            </p>

            <p>
              Through this guide, I aim to simplify what many people find complicated. I want to help you understand what to look out for, what to avoid, and what actions to take early.
            </p>

            <div className="medical-highlight">
              This book is not meant to replace medical professionals. It is meant to guide you to act early, ask better questions, and make informed decisions.
            </div>

            <p>
              If this book helps even one person avoid the pain my family went through, then it has served its purpose.
            </p>

            <div className="pt-8 space-y-2 font-bold text-slate-900 dark:text-white border-t border-border pt-8">
              <p className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full" /> Read with an open mind.</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full" /> Apply what you learn.</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full" /> And most importantly, take action early.</p>
            </div>
          </div>

          <div className="page-number">Page 4</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 5: Table of Contents */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <h2 className="text-4xl font-heading text-center text-primary">Table of Contents</h2>
          
          <div className="space-y-6 max-w-2xl mx-auto w-full text-lg">
            {[
              { title: "Chapter 1: My Story", page: "6" },
              { title: "Chapter 2: Understanding Kidney Disease", page: "9" },
              { title: "Chapter 3: Warning Signs You Should Never Ignore", page: "12" },
              { title: "Chapter 4: Common Causes of Kidney Disease", page: "15" },
              { title: "Chapter 5: How to Prevent Kidney Disease", page: "18" },
              { title: "Chapter 6: Diagnosis and Early Testing", page: "21" },
              { title: "Chapter 7: Treatment Options", page: "23" },
              { title: "Chapter 8: Dialysis and Its Risks", page: "26" },
              { title: "Chapter 9: Lessons I Learned Too Late", page: "29" },
              { title: "Chapter 10: Living with Kidney Disease", page: "31" },
              { title: "Chapter 11: Common Mistakes to Avoid", page: "33" },
              { title: "Chapter 12: Final Words", page: "34" },
              { title: "About the Author", page: "35", bold: true },
            ].map((item, index) => (
              <div key={index} className="flex items-end gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <span className={`font-heading ${item.bold ? 'font-bold text-primary' : 'font-medium text-slate-900 dark:text-white'}`}>
                  {item.title}
                </span>
                <div className="flex-1 border-b-2 border-dotted border-slate-200 dark:border-slate-800 mb-1.5" />
                <span className="font-bold text-primary">{item.page}</span>
              </div>
            ))}
          </div>

          <div className="medical-highlight max-w-2xl mx-auto w-full">
            <strong className="text-primary block mb-2 uppercase tracking-widest text-xs">Reader Tip:</strong> 
            You can always come back to any chapter that is most relevant to you or your loved ones.
          </div>

          <div className="page-number">Page 5</div>
        </motion.section>

        <Separator className="bg-border/30" />

        {/* Page 6: Chapter 1 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 1</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">My Story</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
              alt="Emotional family hospital moment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              There are moments in life that change everything.
            </p>

            <p>
              Moments you wish you could go back and understand better. Moments you wish you had acted sooner.
            </p>

            <p>
              For me, that moment came when my mother’s health started changing.
            </p>

            <p>
              At first, it didn’t seem too serious. She complained of tiredness. Sometimes there was swelling. Other times, she just didn’t feel like herself.
            </p>

            <p>
              We thought it was something minor. Something that would pass.
            </p>

            <div className="medical-highlight">
              Looking back now, those were warning signs we did not fully understand.
            </div>

            <p>
              As time went on, her condition became more difficult to ignore. Hospital visits became more frequent. Tests were done. Questions were asked.
            </p>

            <p>
              Then came the diagnosis.
            </p>

            <p className="font-bold text-primary text-2xl">
              It was kidney disease.
            </p>

            <p>
              At that point, everything began to change.
            </p>
          </div>

          <div className="page-number">Page 6</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 7: Chapter 1 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 1</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">My Story (Continued)</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1581056399312-60301e52850e?auto=format&fit=crop&q=80&w=1000" 
              alt="Hospital doctor explaining results" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Hearing the diagnosis was one of the most difficult moments for our family.
            </p>

            <p>
              Kidney disease is not something most people expect to hear. It changes everything immediately.
            </p>

            <p>
              At that point, we began to learn more about what it meant and what had to be done next.
            </p>

            <p>
              The doctors explained that treatment would be needed to support her condition.
            </p>

            <p>
              That was when dialysis became part of our journey.
            </p>

            <div className="medical-highlight">
              Everything started to feel different. Life became appointments, hospital visits, and constant monitoring.
            </div>

            <p>
              It was overwhelming at first, not just for her, but for the entire family.
            </p>

            <p>
              We were learning as we went, trying to understand what questions to ask and what decisions to make.
            </p>

            <p>
              Looking back, there were many things we did not fully understand at the time.
            </p>

            <p>
              And those gaps in understanding mattered more than we knew.
            </p>
          </div>

          <div className="page-number">Page 7</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 8: Chapter 1 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 1</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">My Story (Continued)</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1579153141957-0a460f4b63d4?auto=format&fit=crop&q=80&w=1000" 
              alt="Dialysis machine in hospital" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              As time went on, treatment became more serious.
            </p>

            <p>
              Dialysis was introduced to help support her kidney function.
            </p>

            <p>
              It was not an easy transition for any of us.
            </p>

            <p>
              Each hospital visit became more emotionally and physically demanding.
            </p>

            <p>
              We had to adjust to a new routine filled with medical procedures, monitoring, and uncertainty.
            </p>

            <div className="medical-highlight">
              At that stage, we realized this was no longer something temporary. It had become a long journey.
            </div>

            <p>
              There were days of hope, and there were days of fear.
            </p>

            <p>
              We tried our best to stay strong, even when things felt overwhelming.
            </p>

            <p>
              But what we did not fully understand at the time was how important proper monitoring and infection prevention would become in this stage.
            </p>

            <p>
              That understanding came later.
            </p>
          </div>

          <div className="page-number">Page 8</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 9: Chapter 2 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 2</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Understanding Kidney Disease</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000" 
              alt="Kidney diagram illustration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              To understand what happened, it is important to first understand the role of the kidneys in the human body.
            </p>

            <p>
              The kidneys are two small organs located in your lower back. Their main job is to filter waste and excess fluid from the blood.
            </p>

            <p>
              They also help control blood pressure, balance minerals, and support overall body function.
            </p>

            <div className="medical-highlight">
              When the kidneys begin to fail, waste starts to build up in the body instead of being removed.
            </div>

            <p>
              This condition is known as kidney disease.
            </p>

            <p>
              In many cases, it develops slowly over time, which makes it difficult to detect early.
            </p>

            <p>
              People may feel fine at first, even while damage is already happening inside the body.
            </p>
          </div>

          <div className="page-number">Page 9</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 10: Chapter 2 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 2</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Understanding Kidney Disease (Continued)</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000" 
              alt="Healthy vs damaged kidney illustration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Kidney disease does not usually happen suddenly.
            </p>

            <p>
              In most cases, it develops slowly over a long period of time.
            </p>

            <p>
              At the beginning, the kidneys may still function well enough for the body to feel normal.
            </p>

            <p>
              This is one of the reasons many people do not realize there is a problem early.
            </p>

            <div className="medical-highlight">
              Damage can be happening inside the body even when there are no obvious symptoms.
            </div>

            <p>
              Over time, as the condition worsens, the kidneys become less effective at filtering waste.
            </p>

            <p>
              When this happens, the body begins to show signs that something is wrong.
            </p>

            <p>
              Unfortunately, by this stage, the condition may already be serious.
            </p>
          </div>

          <div className="page-number">Page 10</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 11: Chapter 3 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 3</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Warning Signs You Should Never Ignore</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
              alt="Person feeling unwell fatigue illustration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              The body often gives warning signs when the kidneys are not functioning properly.
            </p>

            <p>
              The problem is that many people ignore these signs or mistake them for something minor.
            </p>

            <p>
              Early detection can make a big difference in treatment and survival.
            </p>

            <div className="medical-warning">
              Paying attention to your body could save your life or the life of someone you love.
            </div>

            <p>
              Here are some early warning signs to watch carefully:
            </p>

            <ul className="space-y-4 list-none pl-4">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full" /> Feeling tired most of the time without clear reason</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full" /> Swelling in the feet, ankles, or face</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full" /> Changes in urination (too much or too little)</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full" /> Foamy or unusual-looking urine</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full" /> Loss of appetite</li>
            </ul>

            <p>
              These signs may seem small at first, but they should not be ignored.
            </p>
          </div>

          <div className="page-number">Page 11</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 12: Chapter 3 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 3</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Warning Signs You Should Never Ignore (Continued)</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
              alt="Hospital patient monitoring illustration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              As kidney disease becomes more serious, the symptoms become more noticeable and harder to ignore.
            </p>

            <p>
              At this stage, the body is struggling to remove waste and maintain balance.
            </p>

            <div className="medical-warning">
              This is often the stage where many people finally realize something is wrong.
            </div>

            <p>
              More advanced warning signs include:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-4">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-destructive rounded-full" /> Shortness of breath</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-destructive rounded-full" /> Persistent nausea</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-destructive rounded-full" /> Muscle cramps</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-destructive rounded-full" /> High blood pressure</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-destructive rounded-full" /> Darkened urine</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-destructive rounded-full" /> Confusion</li>
            </ul>

            <p>
              These symptoms indicate that the kidneys may be significantly weakened.
            </p>

            <p>
              At this point, medical attention is urgent.
            </p>

            <p>
              Delaying treatment can lead to severe complications.
            </p>
          </div>

          <div className="page-number">Page 12</div>
        </motion.section>

        <Separator className="bg-border/30" />

        {/* Page 13: Chapter 4 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 4</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Common Causes of Kidney Disease</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=1000" 
              alt="Unhealthy lifestyle and medical risk factors illustration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Kidney disease does not happen without reason.
            </p>

            <p>
              In most cases, it develops as a result of long-term health conditions or lifestyle choices.
            </p>

            <p>
              Understanding the causes can help you prevent it early.
            </p>

            <div className="medical-highlight">
              Prevention becomes easier when you understand what puts your kidneys at risk.
            </div>

            <p>
              One of the most common causes is high blood pressure.
            </p>

            <p>
              When blood pressure remains high for a long time, it can damage the blood vessels in the kidneys.
            </p>

            <p>
              Another major cause is diabetes.
            </p>

            <p>
              High blood sugar levels can slowly affect kidney function over time.
            </p>
          </div>

          <div className="page-number">Page 13</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 14: Chapter 4 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 4</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Common Causes of Kidney Disease (Continued)</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000" 
              alt="Medication, herbal mixtures, and unhealthy lifestyle illustration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Apart from medical conditions like high blood pressure and diabetes, daily habits can also increase the risk of kidney disease.
            </p>

            <p>
              Many people do not realize that small choices over time can have serious effects on kidney health.
            </p>

            <div className="medical-warning">
              What seems harmless today may become dangerous over time.
            </div>

            <p>
              One major risk factor is the overuse of painkillers without medical advice.
            </p>

            <p>
              Some medications, when taken frequently, can affect kidney function.
            </p>

            <p>
              Another concern is the use of unregulated herbal mixtures or remedies.
            </p>

            <p>
              While some may believe they are harmless, not all herbal products are safe for long-term use.
            </p>

            <p>
              Poor diet, especially high salt intake and processed foods, can also contribute to kidney strain over time.
            </p>

            <p>
              Lastly, skipping regular medical check-ups means problems are often discovered too late.
            </p>
          </div>

          <div className="page-number">Page 14</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 15: Chapter 5 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 5</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">How to Prevent Kidney Disease</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1505253716362-afaba1d3fb09?auto=format&fit=crop&q=80&w=1000" 
              alt="Healthy lifestyle water fruits exercise illustration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              The good news is that kidney disease can often be prevented.
            </p>

            <p>
              Small daily habits can make a big difference in protecting your kidneys.
            </p>

            <p>
              Prevention is always better, easier, and cheaper than treatment.
            </p>

            <div className="medical-highlight">
              Taking care of your kidneys early can help you avoid serious health complications later in life.
            </div>

            <p>
              One of the most important habits is staying properly hydrated.
            </p>

            <p>
              Drinking enough clean water helps the kidneys flush out waste from the body.
            </p>

            <p>
              Another important step is reducing salt intake in your meals.
            </p>

            <p>
              Too much salt can increase blood pressure and put stress on the kidneys.
            </p>

            <p>
              Eating fresh, natural foods instead of heavily processed foods is also very important.
            </p>
          </div>

          <div className="page-number">Page 15</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 16: Chapter 5 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 5</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Daily Habits That Protect Your Kidneys</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000" 
              alt="Exercise, healthy food, and water lifestyle illustration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Protecting your kidneys is not about one big action.
            </p>

            <p>
              It is about the small things you do every day.
            </p>

            <p>
              Your daily lifestyle has a direct impact on your kidney health over time.
            </p>

            <div className="medical-highlight">
              Consistency in healthy habits is what keeps your kidneys strong.
            </div>

            <p>
              Try to make water your primary drink instead of sugary or processed drinks.
            </p>

            <p>
              Avoid holding urine for too long, as it can put unnecessary pressure on the bladder and kidneys.
            </p>

            <p>
              Regular physical activity, even simple walking, helps improve blood circulation and overall health.
            </p>

            <p>
              Try to maintain a healthy weight, as obesity increases the risk of kidney problems.
            </p>

            <p>
              Also, ensure you get regular health check-ups, especially if you have conditions like high blood pressure or diabetes.
            </p>
          </div>

          <div className="page-number">Page 16</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 17: Chapter 5 Continued - Foods */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-heading text-primary">Chapter 5</h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Foods That Support Kidney Health</h1>
          </div>
          
          <div className="w-full aspect-video max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1000" 
              alt="Healthy foods fruits vegetables balanced diet" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              What you eat plays a very important role in kidney health.
            </p>

            <p>
              A balanced and natural diet can help reduce stress on the kidneys and support overall body function.
            </p>

            <div className="medical-highlight">
              Healthy eating is not expensive—it is about making better choices.
            </div>

            <p>
              Include more fresh fruits and vegetables in your daily meals.
            </p>

            <p>
              Foods like watermelon, cucumber, apples, and leafy greens can support hydration and body balance.
            </p>

            <p>
              Reduce intake of processed foods, especially those high in salt and preservatives.
            </p>

            <p>
              Also limit sugary drinks and replace them with clean water whenever possible.
            </p>

            <p>
              Eating smaller, balanced meals throughout the day can also help maintain overall health.
            </p>

            <p>
              The goal is not perfection, but consistency in making healthier choices.
            </p>
          </div>

          <div className="page-number">Page 17</div>
        </motion.section>

        <Separator className="bg-border/30" />

        {/* Page 19: Chapter 6 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 6</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Why Early Testing Matters</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Doctor discussing test results with patient" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              One of the most important steps in protecting your kidney health is early testing.
            </p>

            <p>
              Many people only go for tests when they already feel very sick.
            </p>

            <p>
              By that time, the condition may already be advanced.
            </p>

            <div className="medical-highlight">
              Early detection gives doctors more options to manage and slow down kidney damage.
            </div>

            <p>
              If you have risk factors like high blood pressure, diabetes, or a family history of kidney disease, regular check-ups are very important.
            </p>

            <p>
              Even if you feel healthy, periodic medical tests can help detect hidden problems early.
            </p>

            <p>
              It is better to discover a problem early than to wait until it becomes severe.
            </p>

            <p>
              Prevention and early action can save lives.
            </p>
          </div>

          <div className="page-number">Page 19</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 20: Chapter 6 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 6</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Taking Action After Diagnosis</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
              alt="Doctor and patient planning treatment steps" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Receiving a diagnosis of kidney disease can be overwhelming.
            </p>

            <p>
              However, what matters most is the action taken after the diagnosis.
            </p>

            <p>
              Early diagnosis gives patients and doctors time to plan the right treatment approach.
            </p>

            <div className="medical-highlight">
              What you do next after knowing your condition can greatly affect your health outcome.
            </div>

            <p>
              At this stage, doctors may recommend lifestyle changes, medication, or other forms of treatment depending on the severity.
            </p>

            <p>
              It is important to follow medical advice carefully and not delay treatment.
            </p>

            <p>
              Ignoring or postponing action can lead to faster progression of the disease.
            </p>

            <p>
              In the next chapter, we will explore the different treatment options available and how they work.
            </p>
          </div>

          <div className="page-number">Page 20</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 21: Chapter 7 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 7</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Treatment Options</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
              alt="Hospital treatment care and medication illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Kidney disease treatment depends on how early the condition is detected and how severe it has become.
            </p>

            <p>
              There is no one single treatment for everyone. Doctors decide the best approach based on each individual case.
            </p>

            <div className="medical-highlight">
              The earlier kidney disease is detected, the more treatment options are available.
            </div>

            <p>
              In early stages, treatment may focus on controlling blood pressure, managing blood sugar, and improving lifestyle habits.
            </p>

            <p>
              Medications may also be prescribed to support kidney function and reduce complications.
            </p>

            <p>
              Regular monitoring becomes very important at this stage to track progress.
            </p>

            <p>
              The goal of early treatment is to slow down damage and protect remaining kidney function.
            </p>
          </div>

          <div className="page-number">Page 21</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 22: Chapter 7 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 7</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Managing Kidney Disease Daily</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000" 
              alt="Patient lifestyle management healthy routine illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Treating kidney disease is not only about medication or hospital visits.
            </p>

            <p>
              It also involves daily care and lifestyle management.
            </p>

            <p>
              Patients are often advised to follow strict routines that help reduce strain on the kidneys.
            </p>

            <div className="medical-highlight">
              Consistency in daily care plays a very important role in slowing disease progression.
            </div>

            <p>
              This includes following dietary guidelines provided by doctors.
            </p>

            <p>
              Reducing salt intake, avoiding harmful substances, and eating balanced meals are often recommended.
            </p>

            <p>
              Patients may also need to monitor their blood pressure and blood sugar regularly.
            </p>

            <p>
              Staying hydrated properly, as advised by a healthcare professional, is also important.
            </p>

            <p>
              Small daily actions can make a big difference in long-term health outcomes.
            </p>
          </div>

          <div className="page-number">Page 22</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 23: Chapter 7 Continued - Advanced Care */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 7</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Advanced Care</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
              alt="Hospital advanced kidney care treatment illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              In some cases, kidney disease may progress even with treatment and lifestyle changes.
            </p>

            <p>
              When this happens, doctors may need to introduce more advanced forms of care.
            </p>

            <p>
              The main goal at this stage is to help the body perform the functions that the kidneys can no longer manage effectively.
            </p>

            <div className="medical-highlight">
              Advanced treatment is not a failure—it is a way to support life when the kidneys are weak.
            </div>

            <p>
              Patients at this stage are usually closely monitored in a hospital or specialized care center.
            </p>

            <p>
              Doctors may adjust medications and recommend additional procedures depending on the patient’s condition.
            </p>

            <p>
              One of the most common treatments at this stage is dialysis, which will be explained in the next section.
            </p>

            <p>
              Understanding these options helps families prepare mentally and emotionally for the journey ahead.
            </p>
          </div>

          <div className="page-number">Page 23</div>
        </motion.section>

        <Separator className="bg-border/30" />

        {/* Page 24: Chapter 8 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 8</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Understanding Dialysis</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
              alt="Dialysis machine hospital treatment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Dialysis is a medical treatment used when the kidneys are no longer able to properly filter waste from the blood.
            </p>

            <p>
              It is not a cure, but it helps to perform some of the important functions that the kidneys can no longer handle.
            </p>

            <div className="medical-highlight">
              Dialysis helps remove waste, excess fluid, and toxins from the body when the kidneys cannot do it effectively.
            </div>

            <p>
              During dialysis, a special machine is used to clean the blood outside the body and then return it safely.
            </p>

            <p>
              This process helps to reduce symptoms and improve the patient’s quality of life.
            </p>

            <p>
              It is usually done regularly under medical supervision in a hospital or dialysis center.
            </p>

            <p>
              Although it can be life-saving, it requires consistency and careful monitoring.
            </p>
          </div>

          <div className="page-number">Page 24</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 25: Chapter 8 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 8</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Types of Dialysis</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
              alt="Hospital dialysis treatment explanation illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              There are different types of dialysis, but they all have the same goal—to help clean the blood when the kidneys cannot do it.
            </p>

            <p>
              The most common type used in hospitals is hemodialysis.
            </p>

            <div className="medical-highlight">
              Hemodialysis is a process where blood is taken out of the body, cleaned using a machine, and then returned back into the body.
            </div>

            <p>
              This procedure is usually done several times a week, depending on the patient’s condition.
            </p>

            <p>
              Each session can take a few hours and must be done under medical supervision.
            </p>

            <p>
              Another type is peritoneal dialysis, which uses the lining of the abdomen to help filter waste inside the body.
            </p>

            <p>
              Doctors decide which method is best based on the patient’s health condition.
            </p>

            <p>
              Consistency and proper care are very important during dialysis treatment.
            </p>
          </div>

          <div className="page-number">Page 25</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 26: Chapter 8 Continued - Risks */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 8</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Risks and Complications</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000" 
              alt="Hospital infection control and dialysis care illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Dialysis is a very important and life-saving treatment, but like all medical procedures, it comes with certain risks.
            </p>

            <p>
              Understanding these risks helps patients and families take better precautions and make informed decisions.
            </p>

            <div className="medical-highlight">
              Most complications can be reduced when proper hygiene, monitoring, and medical care are followed strictly.
            </div>

            <p>
              One of the main risks is infection, especially when medical lines or access points are not properly managed.
            </p>

            <p>
              In some cases, infections can become serious if not detected and treated early.
            </p>

            <p>
              Patients may also experience low blood pressure, fatigue, or weakness after dialysis sessions.
            </p>

            <p>
              This is why regular monitoring by healthcare professionals is very important.
            </p>

            <p>
              Proper care in the dialysis center and strict hygiene practices help reduce these risks significantly.
            </p>
          </div>

          <div className="page-number">Page 26</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 27: Chapter 9 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 9</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Lessons I Learned Too Late</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=1000" 
              alt="Calm reflection and thinking illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Some lessons in life only become clear after painful experiences.
            </p>

            <p>
              Looking back, there are things I wish I understood earlier about kidney disease and patient care.
            </p>

            <div className="medical-highlight">
              These lessons are shared so that others can act earlier and avoid similar pain.
            </div>

            <p>
              One important lesson is that early warning signs should never be ignored.
            </p>

            <p>
              What may look small or harmless at first can become serious over time if not addressed.
            </p>

            <p>
              Another lesson is the importance of asking questions during treatment.
            </p>

            <p>
              Understanding what is happening helps families make better decisions.
            </p>

            <p>
              Trust in medical care is important, but awareness and involvement are equally necessary.
            </p>
          </div>

          <div className="page-number">Page 27</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 28: Chapter 9 Continued */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 9</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Important Lessons</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000" 
              alt="Doctor and family discussing treatment decisions" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Another important lesson is that healthcare decisions require careful attention and understanding.
            </p>

            <p>
              Choosing where and how treatment is done can have a significant impact on a patient’s health journey.
            </p>

            <div className="medical-highlight">
              It is important for families to stay involved and informed during every stage of treatment.
            </div>

            <p>
              Proper hygiene and infection control in medical environments play a very important role in patient safety.
            </p>

            <p>
              Any signs of infection or unusual symptoms should be reported and addressed quickly.
            </p>

            <p>
              Even small changes in a patient’s condition should not be ignored.
            </p>

            <p>
              Communication between doctors, patients, and family members is essential for better outcomes.
            </p>

            <p>
              These experiences taught me that awareness and involvement can make a big difference.
            </p>
          </div>

          <div className="page-number">Page 28</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 29: Chapter 9 Continued - Final Reflections */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 9</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">What This Experience Taught Me</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1470252649358-96957c053e9a?auto=format&fit=crop&q=80&w=1000" 
              alt="Calm reflection sunrise thinking illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Life has a way of teaching the deepest lessons through difficult experiences.
            </p>

            <p>
              Through this journey, I came to understand how important early awareness and action truly are.
            </p>

            <p>
              Many health conditions, including kidney disease, progress quietly without obvious signs at the beginning.
            </p>

            <div className="medical-highlight">
              By the time symptoms become obvious, the condition may already be advanced.
            </div>

            <p>
              This is why paying attention to small changes in the body is so important.
            </p>

            <p>
              Regular health checks, proper medical guidance, and informed decisions can help prevent many complications.
            </p>

            <p>
              I also learned that knowledge is powerful, but action is even more important.
            </p>

            <p>
              What you do with what you know can make all the difference.
            </p>
          </div>

          <div className="page-number">Page 29</div>
        </motion.section>

        <Separator className="bg-border/30" />

        {/* Page 30: Chapter 10 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 10</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Living with Kidney Disease</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000" 
              alt="Family support and patient care illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Kidney disease is a life-changing condition, but it does not mean life is over.
            </p>

            <p>
              Many people continue to live meaningful lives while managing the condition with proper care and support.
            </p>

            <p>
              The key is understanding the condition and following medical guidance carefully.
            </p>

            <div className="medical-highlight">
              With the right care, support, and discipline, patients can maintain a better quality of life.
            </div>

            <p>
              Emotional and family support plays a very important role in the patient’s journey.
            </p>

            <p>
              Encouragement, patience, and understanding help patients cope better with treatment routines.
            </p>

            <p>
              It is also important to stay consistent with medication, diet, and hospital visits.
            </p>

            <p>
              Living with kidney disease requires commitment, but it is possible to manage it with the right approach.
            </p>
          </div>

          <div className="page-number">Page 30</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 31: Chapter 10 Continued - Daily Management */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 10</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Daily Life and Management</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000" 
              alt="Healthy routine medication water and hospital checkup illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Living with kidney disease requires structure and consistency in daily life.
            </p>

            <p>
              Patients often need to follow a strict routine to help maintain stability and reduce complications.
            </p>

            <div className="medical-highlight">
              Small daily habits can make a big difference in how the body responds to treatment.
            </div>

            <p>
              This includes taking prescribed medications at the right time without missing doses.
            </p>

            <p>
              It also involves following dietary recommendations carefully to reduce stress on the kidneys.
            </p>

            <p>
              Regular hospital visits are important for monitoring progress and adjusting treatment when necessary.
            </p>

            <p>
              Rest, hydration (as advised by a doctor), and avoiding stress are also important parts of daily care.
            </p>

            <p>
              Every small action contributes to overall stability and quality of life.
            </p>
          </div>

          <div className="page-number">Page 31</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 32: Chapter 10 Continued - Emotional Support */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 10</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Emotional and Family Support</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1000" 
              alt="Family supporting patient in hospital calm emotional illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Kidney disease affects more than just the body. It also affects emotions, mindset, and family life.
            </p>

            <p>
              Many patients go through moments of fear, frustration, and uncertainty.
            </p>

            <p>
              During these times, support from family and loved ones becomes very important.
            </p>

            <div className="medical-highlight">
              Emotional support can help patients stay strong and committed to their treatment journey.
            </div>

            <p>
              Encouragement, patience, and understanding from family members can make a big difference.
            </p>

            <p>
              It is important for families to stay involved and show care, especially during difficult moments.
            </p>

            <p>
              Patients who feel supported often cope better with treatment and hospital routines.
            </p>

            <p>
              Healing is not only physical—it is also emotional and mental.
            </p>
          </div>

          <div className="page-number">Page 32</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 33: Chapter 11 */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 11</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Common Mistakes to Avoid</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1000" 
              alt="Warning signs and caution illustration healthcare mistakes" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Many complications in kidney disease do not happen suddenly.
            </p>

            <p>
              In many cases, they are the result of avoidable mistakes made over time.
            </p>

            <div className="medical-highlight">
              Awareness of these mistakes can help prevent serious health problems.
            </div>

            <p>
              One of the most common mistakes is ignoring early warning signs of illness.
            </p>

            <p>
              Another mistake is delaying medical check-ups until symptoms become severe.
            </p>

            <p>
              Some people also rely on self-medication without proper medical guidance.
            </p>

            <p>
              Missing prescribed treatments or not following medical advice can also make the condition worse.
            </p>

            <p>
              These small decisions can have long-term effects on kidney health.
            </p>
          </div>

          <div className="page-number">Page 33</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 34: Chapter 12 - Final Words */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em]">Chapter 12</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">Final Words</h1>
          </div>
          
          <div className="w-full aspect-video max-w-3xl mx-auto bg-muted rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 group">
            <img 
              src="https://images.unsplash.com/photo-1470252649358-96957c053e9a?auto=format&fit=crop&q=80&w=1000" 
              alt="Sunrise hope peaceful illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              If you have read this far, then you now understand how serious kidney disease can be.
            </p>

            <p>
              You also understand that many cases can be managed or even prevented when action is taken early.
            </p>

            <p>
              The most important lesson from this book is simple.
            </p>

            <div className="medical-highlight">
              Do not ignore your health. Act early. Ask questions. Seek help when needed.
            </div>

            <p>
              Small decisions made today can determine your future health.
            </p>

            <p>
              Do not wait until it is too late to take action.
            </p>

            <p>
              Protect yourself. Protect your loved ones.
            </p>

            <p>
              Your life is valuable, and your health deserves attention.
            </p>
          </div>

          <div className="page-number">Page 34</div>
        </motion.section>

        <Separator className="bg-border/30 no-print" />

        {/* Page 35: About the Author */}
        <motion.section 
          className="book-page space-y-12"
          {...fadeIn}
        >
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">About the Author</h1>
          </div>
          
          <div className="w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500" 
              alt="Author portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center">
            <p>
              This book was written by Odion.
            </p>

            <p>
              Odion is passionate about health awareness and helping people understand medical conditions in simple and practical ways.
            </p>

            <p>
              This work was inspired by a personal experience and a desire to help others avoid preventable pain and loss.
            </p>

            <div className="medical-highlight text-left">
              The goal of this book is to educate, create awareness, and encourage early action when it comes to kidney health.
            </div>

            <p>
              Through this guide, the author hopes that families will become more informed, more prepared, and more proactive about their health decisions.
            </p>

            <p>
              Thank you for reading.
            </p>

            <p className="pt-4 font-heading font-bold text-3xl text-sky-600 dark:text-sky-400">
              — Odion
            </p>
          </div>

          <div className="page-number">Page 35</div>
        </motion.section>

      </div>

      <footer className="py-12 border-t border-border/30 bg-muted/10">
        <div className="max-w-3xl mx-auto px-6 text-center text-xs text-muted-foreground/50 uppercase tracking-[0.2em]">
          Kidney Disease: What I Learned Too Late • Odion
        </div>
      </footer>
    </div>
  );
}
