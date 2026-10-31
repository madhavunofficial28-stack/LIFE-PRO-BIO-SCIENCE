import { Dna, Activity, Brain, Milk, Shield, HeartPulse } from 'lucide-react';

export const PRODUCTS_DATA = [
  {
    id: 'saliva-cancer-detection',
    name: 'Saliva-Based Cancer Biomarker Detection by Cyclic Voltammetry',
    category: 'Electrochemical Biosensing & Cancer Screening',
    sku: 'SALIVA-CANCER-101',
    badge: 'Non-Invasive Saliva Screening',
    icon: Activity,
    image: '/Saliva-Based Cancer Biomarker Detection by Cyclic Voltammetry.jpg',
    
    shortDesc: 'An electrochemical biosensing platform designed to detect cancer-associated biomarkers through measurable changes in electrical signals using saliva.',
    fullDesc: 'Utilises Cyclic Voltammetry (CV), an electrochemical technique measuring changes in current as applied voltage varies. The system integrates screen-printed carbon electrodes, functionalised multi-walled carbon nanotubes (MWCNTs), DNA recognition probes, and a PVA-glutaraldehyde polymer matrix to detect target breast, cervical, and prostate cancer biomarkers in saliva for convenient screening.',
    specs: [
      { label: 'Technology Platform', value: 'Cyclic Voltammetry (CV) Biosensing' },
      { label: 'Sensor Base', value: 'Screen-Printed Carbon Electrode' },
      { label: 'Nanomaterial Surface', value: 'Functionalised Multi-Walled Carbon Nanotubes' },
      { label: 'Recognition Element', value: 'DNA Recognition Probe / Antibodies / Aptamers' },
      { label: 'Sample Specimen', value: 'Non-Invasive Saliva Sample' },
      { label: 'Target Oncological Focus', value: 'Breast, Cervical & Prostate Cancer Biomarkers' }
    ],
    features: [
      'Convenient Testing Workflows: Potential for simpler sample handling and non-invasive saliva collection.',
      'Rapid Measurement: Electrochemical signals can be measured quickly for fast analytical results.',
      'Portable Technology Potential: Screen-printed electrodes are suitable for compact sensor formats.',
      'Biomarker-Specific Testing: Recognition elements designed for defined molecular or protein targets.',
      'Target Biomarker Coverage: Detects key markers including BRCA1/2, HER2, HPV16/18, PSA, PCA3, and microRNAs.',
      'Point-of-Care Potential: Explores future use outside central laboratories under performance requirements.'
    ],
    usageGuidelines: [
      {
        step: "01",
        title: "Target Biomarker Identification",
        desc: "Design recognition elements (DNA probes, antibodies, or aptamers) specific to target cancer biomarkers.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -1.png"
      },
      {
        step: "02",
        title: "Sensor Assembly & Functionalisation",
        desc: "Assemble sensing layers on screen-printed carbon electrodes using functionalised carbon nanotubes and polymer matrix.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -2.png"
      },
      {
        step: "03",
        title: "Saliva Sample Application",
        desc: "Introduce the non-invasive saliva sample to the biosensing interface for target binding.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -3.png"
      },
      {
        step: "04",
        title: "Cyclic Voltammetry Measurement",
        desc: "Vary applied voltage and measure electrical current changes corresponding to biomarker interactions.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -4.png"
      },
      {
        step: "05",
        title: "Result Interpretation",
        desc: "Apply validated interpretation methods to convert the measured electrochemical signal into a meaningful test result.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -5.png"
      }
    ]
  },
  {
    id: 'neurological-biomarker-detection',
    name: 'Rapid Biomarker Detection for Neurological Disorders',
    category: 'Neurology & Rapid Screening',
    sku: 'NEURO-BIO-202',
    badge: 'Rapid Neurological Assessment',
    icon: Brain,
    image: '/Rapid Biomarker Detection for Neurological Disorders - PRODUCT 2.jpg',
    shortDesc: 'Rapid biomarker-based screening solutions designed to identify biological markers associated with neurological conditions for timely clinical evaluation.',
    fullDesc: 'Addressing nervous system conditions that affected an estimated 3.4 billion people (43% of the global population) in 2021. This solution focuses on identifying biological markers for Alzheimer’s disease, Parkinson’s disease, stroke, epilepsy, multiple sclerosis, migraine, and traumatic brain injury across all age groups to support timely medical evaluation.',
    specs: [
      { label: 'Diagnostic Focus', value: 'Nervous System & Neurological Disorders' },
      { label: 'Global Impact Context', value: '3.4 Billion Affected Worldwide (2021 Estimate)' },
      { label: 'Target Conditions', value: 'Alzheimer’s, Parkinson’s, Stroke, Epilepsy, MS, Migraine, TBI' },
      { label: 'Key Biomarkers', value: 'p-tau217, alpha-synuclein, GFAP, NfL, CGRP, UCH-L1' },
      { label: 'Primary Objective', value: 'Timely Clinical Evaluation & Accessible Screening' },
      { label: 'Age Group Coverage', value: 'Children, Adolescents, Adults & Older Adults' }
    ],
    features: [
      'Early Assessment Support: Helps identify concerning symptoms early to support timely medical evaluation.',
      'Comprehensive Condition Coverage: Targets Alzheimer’s, Parkinson’s, stroke, epilepsy, MS, migraine, and TBI.',
      'Advanced Biomarker Tracking: Focuses on p-tau, alpha-synuclein, NfL, GFAP, UCH-L1, and genetic variants.',
      'Multi-Age Group Relevance: Addresses neurological health needs across children, adults, and seniors.',
      'Convenient Testing Pathways: Designed to contribute to more accessible screening workflows.',
      'Enhanced Clinical Guidance: Supports healthcare professionals with rapid biological marker insights.'
    ],
    usageGuidelines: [
      {
        step: "01",
        title: "Condition & Risk Assessment",
        desc: "Identify initial symptoms and evaluate neurological assessment requirements across appropriate age groups.",
        image: "/SOP/HPV Rapid Test Kit -1.jpeg"
      },
      {
        step: "02",
        title: "Biological Sample Collection",
        desc: "Collect appropriate sample specimens for neurological biomarker analysis.",
        image: "/SOP/HPV Rapid Test Kit -2.jpg"
      },
      {
        step: "03",
        title: "Target Biomarker Screening",
        desc: "Analyze targeted biological markers such as p-tau, alpha-synuclein, NfL, GFAP, and CGRP.",
        image: "/SOP/HPV Rapid Test Kit -3.jpg"
      },
      {
        step: "04",
        title: "Data Correlation",
        desc: "Correlate identified biomarker profiles with specific neurological condition indicators.",
        image: "/SOP/HPV Rapid Test Kit -4.jpg"
      },
      {
        step: "05",
        title: "Clinical Evaluation Support",
        desc: "Provide timely diagnostic insights to assist qualified healthcare professionals in patient care planning.",
        image: "/SOP/HPV Rapid Test Kit -5.jpg"
      }
    ]
  },
  {
    id: 'fertility-solutions',
    name: 'Male and Female Fertility Solutions',
    category: 'Reproductive Health & Fertility Care',
    sku: 'FERTILITY-CARE-303',
    badge: 'Reproductive Health Assessment',
    icon: HeartPulse,
    image: '/Male and Female Fertility Solutions.jpg',
    shortDesc: 'Comprehensive solutions supporting fertility assessment and reproductive health evaluation for both men and women.',
    fullDesc: 'Focused on advancing reproductive health awareness and accessible evaluation. Covers female fertility factors including ovarian function, hormonal balance, ovulation, and menstrual health, alongside male fertility factors including sperm health (concentration, movement, shape), hormonal health, and reproductive function for individuals and couples.',
    specs: [
      { label: 'Target Domain', value: 'Male & Female Reproductive Health' },
      { label: 'Female Focus Areas', value: 'Ovarian Function, Hormones, Ovulation, Menstrual Health' },
      { label: 'Male Focus Areas', value: 'Sperm Health (Concentration, Movement, Shape) & Hormones' },
      { label: 'Primary Objective', value: 'Accessible Assessment & Informed Decision-Making' },
      { label: 'Target Beneficiaries', value: 'Individuals & Couples Planning Families or Seeking Insights' },
      { label: 'Professional Support', value: 'Designed to Guide Consultations with Healthcare Professionals' }
    ],
    features: [
      'Dual Reproductive Focus: Tailored assessment solutions for both female and male fertility health.',
      'Female Health Evaluation: Covers ovarian function, hormonal balance, ovulation, and menstrual patterns.',
      'Male Health Assessment: Evaluates sperm concentration, movement, shape, and reproductive hormones.',
      'Accessible Care Journey: Designed to support individuals and couples planning to start a family.',
      'Informed Decision Making: Encourages meaningful conversations with qualified healthcare professionals.',
      'Holistic Understanding: Addresses multiple factors influencing reproductive success and wellness.'
    ],
    usageGuidelines: [
      {
        step: "01",
        title: "Initial Consultation & Goal Setting",
        desc: "Determine reproductive health objectives and identify specific evaluation needs for individuals or couples.",
        image: "/SOP/Rapid Molecular Screening Kit-1.jpg"
      },
      {
        step: "02",
        title: "Parameter Selection",
        desc: "Select targeted assessment parameters covering female ovarian/hormonal function or male sperm health.",
        image: "/SOP/Rapid Molecular Screening Kit-2.jpg"
      },
      {
        step: "03",
        title: "Sample & Profile Evaluation",
        desc: "Evaluate key reproductive metrics including hormonal balance, ovulatory function, and sperm characteristics.",
        image: "/SOP/Rapid Molecular Screening Kit -3.jpg"
      },
      {
        step: "04",
        title: "Comprehensive Analysis",
        desc: "Review reproductive assessment findings in the context of individual health and medical history.",
        image: "/SOP/Rapid Molecular Screening Kit-4.jpg"
      },
      {
        step: "05",
        title: "Healthcare Guidance & Next Steps",
        desc: "Use structured insights to support informed discussions and consultations with qualified healthcare professionals.",
        image: "/SOP/Rapid Molecular Screening Kit-5.png"
      }
    ]
  }
];