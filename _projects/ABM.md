---
title: "AVSim: Realistic Simulation Framework for Airborne and Vector-Borne Disease Dynamics"
collection: projects
permalink: /projects/ABM
author_profile: true
classes: wide

# GitHub Pages requires a valid date (cannot be false)
date: 2025-01-01

# Turn off publication-style fields
venue: ""
excerpt_html: "<strong>AVSim</strong> is a realistic <strong>agent-based simulation framework</strong> designed to model airborne and vector-borne disease spread using real-world mobility patterns."
---

## Visual Overview

<iframe src="/files/ABM_poster.pdf#view=FitH" width="100%" height="600px" style="border: 1px solid #ccc; border-radius: 8px;">
</iframe>


## Overview

**AVSim** is a comprehensive, high-fidelity **agent-based simulation framework** developed to model the dynamics of **airborne** (e.g., COVID-19) and **vector-borne** (e.g., dengue) diseases.  
Unlike traditional compartment models, AVSim integrates **real-world GPS mobility traces**, **spectral clustering**, and **graph-theoretic behavior analysis** to recreate realistic human movement and interactions.

The system models both:
- **Personal-level movement** (home, work, transport, clustered mobility)  
- **Community-level environments** (zones, cities, transportation networks)  

This results in a simulation platform capable of analyzing **policy interventions**, **disease propagation**, and **high-risk behavior patterns** under realistic conditions.

---

## Key Features

### 🔍 1. Real-World Mobility Modeling  
AVSim incorporates real GPS data from participants, processes motion patterns using **DBSCAN** and **spectral clustering**, and reconstructs realistic daily movement through probabilistic mobility matrices.

### 🏥 2. Airborne Disease Simulation  
Includes:
- Close-contact transmission modeling  
- Quarantine strategies  
- Vaccination rollout  
- PCR testing and contact tracing  
- Adjustable susceptibility and immunity profiles  

### 🦟 3. Vector-Borne Disease Simulation  
Implements:
- Patch-based Aedes mosquito density modeling  
- Environment-dependent incubation  
- Temperature-driven vector lifecycle  
- Weekly control interventions (spraying, hotspot elimination)

### 🚌 4. Transportation-Aware Disease Spread  
Simulates:
- Inter-city and intra-city buses  
- Private vs public transport  
- High-risk exposure zones during travel  

### 📊 5. Policy Evaluation  
AVSim supports analysis of:
- Social distancing  
- Vaccination timing and coverage  
- Quarantine effectiveness  
- Vector-control strategies  
- Hotspot identification  

---

## Highlights

- Uses **real GPS mobility** from 100+ participants across 13 occupations  
- Identifies hidden behavioral subtypes using **unsupervised clustering**  
- Models **COVID-19** and **dengue** with high spatial and behavioral granularity  
- Integrates AI, signal modeling, epidemiology, and transport simulation  
- Fully modular framework adaptable to new diseases and environments  

---

## Keywords

**Agent-Based Modeling**, **Epidemiology**, **Mobility Analysis**, **Complex Systems**,  
**Simulation Tools**, **AI for Public Health**, **Vector-Borne Diseases**, **COVID-19 Modeling**

---

## Resources

📄 <a href="/files/2502.06212v2.pdf" target="_blank" rel="noopener noreferrer"><strong>Download Full Technical Paper (PDF)</strong></a>  
📁 <a href="https://github.com/Pandula-2000" target="_blank" rel="noope_
