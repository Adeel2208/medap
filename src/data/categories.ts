export interface Product {
  name: string
  /** Model designation(s), e.g. 'G3D / G3L / G3H' */
  model?: string
  /** Regulatory or quality note, e.g. 'FDA 510(K) Approved' */
  badge?: string
  /** Path under /public, e.g. '/products/intensive-care/cardiac-monitor.webp' */
  image?: string
}

export interface Category {
  id: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  /** Cover photo shown on category cards and page heros */
  image?: string
  products: Product[]
}

// Product photography lives in /public/products/<category-id>/.

export const categories: Category[] = [
  {
    id: 'operation-theatre',
    title: 'Operation Theatre Solutions',
    shortTitle: 'Operation Theatre Solutions',
    description: 'Complete OT infrastructure built for surgical precision',
    longDescription:
      'Everything a modern operating room needs — tables, lights, laminar flow, suction and surgical instruments — supplied, installed and serviced for precision, sterility and uptime.',
    image: '/products/operation-theatre/cover.webp',
    products: [
      { name: 'Operation Theatre Table', image: '/products/operation-theatre/ot-table.webp' },
      { name: 'Operation Theatre Light', image: '/products/operation-theatre/ot-light.webp' },
      {
        name: 'Surgical Suction Units',
        model: 'Vaculine Maxi',
        image: '/products/operation-theatre/suction-unit.webp',
      },
      { name: 'Stretcher Trolley', image: '/products/hospital-furniture/stretcher-trolley.webp' },
      {
        name: 'Video Laryngoscope',
        model: 'CR-31 · VL3R · CL4R',
        image: '/products/operation-theatre/video-laryngoscope.webp',
      },
      { name: 'Video Bronchoscope', model: 'VL3S', image: '/products/operation-theatre/video-bronchoscope.webp' },
      { name: 'X-Ray Illuminators with LED', image: '/products/operation-theatre/xray-illuminator.webp' },
      { name: 'Laminar Flow Systems', image: '/products/operation-theatre/laminar-flow.webp' },
      {
        name: 'Surgical Instruments & Hallowers',
        image: '/products/operation-theatre/surgical-instruments.webp',
      },
      { name: 'OT Pendants', image: '/products/operation-theatre/ot-pendant.webp' },
    ],
  },
  {
    id: 'intensive-care',
    title: 'Intensive Care Solutions',
    shortTitle: 'Intensive Care Solutions',
    description: 'Critical care monitoring and life-support equipment',
    longDescription:
      'Advanced monitoring, infusion and resuscitation equipment for intensive care, coronary care and emergency departments — from bedside monitors to central stations and crash carts.',
    image: '/products/intensive-care/cover.webp',
    products: [
      {
        name: 'Cardiac / Patient Monitors',
        model: 'G3D / G3L / G3H / G3G',
        badge: 'FDA 510(K) Approved',
        image: '/products/intensive-care/cardiac-monitor.webp',
      },
      {
        name: 'Vital Sign / Pulse Oximeter',
        model: 'G3R',
        image: '/products/intensive-care/vital-sign-pulse-oximeter.webp',
      },
      {
        name: 'Pulse Oximeter (Hand Held)',
        model: 'G1B',
        image: '/products/intensive-care/pulse-oximeter-handheld.webp',
      },
      { name: 'Syringe Pumps', model: 'SP50 / SP50 Pro', image: '/products/intensive-care/syringe-pump.webp' },
      { name: 'Infusion Pumps', model: 'VP50 / VP50 Pro', image: '/products/intensive-care/infusion-pump.webp' },
      { name: 'Defibrillator with AED', model: 'i2 / i6', image: '/products/intensive-care/defibrillator-aed.webp' },
      { name: 'ECG Machine 3/6/12 Channels', image: '/products/intensive-care/ecg-machine.webp' },
      { name: 'ICU Beds (3 / 5 Function)', image: '/products/intensive-care/icu-bed.webp' },
      { name: 'Blood Warmer', image: '/products/intensive-care/blood-warmer.webp' },
      { name: 'Stethoscopes', image: '/products/intensive-care/stethoscope.webp' },
      {
        name: 'Suction Units',
        model: 'Vaculine Maxi',
        image: '/products/operation-theatre/suction-unit.webp',
      },
      { name: 'Dialysis Chair', image: '/products/hospital-furniture/dialysis-chair.webp' },
      { name: 'Central Monitoring System', image: '/products/intensive-care/central-monitoring.webp' },
      { name: 'Oxygen Flowmeters', image: '/products/medical-gas-pipeline/oxygen-flowmeter.webp' },
      { name: 'Nebulizers', image: '/products/intensive-care/nebulizer.webp' },
      { name: 'Crash Carts', image: '/products/intensive-care/crash-cart.webp' },
    ],
  },
  {
    id: 'neonatal-nursery',
    title: 'Neonatal & Nursery Solutions',
    shortTitle: 'Neonatal & Nursery Solutions',
    description: 'Specialised care for newborns and premature infants',
    longDescription:
      'Complete newborn care equipment — incubators, warmers, phototherapy and resuscitation systems designed to give the smallest patients the safest possible start.',
    image: '/products/neonatal-nursery/cover.webp',
    products: [
      { name: 'Infant / Baby Incubator', model: 'BIN-4000B', image: '/products/neonatal-nursery/infant-incubator.webp' },
      { name: 'Infant / Baby Warmer', model: 'BRW-4000B', image: '/products/neonatal-nursery/infant-warmer.webp' },
      { name: 'Pulse Oximeters', model: 'G3R / G1B', image: '/products/intensive-care/vital-sign-pulse-oximeter.webp' },
      { name: 'Phototherapy Units', image: '/products/neonatal-nursery/phototherapy-unit.webp' },
      { name: 'Neonatal CPAP', image: '/products/neonatal-nursery/neonatal-cpap.webp' },
      { name: 'Neonatal Resuscitation Units', image: '/products/neonatal-nursery/neonatal-resuscitation.webp' },
      { name: 'Transport Incubators', image: '/products/neonatal-nursery/transport-incubator.webp' },
      { name: 'Baby Bassinets', image: '/products/neonatal-nursery/baby-bassinet.webp' },
    ],
  },
  {
    id: 'obstetrics-gynecology',
    title: 'Obstetrics & Gynecology Solutions',
    shortTitle: 'Obstetrics & Gynecology Solutions',
    description: 'Maternal care from examination through delivery',
    longDescription:
      'Equipment for the full maternal journey — ultrasound, fetal monitoring, examination and delivery systems built for comfort, accuracy and clinical confidence.',
    image: '/products/obstetrics-gynecology/cover.webp',
    products: [
      { name: 'CTG / Fetal Monitors', model: 'G6A / G6B / G6C', image: '/products/obstetrics-gynecology/ctg-fetal-monitor.webp' },
      { name: 'Blood Pressure Apparatus', image: '/products/obstetrics-gynecology/bp-apparatus.webp' },
      { name: 'Ultrasound Machine', image: '/products/obstetrics-gynecology/ultrasound-machine.webp' },
      { name: 'Delivery Beds', image: '/products/obstetrics-gynecology/delivery-bed.webp' },
      { name: 'Gynecology Examination Tables', image: '/products/obstetrics-gynecology/gyne-exam-table.webp' },
      { name: 'Obstetric Tables', image: '/products/obstetrics-gynecology/obstetric-table.webp' },
      { name: 'Examination Lights', image: '/products/obstetrics-gynecology/examination-light.webp' },
      { name: 'Weight Scale', image: '/products/obstetrics-gynecology/weight-scale.webp' },
    ],
  },
  {
    id: 'cssd',
    title: 'CSSD Solutions',
    shortTitle: 'CSSD Solutions',
    description: 'Sterile processing and infection prevention',
    longDescription:
      'End-to-end central sterile services solutions — sterilizers, washer disinfectors, ultrasonic cleaners and CSSD furniture for validated, traceable reprocessing.',
    image: '/products/cssd/cover.webp',
    products: [
      { name: 'Steam Sterilizers', image: '/products/cssd/steam-sterilizer.webp' },
      { name: 'Low Temperature Sterilizers', image: '/products/cssd/low-temp-sterilizer.webp' },
      { name: 'Washer Disinfectors', image: '/products/cssd/washer-disinfector.webp' },
      { name: 'Ultrasonic Cleaners', image: '/products/cssd/ultrasonic-cleaner.webp' },
      { name: 'Packing Tables', image: '/products/cssd/packing-table.webp' },
      { name: 'Instrument Storage Cabinets', image: '/products/cssd/instrument-cabinet.webp' },
      { name: 'Sterilization Containers', image: '/products/cssd/sterilization-container.webp' },
      { name: 'CSSD Trolleys', image: '/products/cssd/cssd-trolley.webp' },
    ],
  },
  {
    id: 'medical-gas-pipeline',
    title: 'Medical Gas Pipeline Solutions',
    shortTitle: 'Medical Gas Pipeline Solutions',
    description: 'Turnkey medical gas infrastructure, source to outlet',
    longDescription:
      'Design, supply, installation and commissioning of complete medical gas pipeline systems — from compressors and manifolds through colour-coded copper networks to bedside outlets.',
    image: '/products/medical-gas-pipeline/cover.webp',
    products: [
      { name: 'Medical Gas Outlets', image: '/products/medical-gas-pipeline/gas-outlets.webp' },
      { name: 'Bed Head Panel', image: '/products/medical-gas-pipeline/bed-head-panel.webp' },
      { name: 'Oxygen Flowmeter', image: '/products/medical-gas-pipeline/oxygen-flowmeter.webp' },
      { name: 'Vacuum Regulator / Venturi', image: '/products/medical-gas-pipeline/suction-regulator.webp' },
      { name: 'Valve Box', image: '/products/medical-gas-pipeline/valve-box.webp' },
      { name: 'Gas Alarm Systems', image: '/products/medical-gas-pipeline/gas-alarm.webp' },
      { name: 'Gas Manifolds', image: '/products/medical-gas-pipeline/gas-manifold.webp' },
      { name: 'Medical Air Compressors', image: '/products/medical-gas-pipeline/air-compressor.webp' },
      { name: 'Copper Pipe (All Sizes)', image: '/products/medical-gas-pipeline/copper-pipe.webp' },
      { name: 'Medical Gas Cylinders', image: '/products/medical-gas-pipeline/gas-cylinder.webp' },
      { name: 'Vacuum Pumps', image: '/products/medical-gas-pipeline/vacuum-pump.webp' },
      { name: 'Ceiling Pendants', image: '/products/medical-gas-pipeline/ceiling-pendant.webp' },
    ],
  },
  {
    id: 'hospital-furniture',
    title: 'Hospital Furniture Solutions',
    shortTitle: 'Hospital Furniture Solutions',
    description: 'Durable ward, ICU and OT furniture throughout',
    longDescription:
      'Hospital furniture engineered for daily clinical use — beds, trolleys, cabinets and stainless steel units built to last across wards, ICUs, theatres and waiting areas.',
    image: '/products/hospital-furniture/cover.webp',
    products: [
      { name: 'Hospital Beds', image: '/products/intensive-care/icu-bed.webp' },
      { name: 'Patient Stretchers', image: '/products/hospital-furniture/stretcher-trolley.webp' },
      { name: 'Dialysis Chair', image: '/products/hospital-furniture/dialysis-chair.webp' },
      { name: 'OT Furniture', image: '/products/hospital-furniture/ot-table-furniture.webp' },
      { name: 'Examination Tables', image: '/products/hospital-furniture/examination-table.webp' },
      { name: 'Trolleys', image: '/products/hospital-furniture/utility-trolley.webp' },
      { name: 'Bedside Lockers', image: '/products/hospital-furniture/bedside-locker.webp' },
      { name: 'Overbed Tables', image: '/products/hospital-furniture/overbed-table.webp' },
      { name: 'Waiting Chairs', image: '/products/hospital-furniture/waiting-chair.webp' },
      { name: 'Doctor Tables', image: '/products/hospital-furniture/doctor-table.webp' },
      { name: 'Medicine Cabinets', image: '/products/hospital-furniture/medicine-cabinet.webp' },
      { name: 'Instrument Cabinets', image: '/products/hospital-furniture/hf-instrument-cabinet.webp' },
      { name: 'Stainless Steel Furniture', image: '/products/hospital-furniture/stainless-furniture.webp' },
      { name: 'Ward Furniture', image: '/products/hospital-furniture/ward-furniture.webp' },
      { name: 'ICU Furniture', image: '/products/hospital-furniture/icu-furniture.webp' },
    ],
  },
]

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

/** Total number of products across all solution families. */
export const totalProductCount = categories.reduce((sum, c) => sum + c.products.length, 0)

/** How many products currently have real photography. */
export const productsWithImages = categories.reduce(
  (sum, c) => sum + c.products.filter((p) => p.image).length,
  0
)
