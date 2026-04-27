import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft, Mail, Linkedin, Github, ExternalLink,
  ChevronDown, ChevronUp, Train, BarChart3, Cpu, Shield,
  Zap, Database, Brain, Activity
} from 'lucide-react';

/* ─────────────────────────── PROJECT DATA ─────────────────────────── */
const projects = [
  {
    id: 'depot-iq',
    emoji: '📊',
    title: 'Depot IQ',
    tagline: 'Real-Time Depot Occupancy Intelligence Platform',
    status: 'Production — Metro',
    statusColor: 'bg-green-500',
    gradient: 'from-cyan-900 to-blue-900',
    border: 'border-cyan-400',
    accent: 'text-cyan-400',
    icon: <BarChart3 size={28} className="text-cyan-400" />,
    tech: ['Python', 'Real-time Data Feeds', 'MMS Integration', 'Fleet Analytics', 'Dashboard', 'PostgreSQL'],
    impact: ['40% reduction in shunting conflicts', 'Real-time visibility across all stabling roads', 'Replaced manual radio-based coordination', 'Improved fleet-turn planning efficiency by ~30%'],
    overview: `Metro's depot operations relied on manual coordination — radio calls, whiteboards, and tribal knowledge to manage where each train was stabled, when it would be ready, and which road was occupied. Mistakes led to shunting conflicts, delayed departures, and last-minute fleet reshuffles that cascaded into service disruptions.

Depot IQ was born from a simple observation: all this information already existed in the Maintenance Management System (MMS) — it just wasn't surfaced in real time. By building a lightweight Python integration layer that pulled live data from MMS feeds and rendered it on a web-based occupancy map, we gave the entire depot team — from Control Room to Shunting Masters — a single source of truth.`,
    problem: `Manual depot coordination created significant operational risk at Metro. With 89+ train sets across multiple stabling roads, the depot team had no unified digital view of occupancy. Shunting plans were created on paper, communicated via radio, and revised verbally — leading to:
• Shunting conflicts when two movements were planned for the same road
• Fleet planners working from stale data, leading to late platform assignments
• Control Room unable to verify physical train positions without calling depot staff
• No audit trail of vehicle movements for post-incident analysis`,
    solution: `Depot IQ integrates with the MMS data pipeline to extract real-time train location and maintenance status signals, then maps them onto a colour-coded depot layout rendered in a browser. Key features:

**Live Occupancy Map** — Each stabling road is rendered as a visual lane. Trains occupying a road are shown with their set number, current status (available, in maintenance, awaiting inspection), and ETR (Estimated Time Ready).

**Conflict Detection** — The system flags when two shunting movements are planned for the same road segment within the same time window, alerting the Shunting Master before the conflict becomes physical.

**Fleet-Turn Dashboard** — A rolling 4-hour view shows which trains will become available, when, and from which road — enabling Control Room to pre-assign train sets to services rather than reacting under pressure.

**Historical Replay** — All depot movements are logged to a PostgreSQL database, enabling post-incident reconstruction and identifying recurring conflict hotspots for process improvement.`,
    architecture: `• MMS Data Connector (Python, polling every 30 seconds)
• PostgreSQL event store for movement history
• Flask REST API serving occupancy state to frontend
• React-based depot map with live status overlays
• Hosted on an internal server within the depot LAN`,
    results: `Depot IQ has been in continuous operational use since deployment. Key outcomes:
• 40% reduction in shunting conflicts in the first 6 months
• Manual radio coordination for depot state queries eliminated
• Fleet planners report ~30% improvement in planning efficiency due to accurate ETR visibility
• First in-house real-time operations tool in Metro depot history`,
  },
  {
    id: 'train-iq',
    emoji: '🚆',
    title: 'Train IQ',
    tagline: 'AI-Powered Train Health & Performance Monitor',
    status: 'Prototype — Research & Development',
    statusColor: 'bg-yellow-500',
    gradient: 'from-purple-900 to-indigo-900',
    border: 'border-purple-400',
    accent: 'text-purple-400',
    icon: <Train size={28} className="text-purple-400" />,
    tech: ['Python', 'scikit-learn', 'pandas', 'Time-Series Analysis', 'Anomaly Detection', 'LSTM', 'Power BI'],
    impact: ['Early fault detection 48–72 hours before failure', 'Reduced unplanned corrective maintenance events', 'Data-driven component life prediction', 'EN 50126-aligned reliability metrics'],
    overview: `Metro's GoA4 driverless rolling stock generates thousands of sensor data points per train per minute — traction inverter temperatures, door cycle counts, brake application pressures, pantograph force readings, air compressor cycle times, and more. Yet most of this data was used only reactively: a fault alarm fires, a corrective work order is raised, and a technician responds.

Train IQ is a prototype AI health monitoring platform designed to shift that paradigm from reactive to predictive. By learning the normal operating envelope of each train and each subsystem, Train IQ can identify when a train is beginning to deviate — often 48–72 hours before an alarm condition is reached.`,
    problem: `Despite generating rich telemetry, Metro's maintenance regime was primarily calendar- and counter-based (every X days, every Y km). This meant:
• High-performing components replaced on schedule even when not needed (over-maintenance cost)
• Degraded components that hadn't yet triggered an alarm going undetected until failure
• No systematic way to compare the health of Train Set 07 versus Train Set 31 on the same subsystem
• Manual review of fault logs required significant engineer time with limited pattern recognition`,
    solution: `Train IQ uses a multi-layer approach to health monitoring:

**Baseline Learning** — An initial unsupervised learning phase uses k-means clustering and isolation forest algorithms to define the "normal" operating envelope for each subsystem across each train class. This creates a unique health signature per vehicle.

**Anomaly Detection** — New telemetry is continuously scored against the learned baseline. Any deviation beyond a configurable threshold generates a health alert — not an alarm, but a soft signal that warrants investigation.

**Trend Forecasting** — LSTM (Long Short-Term Memory) neural networks model degradation trajectories for components with known failure modes (e.g., brake pad thickness, door seal resistance, compressor run-time). Forecast charts project when a component is likely to breach the maintenance threshold.

**Fleet Comparison Dashboard** — A Power BI layer aggregates health scores across the fleet, allowing maintenance planners to rank trains by health index and schedule interventions based on actual condition rather than calendar.

**FRACAS Integration** — Detected anomalies are automatically cross-referenced with the FRACAS database to check if the pattern matches a known historical failure signature, enabling faster root-cause hypothesis generation.`,
    architecture: `• Python ingestion service pulling from the train SCADA/MMS data lake
• scikit-learn pipeline for baseline modelling (isolation forest + k-means)
• LSTM model (TensorFlow/Keras) for degradation forecasting
• PostgreSQL time-series store with TimescaleDB extension
• Power BI dashboard connected to the PostgreSQL reporting views
• Alert routing via email and Telegram bot notification`,
    results: `Train IQ is in active prototype phase. Pilot results on traction motor temperature monitoring across 10 train sets showed:
• 3 anomalies detected and confirmed as pre-fault conditions by the OEM
• 2 of those 3 would not have been caught until the next scheduled inspection
• Average detection lead time: 62 hours before fault alarm activation
• False positive rate: <8% after baseline tuning (ongoing improvement)`,
  },
  {
    id: 'startm',
    emoji: '⚙️',
    title: 'StartM',
    tagline: 'Smart Maintenance Workflow Automation',
    status: 'Development — Internal Tool',
    statusColor: 'bg-orange-500',
    gradient: 'from-orange-900 to-red-900',
    border: 'border-orange-400',
    accent: 'text-orange-400',
    icon: <Zap size={28} className="text-orange-400" />,
    tech: ['Python', 'Flask', 'Oracle Maximo API', 'React', 'Supabase', 'Celery', 'Workflow Automation'],
    impact: ['Automated work-order prioritisation', 'Reduced planner manual effort by ~50%', 'Integrated asset criticality scoring', 'Dynamic scheduling aligned with operational windows'],
    overview: `Maintenance planning in a heavy rail environment is a juggling act — balancing asset health, regulatory compliance windows, staffing availability, spare parts inventory, and operational timetable constraints. At Metro, this planning was done largely manually: a maintenance planner reviewed open work orders in Oracle Maximo, made prioritisation decisions from experience, and created a daily task sheet.

StartM (Smart Asset Reliability & Task Manager) is an intelligent middleware layer that automates the prioritisation, sequencing, and scheduling of maintenance work orders by integrating asset criticality scores, health data from Train IQ, operational window calendars, and resource availability into a single decision engine.`,
    problem: `Manual maintenance planning created several systemic problems:
• Planner bias toward familiar tasks or easily completed jobs rather than highest-priority ones
• No systematic integration of predictive signals into the work queue
• High-priority tasks sometimes delayed due to poor sequencing with operational windows
• Reactive reshuffling of the plan when unplanned corrective tasks arrived mid-shift
• Difficulty demonstrating compliance with RCM task intervals to the regulator (RTA)`,
    solution: `StartM connects to Oracle Maximo via its REST API and pulls all open Preventive Maintenance (PM) and Corrective Maintenance (CM) work orders. It then applies a multi-factor scoring model:

**Asset Criticality Score (ACS)** — Each asset is pre-scored based on its FMECA outcomes: probability of failure × consequence severity × detectability. Safety-critical items (e.g., brake systems, ATC interfaces) carry the highest ACS.

**Time-to-Due Urgency** — PM tasks approaching their compliance window receive an escalating urgency multiplier as the due date approaches. Tasks overdue receive a critical flag.

**Predictive Signal Integration** — If Train IQ has raised an anomaly alert for a specific subsystem, StartM elevates any related PM tasks for that subsystem regardless of their scheduled due date.

**Operational Window Alignment** — A calendar engine maps each task to available maintenance windows (overnight, depot days, mid-day layovers) and filters the queue to show only tasks executable in the next available window.

**Resource & Spares Check** — Before surfacing a task, StartM validates that the required competency (e.g., ATC technician, rolling stock mechanic) and spare parts are available, preventing half-started jobs.

The output is a dynamic, prioritised work list pushed back to Maximo as a structured work plan — reducing planner effort to review and approval rather than creation from scratch.`,
    architecture: `• Python backend (Flask) with Celery task queue for async Maximo sync
• Oracle Maximo REST API connector (OAuth 2.0)
• Supabase (PostgreSQL) for criticality scores, window calendars, and resource profiles
• React frontend for planner review, override, and approval workflow
• Telegram notification bot for shift-start plan delivery to supervisors`,
    results: `StartM is currently in development with a pilot cohort of 2 maintenance planners. Early feedback:
• Estimated 50% reduction in time spent on manual work-order prioritisation
• Zero missed compliance windows in the 6-week pilot period
• Planners report higher confidence in the daily plan due to transparent scoring rationale
• First tool to systematically feed predictive signals back into the Maximo work queue`,
  },
  {
    id: 'predictive-maintenance',
    emoji: '📈',
    title: 'Predictive Maintenance AI',
    tagline: 'Data-Driven Asset Health Forecasting Engine',
    status: 'Active — Deployed',
    statusColor: 'bg-green-500',
    gradient: 'from-green-900 to-emerald-900',
    border: 'border-green-400',
    accent: 'text-green-400',
    icon: <Activity size={28} className="text-green-400" />,
    tech: ['Python', 'pandas', 'scikit-learn', 'Power BI', 'Time-Series Analysis', 'ARIMA', 'Random Forest'],
    impact: ['Anomaly detection accuracy >92%', '48-hour advance warning on 3 major component failures', 'Power BI fleet health dashboard used daily by 8 engineers', 'Reduced reactive maintenance costs by estimated 18%'],
    overview: `Before Train IQ and StartM, the first step toward data-driven maintenance at Metro was this foundational predictive maintenance engine — a collection of Python models and Power BI dashboards that transformed raw CMMS data into actionable reliability insights.

Where Train IQ focuses on real-time telemetry, this engine works with historical work-order data, failure records, and component replacement logs to identify patterns, forecast failure rates, and build the statistical foundation for all subsequent AI projects.`,
    problem: `The maintenance team had years of data in Oracle Maximo but no systematic way to extract insight from it. Questions like "Which component fails most on Train Class A versus Class B?", "Is our MTBF improving or degrading over time?", and "Which subsystems contribute most to service-affecting failures?" required hours of manual SQL queries and spreadsheet work to answer — and were therefore rarely asked systematically.`,
    solution: `The Predictive Maintenance AI engine consists of three layers:

**Data Engineering Pipeline** — A Python ETL pipeline extracts work-order history, failure codes, component replacement records, and service-disruption logs from Maximo and the operations database. Data is cleaned, standardised, and loaded into a PostgreSQL analytical warehouse.

**Reliability Analytics Models** — Using pandas and scikit-learn:
• MTBF / MTTR trending per subsystem per asset class
• Weibull analysis for component life distribution modelling
• Random Forest classifier for failure mode prediction based on precursor events
• ARIMA time-series models for failure rate forecasting (next 30/60/90 days)

**Power BI Dashboard Suite** — A five-page Power BI report consumed daily by 8 reliability engineers:
• Fleet Health Scorecard — RAG status per subsystem per train
• Failure Mode Pareto — Top 10 failure modes by frequency and maintenance hours
• MTBF Trend — 12-month rolling MTBF per subsystem
• Maintenance Cost Heatmap — Cost per train per period, highlighting outliers
• Predictive Alerts — Components flagged by the ML models for near-term intervention`,
    architecture: `• Python ETL pipeline (pandas, SQLAlchemy) running nightly
• PostgreSQL analytical data warehouse
• scikit-learn models serialised with joblib, retrained monthly
• Power BI Desktop connected to PostgreSQL via DirectQuery for live refresh
• Model outputs written back to PostgreSQL for Power BI consumption`,
    results: `• Anomaly detection accuracy measured at >92% on a 6-month held-out test set
• Three major component failures detected 48+ hours in advance in year 1
• Estimated 18% reduction in reactive (corrective) maintenance costs
• MTBF calculation time reduced from 8 hours/week (manual) to 15 minutes (automated)
• Power BI suite adopted as the standard reliability reporting tool`,
  },
  {
    id: 'fracas-pro',
    emoji: '🔧',
    title: 'FRACAS Pro',
    tagline: 'AI-Enhanced Failure Reporting & Corrective Action System',
    status: 'Active — Metro Operations',
    statusColor: 'bg-green-500',
    gradient: 'from-blue-900 to-slate-900',
    border: 'border-blue-400',
    accent: 'text-blue-400',
    icon: <Shield size={28} className="text-blue-400" />,
    tech: ['EN 50126', 'Python', 'NLP / Text Classification', 'Reliability Engineering', 'PostgreSQL', 'Power BI', 'FTA / FMECA'],
    impact: ['EN 50126-compliant failure classification across 6 subsystems', 'NLP-assisted failure mode tagging (saves 2 hrs/day)', 'Automated KPI report generation', 'Full audit trail for RTA regulator submissions'],
    overview: `FRACAS (Failure Reporting, Analysis, and Corrective Action System) is the backbone of reliability engineering on Metro. Mandated by the EN 50126 railway reliability standard, FRACAS requires that every failure event is captured, classified, analysed for root cause, and linked to a corrective or preventive action.

FRACAS Pro is an enhanced digital implementation of this process, layering NLP-assisted classification and automated KPI reporting on top of the core FRACAS workflow — reducing the administrative burden on engineers while improving data quality and regulatory compliance.`,
    problem: `The legacy FRACAS process relied on engineers manually entering failure reports into a shared spreadsheet, then applying EN 50126 failure classifications by hand. This created:
• Inconsistent failure mode classification — different engineers using different codes for the same failure type
• Significant administrative overhead — an experienced reliability engineer spending 2+ hours/day on data entry and classification review
• Delayed KPI reporting — monthly MTBF and failure rate reports required a full day to compile
• Weak audit trail — regulators (RTA) required evidence of systematic failure tracking, which was hard to extract from spreadsheets`,
    solution: `FRACAS Pro restructures the failure reporting process around a purpose-built web form and database, enhanced with AI-assisted classification:

**Structured Data Capture** — Engineers submit failure reports via a web form that enforces required fields: subsystem, component, failure mode category, service impact (Y/N), and initial diagnosis. Free-text fields accept narrative descriptions.

**NLP-Assisted Classification** — A fine-tuned text classification model (trained on 3 years of historical FRACAS entries) analyses the narrative description and suggests an EN 50126 failure mode category and a subsystem-specific sub-code. The engineer confirms or overrides. Accuracy on the validation set: 87%.

**Root Cause Workflow** — Each failure triggers a structured root cause analysis workflow (5-Why, Fishbone, or FTA as appropriate to severity). The system prompts the engineer at each stage and tracks completion.

**Corrective Action Tracking** — Corrective actions are linked to the originating failure record, assigned an owner, and tracked to closure. Overdue actions trigger automated reminders.

**Automated KPI Reports** — Monthly MTBF, MTTR, failure rate by subsystem, and service-affecting failure summaries are generated automatically and formatted for RTA regulatory submission.`,
    architecture: `• Python (Flask) backend with PostgreSQL
• NLP classifier: fine-tuned DistilBERT on historical FRACAS data (HuggingFace Transformers)
• React web frontend with role-based access (Engineer / Supervisor / RAMS Lead)
• Automated report generation: Python-docx templates populated from DB
• Power BI connected for ad-hoc reliability analytics`,
    results: `• EN 50126-compliant FRACAS implemented across Rolling Stock, ATC, AFC, PSD, Civil, and Track subsystems
• NLP classification assistant reduces manual classification time by an estimated 2 hours/day per reliability engineer
• Monthly KPI reports now generated in 15 minutes (previously 1 full working day)
• Zero compliance findings from RTA regulatory audits related to failure tracking
• 3 years of structured failure data now available as a training corpus for Train IQ and Predictive Maintenance AI`,
  },
  {
    id: 'rams-analytics',
    emoji: '🛡️',
    title: 'RAMS Analytics',
    tagline: 'AI-Enhanced Reliability, Availability, Maintainability & Safety Platform',
    status: 'Research — Open Concept',
    statusColor: 'bg-purple-500',
    gradient: 'from-violet-900 to-purple-900',
    border: 'border-violet-400',
    accent: 'text-violet-400',
    icon: <Database size={28} className="text-violet-400" />,
    tech: ['Python', 'RAMS Methodology', 'EN 50126 / EN 50129', 'Monte Carlo Simulation', 'Bayesian Networks', 'FTA / FMECA', 'SIL Analysis'],
    impact: ['Automated RAMS KPI computation', 'Monte Carlo availability simulation', 'SIL verification support tooling', 'Hazard log governance automation'],
    overview: `RAMS Analytics is a conceptual platform — part research project, part vision — for bringing modern AI and computational methods to the traditionally manual world of railway RAMS (Reliability, Availability, Maintainability, Safety) engineering.

RAMS studies for new railway systems involve enormous volumes of analysis: FMECA tables with thousands of rows, fault trees with hundreds of gates, hazard logs tracking hundreds of identified hazards through their lifecycle, and SIL (Safety Integrity Level) verification matrices. Most of this is done in spreadsheets or legacy tools that haven't changed since the 1990s.

RAMS Analytics envisions a platform where these analyses are living documents — continuously updated from operational data, computationally rigorous, and AI-assisted.`,
    problem: `Current RAMS engineering practice has several structural weaknesses:
• FMECA and FTA analyses are static documents, created once during design and rarely updated from operational experience
• No systematic feedback loop from FRACAS data back into the original FMECA failure rate assumptions
• SIL verification is an enormous manual effort — cross-referencing hundreds of requirements, design measures, and test records
• Hazard logs are tracked in spreadsheets with no automated alerting when hazard status changes
• RAMS KPIs (availability, MTBF, MTTR) are computed manually from CMMS data on a monthly basis`,
    solution: `RAMS Analytics addresses each of these gaps:

**Living FMECA** — FMECA failure rate assumptions are linked to operational data from FRACAS Pro. As failure history accumulates, the system flags where actual failure rates deviate significantly from design assumptions, prompting the RAMS engineer to review and update the analysis.

**Computational FTA** — Fault trees are stored as structured data (not static diagrams) and evaluated computationally. Top event probability is calculated from basic event failure rates. Sensitivity analysis identifies which basic events contribute most to top event probability. Monte Carlo simulation generates confidence intervals.

**Bayesian Network Safety Models** — For complex dependent failure scenarios, Bayesian networks are used to model conditional dependencies between failure modes — something classical FTA cannot capture.

**SIL Verification Assistant** — The platform maintains a traceability matrix linking each SIL requirement to design measures, test evidence, and verification status. An NLP model assists in mapping natural-language requirements to the verification matrix.

**Automated Hazard Log** — Hazards are tracked through their lifecycle states (Identified → Assessed → Mitigated → Closed) with automated alerts when mitigation measures are overdue or when operational events may relate to an open hazard.`,
    architecture: `• Python computation engine (FTA solver, Monte Carlo simulation, Bayesian inference with PyMC)
• PostgreSQL schema modelling FMECA, FTA, hazard log, and SIL matrix
• React frontend for analysis authoring and interactive visualisation
• Integration with FRACAS Pro for live failure rate updates
• Export to standard report formats (IEC 61025, EN 50126 compliant templates)`,
    results: `RAMS Analytics is a research and development concept, currently being prototyped:
• FTA computational solver implemented and validated against a known reference case
• Hazard log module in active use for a Metro system modification project
• Monte Carlo availability simulation prototype completed with results validated against analytical solutions
• Seeking collaboration with railway RAMS practitioners to co-develop and validate the platform`,
  },
  {
    id: 'Metro-Iq',
    emoji: '🤖',
    title: 'MetroIQ AI Suite',
    tagline: 'AI-Powered Automation & Chatbot Solutions',
    status: 'Active — Commercial',
    statusColor: 'bg-green-500',
    gradient: 'from-pink-900 to-rose-900',
    border: 'border-pink-400',
    accent: 'text-pink-400',
    icon: <Brain size={28} className="text-pink-400" />,
    tech: ['Python', 'LLMs', 'Ollama', 'RAG', 'WhatsApp API', 'Telegram Bot API', 'Flask', 'Supabase', 'Prompt Engineering'],
    impact: ['Multi-channel chatbot deployments (WhatsApp & Telegram)', 'RAG pipelines for domain-specific knowledge bases', 'Custom LLM workflows for business process automation', 'AI consultancy for SME digital transformation'],
    overview: `Vinamra's AI consultancy and digital solutions  — applying the same systematic engineering approach used in railway RAMS to the design and deployment of practical AI systems for businesses.

The Metro Iq AI Suite encompasses a range of tools and deployments built for clients and internal use: customer-facing chatbots, knowledge base Q&A systems, document processing automation, and AI workflow integrations.`,
    problem: `Most SMEs know AI could help them but don't know where to start. They face:
• Vendor solutions that are too expensive or too generic for their specific use case
• Fear of hallucination and reliability issues with LLMs in business-critical contexts
• No internal engineering capability to evaluate, implement, or maintain AI systems
• Data privacy concerns about sending proprietary information to cloud AI APIs`,
    solution: `The Metro AI Suite is built on a philosophy of: **reliable, local-first, use-case-specific AI**.

**RAG-Powered Knowledge Base Chatbots** — For clients with large internal document libraries (SOPs, product manuals, policy documents), I builds Retrieval-Augmented Generation (RAG) systems that answer natural language questions by retrieving relevant document chunks and generating grounded, cited responses. Hallucination rate is dramatically lower than vanilla LLM chat.

**WhatsApp & Telegram Business Bots** — Customer-facing chatbots integrated with business workflows: appointment booking, order status enquiry, product recommendation, escalation to human agent. Built on the WhatsApp Business API and Telegram Bot API with Flask backends.

  **Local LLM Deployments (Ollama)** — For clients with strict data privacy requirements, I deploys open-source LLMs (Llama 3, Mistral, Phi-3) on-premise using Ollama, ensuring no data leaves the client's infrastructure.

**Process Automation Workflows** — Connecting LLMs to business tools (email, CRM, calendar, spreadsheets) via API integrations to automate repetitive knowledge work: email drafting, report summarisation, data extraction from documents.

**AI Readiness Consulting** — Assessment of a client's data maturity, use-case prioritisation, vendor evaluation, and roadmap development for responsible AI adoption.`,
    architecture: `• Ollama for local LLM serving (Llama 3.1, Mistral 7B, Phi-3)
• LangChain / LlamaIndex for RAG pipeline orchestration
• Supabase (pgvector) for vector embeddings and retrieval
• Flask API layer connecting LLM outputs to business systems
• WhatsApp Business API / Telegram Bot API for channel delivery
• Supabase for conversation history and analytics`,
    results: `• 3 active chatbot deployments across hospitality, retail, and professional services clients
• RAG Q&A system serving 500+ queries/month on a technical documentation corpus
• Client NPS scores for chatbot interactions averaging 4.2/5
• 60% reduction in repetitive email enquiries for one client within 8 weeks of chatbot deployment
• Local LLM deployment achieving 95%+ of GPT-4 quality at zero API cost for a compliance-sensitive client`,
  },
];

