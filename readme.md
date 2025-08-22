#  WAYFINER – AI-Powered Trip Planner  

**WAYFINER** is a **Generative AI-based Trip Planner** designed to help travelers create personalized, real-time itineraries based on destination, budget, duration, and preferences. No more surprises like visiting a dry waterfall during summer – WAYFINER ensures accurate and updated trip details to make your travel experience hassle-free.  

---

##  Problem Statement  
Planning a trip can be stressful:  
- People often rely on outdated or misleading information online.  
- Real-time conditions (weather, accessibility) are ignored.  
- Manual research for budget, nearby attractions, and activities is time-consuming.  

**Example:**  
On a friend’s birthday, we planned a picnic to Mini Hogenakkal. Google showed beautiful waterfalls, but when we reached, there were only dry rocks because it was off-season.  
**WAYFINER solves this problem by generating personalized, real-time trip plans with accurate details.**  

---

##  Project Objectives  
- Provide **AI-generated itineraries** customized for user preferences.  
- Fetch **real-time data** (weather, timings, budget) to avoid surprises.  
- Recommend **places, activities, and cost estimates** based on current conditions.  
- Suggest **similar destinations** using AI embeddings.  

---

##  Core Features  
 AI-generated itineraries with **day-wise plans**  
 **Real-time data integration** (weather, timings, budget)  
 **Dynamic prompts** based on user preferences  
 **Image previews** of destinations  
 Budget-based trip suggestions  
 Recommendations for **similar places** using vector similarity  

---

##  Tech Stack  
- **Frontend:** React.js (with Tailwind CSS & Framer Motion for smooth UI)  
- **Backend:** Node.js + Express  
- **AI/LLM:** OpenAI / GPT-4 API (or any LLM supporting prompt engineering & function calling)  
- **Database:** MongoDB (for storing user trips), FAISS or Pinecone (for vector DB)  
- **External APIs:**  
  - Google Places API (or alternative)  
  - OpenWeather API  
  - Unsplash API for images  

---

##  AI & Prompt Engineering Techniques  
WAYFINER implements **advanced LLM concepts**:  

###  Prompting Strategies  
- **System + User Prompt** → Defines AI as an expert trip planner (RTFC Framework)  
- **Zero-Shot Prompting** → “Plan a 2-day trip from Bangalore to Coorg under ₹5000.”  
- **One-Shot Prompting** → Provide one example itinerary before asking for another  
- **Multi-Shot Prompting** → Provide multiple examples for different trip types  
- **Dynamic Prompting** → Prompts adapt based on user preferences (e.g., waterfalls, family trip)  
- **Chain-of-Thought Prompting** → AI reasons step-by-step (budget → travel → stay → plan)  

###  Advanced LLM Controls  
- **Tokens & Tokenization** → Logs tokens used after every AI call  
- **Temperature** → Controls creativity in itineraries  
- **Top P / Top K** → Fine-tune randomness & diversity  
- **Stop Sequences** → Prevents unnecessary text beyond itinerary  
- **Structured Output** → Returns JSON for easy UI rendering  
- **Function Calling** → Fetch real-time weather & place details dynamically  

---

##  Architecture  
User → React Frontend → Express Backend → OpenAI API
|
├── Weather API
├── Google Places API
└── Vector DB (FAISS/Pinecone)


