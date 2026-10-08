import { Dna, Activity, Brain, Milk, Shield, HeartPulse } from 'lucide-react';

export const PRODUCTS_DATA = [
  {
    id: 'cancer-kit',
    name: 'HybriCure Dendritic Cell Vaccine (aHyC)',
    category: 'Cell-Based Immunotherapy & Oncology',
    sku: 'HYBRI-CURE-101',
    badge: 'Personalized Cancer Immunotherapy',
    icon: Dna,
    image: '/cancer-care-kit.jpg',
    
    shortDesc: 'Proprietary electrofusion-based dendritic cell vaccine (aHyC) combining autologous tumor and dendritic cells for personalized cancer treatment.',
    fullDesc: 'HybriCure uses proprietary electrofusion technology to produce immunohybridoma cells prepared from autologous tumor cells and dendritic cells to treat advanced cancer, including castration-resistant prostate cancer (CRPC). Developed in partnership with Celica Biomedical (Slovenia), it presents a broad repertoire of tumor-associated antigens to activate a patient-specific anti-tumor immune response with a 0% serious adverse events safety profile in reported clinical data.',
    specs: [
      { label: 'Technology Platform', value: 'Proprietary Electrofusion Technology' },
      { label: 'Therapeutic Class', value: 'Autologous Dendritic Cell Vaccine (aHyC)' },
      { label: 'Administration Route', value: 'Intradermal Administration' },
      { label: 'Marker Expression', value: '100% Dendritic Cell Marker Expression' },
      { label: 'Clinical Survival', value: 'Median Overall Survival: 58.8 Months (+33 Mo)' },
      { label: 'Safety Profile', value: '0% Serious Adverse Events Reported' }
    ],
    features: [
      'Patient-Specific Approach: Uses tumor material derived directly from the individual patient to capture full antigen information.',
      'Electrofusion Technology: Combines patient autologous tumor cells and professional antigen-presenting dendritic cells.',
      '100% DC Marker Expression: High expression of dendritic cell markers supports superior antigen presentation capabilities.',
      'Multi-Antigen Potential: Leverages the patient’s complete tumor-associated antigen repertoire rather than single targets.',
      'Intradermal Delivery: Specifically designed for convenient intradermal administration through the skin.',
      'Proven Clinical Survival: Reported 33-month median overall survival prolongation with a favorable safety profile.'
    ],
    usageGuidelines: [
      {
        step: "01",
        title: "Tumor Cell Extraction",
        desc: "Isolate patient-derived tumor cells to provide individual tumor-associated antigen information.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -1.png"
      },
      {
        step: "02",
        title: "Dendritic Cell Preparation",
        desc: "Prepare autologous dendritic cells to serve as professional antigen-presenting cells.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -2.png"
      },
      {
        step: "03",
        title: "Electrofusion Processing",
        desc: "Combine tumor cells and dendritic cells using proprietary electrofusion technology to form hybridoma cells (aHyC).",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -3.png"
      },
      {
        step: "04",
        title: "Quality & Marker Verification",
        desc: "Confirm 100% dendritic cell marker expression and cell viability before preparation.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -4.png"
      },
      {
        step: "05",
        title: "Intradermal Administration",
        desc: "Administer the personalized cell-based vaccine intradermally to stimulate a robust anti-tumor immune response.",
        image: "/SOP/HybriCure Dendritic Cell Vaccine -5.png"
      }
    ]
  },
  {
    id: 'rapid-milk-kit',
    name: 'HPV Rapid Test Kit (Cervical Cancer Screening)',
    category: 'Molecular Diagnostics & Rapid Testing',
    sku: 'HPV-RAPID-202',
    badge: 'PCR-Based Non-Invasive Screening',
    icon: Milk,
    image: '/rapid-milk-kit.jpg',

    shortDesc: 'A simple, non-invasive home-to-lab PCR-based HPV DNA rapid test for early cervical cancer screening and high-risk HPV detection.',
    fullDesc: 'Our HPV Rapid Test Kit provides accessible, non-invasive molecular screening for high-risk Human Papillomavirus (HPV-16, 18, 31, 33, 45, 52, 58) responsible for over 70% of cervical cancers. Designed to overcome screening barriers in India, the kit features a safe self-collection workflow, sample transport media, PCR amplification, secure digital reporting, and integrated follow-up care pathways.',
    specs: [
      { label: 'Diagnostic Method', value: 'PCR-Based Molecular DNA Amplification' },
      { label: 'Target Biomarkers', value: 'High-Risk HPV Types (16, 18, 31, 33, 45, 52, 58)' },
      { label: 'Sample Source', value: 'Non-Invasive Self-Collection Swab' },
      { label: 'Workflow Duration', value: 'Digital Results Delivered Within Days' },
      { label: 'Regulatory Path', value: 'CDSCO IVD Classification & NABL Lab Validation' },
      { label: 'Clinical Indication', value: 'Early Cervical Cancer & High-Risk HPV Screening' }
    ],
    features: [
      'Private Self-Collection: Allows users to take a non-invasive sample conveniently and privately without clinical discomfort.',
      'Transport Stabilization: Sample is preserved in transport-safe media to maintain integrity during shipment.',
      'High-Sensitivity PCR Detection: Molecular amplification accurately identifies persistent high-risk HPV DNA strains.',
      'Digital Health Reporting: Test results are processed and delivered securely via digital report within days.',
      'Integrated Follow-Up Care: Structured referral pathways and care coordination provided for positive test results.',
      'Overcomes Screening Barriers: Eliminates geographic, social stigma, and logistical barriers to cervical cancer screening.'
    ],
    usageGuidelines: [
      {
        step: "01",
        title: "Private Self-Collection",
        desc: "Collect sample using the provided private, non-invasive self-collection swab at home.",
        image: "/SOP/HPV Rapid Test Kit -1.jpeg"
      },
      {
        step: "02",
        title: "Sample Stabilization",
        desc: "Place the collected sample into the transport-safe preservation media tube.",
        image: "/SOP/HPV Rapid Test Kit -2.jpg"
      },
      {
        step: "03",
        title: "Lab Dispatch",
        desc: "Ship the preserved sample tube to our partner NABL-accredited diagnostic laboratory.",
        image: "/SOP/HPV Rapid Test Kit -3.jpg"
      },
      {
        step: "04",
        title: "PCR Amplification & Analysis",
        desc: "Laboratory extracts DNA and performs PCR-based molecular detection for high-risk HPV strains.",
        image: "/SOP/HPV Rapid Test Kit -4.jpg"
      },
      {
        step: "05",
        title: "Digital Report & Care",
        desc: "Receive secure digital results and access follow-up care coordination if further medical advice is needed.",
        image: "/SOP/HPV Rapid Test Kit -5.jpg"
      }
    ]
  },
  {
    id: 'neurology-diagnosis-kit',
    name: 'Rapid Molecular Screening Kit (Neurology & Oncology)',
    category: 'Neurology & Molecular Diagnostics',
    sku: 'NEURO-MOL-303',
    badge: 'Fast PCR Molecular Diagnostics',
    icon: Brain,
    image: '/neurology-diagnosis-kit.jpg',
    shortDesc: 'Rapid PCR-based molecular screening test for early detection of neurological and oncological disease-associated molecular biomarkers.',
    fullDesc: 'The Rapid Molecular Screening Kit delivers fast, accessible PCR-based diagnostic solutions in neurology and oncology. Designed to shorten the time from sample collection to accurate diagnostic results, this kit enables clinicians to identify disease-associated molecular biomarkers at an early stage, supporting precision medicine and targeted patient management.',
    specs: [
      { label: 'Kit Category', value: 'PCR Molecular Diagnostic Screening' },
      { label: 'Target Disciplines', value: 'Neurology & Oncology Biomarkers' },
      { label: 'Detection Method', value: 'PCR-Based Molecular Amplification' },
      { label: 'Primary Focus', value: 'Early Detection & Screening' },
      { label: 'Turnaround Time', value: 'Rapid Processing & Fast Results' },
      { label: 'Quality Standard', value: 'NABL Lab Certified & Regulatory Aligned' }
    ],
    features: [
      'Rapid PCR Detection: High-precision molecular amplification for immediate identification of key biomarkers.',
      'Neurology & Oncology Focus: Targeted screening for neurological and tumor-associated molecular alterations.',
      'Early Stage Identification: Identifies disease risk and biomarkers before advanced disease progression occurs.',
      'Shortened Sample-to-Result Time: Streamlined testing workflow designed to reduce diagnostic turnaround time.',
      'Personalized Medicine Integration: Supports patient-specific diagnosis and tailored treatment decision-making.',
      'Clinical & Lab Ready: Optimized for diagnostic lab partnerships, hospital networks, and clinical evaluations.'
    ],
    usageGuidelines: [
      {
        step: "01",
        title: "Sample Collection",
        desc: "Collect clinical sample following standardized diagnostic collection protocols.",
        image: "/SOP/Rapid Molecular Screening Kit-1.jpg"
      },
      {
        step: "02",
        title: "Sample Preparation",
        desc: "Place sample into the diagnostic extraction solution to isolate target nucleic acids.",
        image: "/SOP/Rapid Molecular Screening Kit-2.jpg"
      },
      {
        step: "03",
        title: "PCR Molecular Testing",
        desc: "Perform PCR amplification to detect specific neurological or oncological biomarkers.",
        image: "/SOP/Rapid Molecular Screening Kit -3.jpg"
      },
      {
        step: "04",
        title: "Result Interpretation",
        desc: "Evaluate amplified biomarker profiles using standard clinical diagnostic parameters.",
        image: "/SOP/Rapid Molecular Screening Kit-4.jpg"
      },
      {
        step: "05",
        title: "Clinical Documentation",
        desc: "Record findings for personalized patient treatment planning and clinical management.",
        image: "/SOP/Rapid Molecular Screening Kit-5.png"
      }
    ]
  }
];