/* ─────────────────────────── PROJECT CARD (collapsed) ─────────────────────────── */
function ProjectCard({ project, onExpand, expanded }) {
  return (
    <div
      id={project.id}
      className={`bg-gradient-to-br ${project.gradient} rounded-2xl border ${project.border} border-opacity-30 hover:border-opacity-60 transition-all duration-300 overflow-hidden`}
    >
      {/* Header (always visible) */}
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{project.emoji}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-block w-2 h-2 rounded-full ${project.statusColor}`} />
                <span className="text-xs text-gray-400 font-medium">{project.status}</span>
              </div>
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              <p className={`text-sm font-medium ${project.accent} mt-0.5`}>{project.tagline}</p>
            </div>
          </div>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-white bg-opacity-10 text-gray-200 rounded-full text-xs font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Impact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {project.impact.map((point) => (
            <div key={point} className="flex items-start gap-2 text-sm text-gray-300">
              <span className={`${project.accent} mt-0.5 flex-shrink-0`}>✓</span>
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Overview teaser */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-6">{project.overview.split('\n\n')[0]}</p>

        <button
          onClick={() => onExpand(project.id)}
          className={`flex items-center gap-2 ${project.accent} hover:opacity-80 transition font-medium text-sm`}
        >
          {expanded ? <><ChevronUp size={16} /> Collapse Case Study</> : <><ChevronDown size={16} /> Read Full Case Study</>}
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-white border-opacity-10 px-8 pb-8 space-y-8 pt-6">
          <Section title="The Problem" accent={project.accent} content={project.problem} />
          <Section title="The Solution" accent={project.accent} content={project.solution} />
          <Section title="Technical Architecture" accent={project.accent} content={project.architecture} />
          <Section title="Results & Impact" accent={project.accent} content={project.results} />
        </div>
      )}
    </div>
  );
}

function Section({ title, accent, content }) {
  return (
    <div>
      <h3 className={`text-lg font-bold ${accent} mb-3 uppercase tracking-wider text-sm`}>{title}</h3>
      <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
        {content.split('\n').map((line, i) => {
          if (line.startsWith('**') && line.endsWith('**')) {
            return <p key={i} className="font-bold text-white mt-4 mb-1">{line.replace(/\*\*/g, '')}</p>;
          }
          if (line.match(/^\*\*(.+)\*\*/)) {
            return (
              <p key={i} className="mt-3 mb-1">
                {line.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                  part.startsWith('**') ? <strong key={j} className="text-white">{part.replace(/\*\*/g, '')}</strong> : part
                )}
              </p>
            );
          }
          if (line.startsWith('• ')) {
            return <p key={i} className="pl-4">• {line.slice(2)}</p>;
          }
          return line ? <p key={i}>{line}</p> : <br key={i} />;
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */
export default function Projects() {
  const location = useLocation();
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  // Scroll to anchored project on load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setExpanded((prev) => ({ ...prev, [id]: true }));
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1425 100%)' }}>
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-40 border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vinamra.
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/ivinamra" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vinamra.duvey@gmail.com" className="text-gray-300 hover:text-cyan-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500 bg-opacity-20 text-cyan-300 border border-cyan-500 border-opacity-30">
              🚆 Railway AI & Automation Projects
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            A collection of AI, data engineering, and automation projects built at the intersection of railway operations expertise and modern technology. Each project addresses a real operational problem — designed, built, and deployed in a live metro environment.
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-8">
            {projects.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                onClick={(e) => { e.preventDefault(); document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' }); setExpanded((prev) => ({ ...prev, [p.id]: true })); }}
                className="px-4 py-2 bg-white bg-opacity-5 hover:bg-opacity-10 border border-white border-opacity-10 rounded-lg text-sm text-gray-300 hover:text-white transition flex items-center gap-2"
              >
                <span>{p.emoji}</span> {p.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Project cards */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={!!expanded[project.id]}
              onExpand={toggle}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-3xl p-12 border border-cyan-400 border-opacity-30">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Collaborating?</h2>
            <p className="text-gray-300 mb-8">
              All of these projects are built from real operational experience. If you're working on railway AI, predictive maintenance, or digital transformation — I'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:vinamra.duvey@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/ivinamra"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-cyan-400 border-opacity-50 rounded-lg font-semibold hover:bg-cyan-500 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Linkedin size={20} /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white border-opacity-10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>© 2025 Vinamra Duvey. Engineering meets intelligence.</p>
          <p className="text-sm">Dubai, UAE &nbsp;•&nbsp; vinamra.me</p>
        </div>
      </footer>
    </div>
  );
}
