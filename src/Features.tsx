import React, { useState } from 'react';
import './App.css';

const mobileFeatures = [
  {
    role: "Shared Features",
    color: "#EFBD31", // Yellow
    items: [
      { title: "Authentication & User Management", desc: "Secure registration and login with role-based distinctions. Includes password recovery, profile management, cloud profile pictures, and T&C administration." },
      { title: "Classroom Management", desc: "View class rosters and participant profiles. Supports multi-class enrollment and tracks class activity in real-time." },
      { title: "Notifications System", desc: "Push notification system for role-based alerts, featuring a centralized center tracking read and unread messages." }
    ]
  },
  {
    role: "Teacher Features",
    color: "#ED1F24", // Red
    items: [
      { title: "Assessment Management", desc: "Create and organize timed assessments. Build multiple-choice questions, set dates, utilize custom word banks, and view detailed analytics." },
      { title: "Daily Lesson Log (DLL)", desc: "Create and edit daily entries for lesson planning. Track performance standards, competencies, and resources to support weekly planning." },
      { title: "Class Management", desc: "Create classes, generate unique access codes, and manage enrollment while monitoring overall engagement." },
      { title: "Grades & Analytics", desc: "Comprehensive dashboard tracking scores and percentages. Generates quarterly reports, analyzes trends, and provides student leaderboards." },
      { title: "Teacher Achievements", desc: "An achievement system that tracks and displays specific badges and milestones earned by the educator." }
    ]
  },
  {
    role: "Student Features",
    color: "#1A4C8B", // Blue
    items: [
      { title: "Profile Management", desc: "Customize personal profiles and manage account settings, including Learner Reference Number (LRN) tracking." },
      { title: "Class Enrollment", desc: "Join specific classes using unique access codes provided by teachers to view rosters and classmates." },
      { title: "Assessment Completion", desc: "Take timed assessments, submit answers for immediate feedback, and review detailed scores." },
      { title: "Interactive Games", desc: "Play 2D math maze games across three difficulties. Navigate mazes, collect books to answer math questions, and unlock leaderboards." },
      { title: "Gamification & Achievements", desc: "Earn up to eight unique badges for milestones like perfect scores or maze completions, featuring celebratory animations." },
      { title: "Grades & Tracking", desc: "Monitor academic progress through a personal dashboard with monthly reports and trend tracking." },
      { title: "Real-time Synchronization", desc: "Live collaboration with classmates, instant grade updates, and indicators for offline support status." }
    ]
  }
];

const webFeatures = [
  {
    role: "General Features",
    color: "#EFBD31", // Yellow
    items: [
      { title: "User Auth & Profiles", desc: "Secure login system with password reset capabilities and dedicated tools for individual user profile customization." },
      { title: "Role-Based Access", desc: "Strict security enforcing separate interfaces and permission levels for teachers, moderators, and administrators." },
      { title: "Responsive & Real-Time", desc: "Engineered to adapt seamlessly across desktop and tablet devices, synchronizing dynamic content instantly for all users." }
    ]
  },
  {
    role: "Teacher Features",
    color: "#ED1F24", // Red
    items: [
      { title: "Class Management", desc: "Tools to create, organize, and manage multiple classes while continuously tracking individual student progress." },
      { title: "Virtual Blackboard", desc: "An interactive virtual whiteboard supporting real-time drawing and visual explanations during live sessions." },
      { title: "Lesson Planning", desc: "Design structured lessons with full multimedia support, including dedicated file upload capabilities for photos and media assets." },
      { title: "Daily Lesson Log (DLL)", desc: "Structured documentation tools for daily lesson planning featuring automatic date tracking for organized records." },
      { title: "Assessments", desc: "Build, distribute, and manage student assessments using a diverse range of customizable question formats." }
    ]
  },
  {
    role: "Moderator Features",
    color: "#76B4AF", // Teal
    items: [
      { title: "Moderator Dashboard", desc: "A centralized interface offering a comprehensive overview of platform activity and key system metrics." },
      { title: "Audit Trails", desc: "Strict oversight through continuous monitoring and logging of all user activities and systemic changes." },
      { title: "Content Moderation", desc: "Maintains a safe educational environment utilizing a customizable word filtering system to actively moderate content." },
      { title: "Account Settings", desc: "Specialized administrative tools designed specifically for the management of moderator accounts and permissions." }
    ]
  }
];

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile');

  const currentFeatures = activeTab === 'mobile' ? mobileFeatures : webFeatures;

  return (
    <div className="features-page animate-fade-in">
      <div className="features-header-text">
        <h2 className="title" style={{ marginBottom: '16px' }}>Platform Features</h2>
        <p className="description" style={{ margin: '0 auto', maxWidth: '700px' }}>
          Explore the comprehensive tools and capabilities that power the Gr8 Math learning ecosystem across mobile devices and the web.
        </p>
      </div>

      {/* Modern Tab Toggle */}
      <div className="tab-container">
        <button 
          className={`tab-btn ${activeTab === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobile')}
        >
          📱 Mobile App
        </button>
        <button 
          className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
          onClick={() => setActiveTab('web')}
        >
          💻 Web App
        </button>
      </div>

      {/* Render the Feature Groups */}
      <div className="features-content">
        {currentFeatures.map((group, idx) => (
          <div key={idx} className="feature-group">
            
            {/* FIX: Dark, readable text with a bright colored accent bar! */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ 
                width: '8px', 
                height: '28px', 
                backgroundColor: group.color, 
                borderRadius: '4px', 
                marginRight: '12px' 
              }}></div>
              <h3 className="role-title" style={{ color: '#222', margin: 0, padding: 0, border: 'none' }}>
                {group.role}
              </h3>
            </div>

            <div className="features-grid">
              {group.items.map((item, i) => (
                <div key={i} className="feature-card list-card" style={{ borderTop: `4px solid ${group.color}` }}>
                  <h4 className="feature-title" style={{ color: '#1A4C8B' }}>{item.title}</h4>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}