
import React from 'react';
import { BookOpen, Target, ShieldCheck, Zap, ClipboardList, UserCheck, MessageSquare, List } from 'lucide-react';
import { Section } from './types';

export const SECTIONS: Section[] = [
  { id: 'intro', title: 'Introduction', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'design', title: 'Course Design', icon: <Target className="w-5 h-5" /> },
  { id: 'udl', title: 'UDL Evaluation', icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 'recommendations', title: 'Recommendations', icon: <Zap className="w-5 h-5" /> },
  { id: 'implementation', title: 'Implementation', icon: <ClipboardList className="w-5 h-5" /> },
  { id: 'reflection', title: 'Self-Reflection', icon: <UserCheck className="w-5 h-5" /> },
  { id: 'references', title: 'References', icon: <List className="w-5 h-5" /> },
];

export const DOCUMENT_CONTENT = `UDL Evaluation of Game Creation Unit
Name: Kiprotich Lang’at
Date: February 1st 2026
EDU 714 Course Design

The unit focuses on the IB Design Cycle to create games solving real-world challenges for Grade 6 students. 
It emphasizes creativity, problem solving, and student-centered learning.
The curriculum follows IB MYP Criteria A, B, C, and D over 4.5 months.
UDL Principles Evaluated: Engagement, Representation, Action and Expression.`;
