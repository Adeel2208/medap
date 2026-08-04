export interface Product {
  name: string
  /** Model designation(s), e.g. 'G3D / G3L / G3H' */
  model?: string
  /** Regulatory or quality note, e.g. 'FDA 510(K) Approved' */
  badge?: string
  /** Path under /public, e.g. '/products/intensive-care/cardiac-monitor.jpeg' */
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
    shortTitle: 'Operation Theatre',
    description: 'Complete OT infrastructure built for surgical precision',
    longDescription:
      'Everything a modern operating room needs — tables, lights, laminar flow, suction and surgical instruments — supplied, installed and serviced for precision, sterility and uptime.',
    image: '/products/operation-theatre/cover.png',
    products: [
      { name: 'Operation Theatre Table', image: '/products/operation-theatre/ot-table.png' },
      { name: 'Operation Theatre Light', image: '/products/operation-theatre/ot-light.png' },
      {
        name: 'Surgical Suction Units',
        model: 'Vaculine Maxi',
        image: '/products/operation-theatre/suction-unit.png',
      },
      { name: 'Stretcher Trolley', image: '/products/hospital-furniture/stretcher-trolley.jpeg' },
      {
        name: 'Video Laryngoscope',
        model: 'CR-31 · VL3R · CL4R',
        image: '/products/operation-theatre/video-laryngoscope.png',
      },
      { name: 'Video Bronchoscope', model: 'VL3S', image: '/products/operation-theatre/video-bronchoscope.jpeg' },
      { name: 'X-Ray Illuminators with LED', image: '/products/operation-theatre/xray-illuminator.png' },
      { name: 'Laminar Flow Systems', image: '/products/operation-theatre/laminar-flow.png' },
      {
        name: 'Surgical Instruments & Hallowers',
        image: '/products/operation-theatre/surgical-instruments.png',
      },
      { name: 'OT Pendants', image: '/products/operation-theatre/ot-pendant.png' },
    ],
  },
  {
    id: 'intensive-care',
    title: 'Intensive Care Solutions',
    shortTitle: 'ICU, CCU & ER',
    description: 'Critical care monitoring and life-support equipment',
    longDescription:
      'Advanced monitoring, infusion and resuscitation equipment for intensive care, coronary care and emergency departments — from bedside monitors to central stations and crash carts.',
    image: '/products/intensive-care/cover.png',
    products: [
      {
        name: 'Cardiac / Patient Monitors',
        model: 'G3D / G3L / G3H / G3G',
        badge: 'FDA 510(K) Approved',
        image: '/products/intensive-care/cardiac-monitor.jpeg',
      },
      {
        name: 'Vital Sign / Pulse Oximeter',
        model: 'G3R',
        image: '/products/intensive-care/vital-sign-pulse-oximeter.jpeg',
      },
      {
        name: 'Pulse Oximeter (Hand Held)',
        model: 'G1B',
        image: '/products/intensive-care/pulse-oximeter-handheld.jpg',
      },
      { name: 'Syringe Pumps', model: 'SP50 / SP50 Pro', image: '/products/intensive-care/syringe-pump.png' },
      { name: 'Infusion Pumps', model: 'VP50 / VP50 Pro', image: '/products/intensive-care/infusion-pump.png' },
      { name: 'Defibrillator with AED', model: 'i2 / i6', image: '/products/intensive-care/defibrillator-aed.jpeg' },
      { name: 'ECG Machine 3/6/12 Channels', image: '/products/intensive-care/ecg-machine.png' },
      { name: 'ICU Beds (3 / 5 Function)', image: '/products/intensive-care/icu-bed.png' },
      { name: 'Blood Warmer', image: '/products/intensive-care/blood-warmer.jpeg' },
      { name: 'Stethoscopes', image: '/products/intensive-care/stethoscope.jpeg' },
      {
        name: 'Suction Units',
        model: 'Vaculine Maxi',
        image: '/products/operation-theatre/suction-unit.png',
      },
      { name: 'Dialysis Chair', image: '/products/hospital-furniture/dialysis-chair.jpeg' },
      { name: 'Central Monitoring System', image: '/products/intensive-care/central-monitoring.png' },
      { name: 'Oxygen Flowmeters', image: '/products/medical-gas-pipeline/oxygen-flowmeter.jpeg' },
      { name: 'Nebulizers', image: '/products/intensive-care/nebulizer.png' },
      { name: 'Crash Carts', image: '/products/intensive-care/crash-cart.png' },
    ],
  },
  {
    id: 'neonatal-nursery',
    title: 'Neonatal & Nursery Solutions',
    shortTitle: 'Neonatal & Nursery',
    description: 'Specialised care for newborns and premature infants',
    longDescription:
      'Complete newborn care equipment — incubators, warmers, phototherapy and resuscitation systems designed to give the smallest patients the safest possible start.',
    image: '/products/neonatal-nursery/cover.png',
    products: [
      { name: 'Infant / Baby Incubator', model: 'BIN-4000B', image: '/products/neonatal-nursery/infant-incubator.png' },
      { name: 'Infant / Baby Warmer', model: 'BRW-4000B', image: '/products/neonatal-nursery/infant-warmer.jpeg' },
      { name: 'Pulse Oximeters', model: 'G3R / G1B', image: '/products/intensive-care/vital-sign-pulse-oximeter.jpeg' },
      { name: 'Phototherapy Units', image: '/products/neonatal-nursery/phototherapy-unit.png' },
      { name: 'Neonatal CPAP', image: '/products/neonatal-nursery/neonatal-cpap.png' },
      { name: 'Neonatal Resuscitation Units', image: '/products/neonatal-nursery/neonatal-resuscitation.png' },
      { name: 'Transport Incubators', image: '/products/neonatal-nursery/transport-incubator.png' },
      { name: 'Baby Bassinets', image: '/products/neonatal-nursery/baby-bassinet.png' },
    ],
  },
  {
    id: 'obstetrics-gynecology',
    title: 'Obstetrics & Gynecology Solutions',
    shortTitle: 'Obs & Gyne',
    description: 'Maternal care from examination through delivery',
    longDescription:
      'Equipment for the full maternal journey — ultrasound, fetal monitoring, examination and delivery systems built for comfort, accuracy and clinical confidence.',
    image: '/products/obstetrics-gynecology/cover.png',
    products: [
      { name: 'CTG / Fetal Monitors', model: 'G6A / G6B / G6C', image: '/products/obstetrics-gynecology/ctg-fetal-monitor.png' },
      { name: 'Blood Pressure Apparatus', image: '/products/obstetrics-gynecology/bp-apparatus.jpg' },
      { name: 'Ultrasound Machine', image: '/products/obstetrics-gynecology/ultrasound-machine.png' },
      { name: 'Delivery Beds', image: '/products/obstetrics-gynecology/delivery-bed.png' },
      { name: 'Gynecology Examination Tables', image: '/products/obstetrics-gynecology/gyne-exam-table.png' },
      { name: 'Obstetric Tables', image: '/products/obstetrics-gynecology/obstetric-table.png' },
      { name: 'Examination Lights', image: '/products/obstetrics-gynecology/examination-light.png' },
      { name: 'Weight Scale', image: '/products/obstetrics-gynecology/weight-scale.png' },
    ],
  },
  {
    id: 'cssd',
    title: 'CSSD Solutions',
    shortTitle: 'CSSD',
    description: 'Sterile processing and infection prevention',
    longDescription:
      'End-to-end central sterile services solutions — sterilizers, washer disinfectors, ultrasonic cleaners and CSSD furniture for validated, traceable reprocessing.',
    image: '/products/cssd/cover.png',
    products: [
      { name: 'Steam Sterilizers', image: '/products/cssd/steam-sterilizer.png' },
      { name: 'Low Temperature Sterilizers', image: '/products/cssd/low-temp-sterilizer.png' },
      { name: 'Washer Disinfectors', image: '/products/cssd/washer-disinfector.png' },
      { name: 'Ultrasonic Cleaners', image: '/products/cssd/ultrasonic-cleaner.png' },
      { name: 'Packing Tables', image: '/products/cssd/packing-table.png' },
      { name: 'Instrument Storage Cabinets', image: '/products/cssd/instrument-cabinet.png' },
      { name: 'Sterilization Containers', image: '/products/cssd/sterilization-container.png' },
      { name: 'CSSD Trolleys', image: '/products/cssd/cssd-trolley.png' },
    ],
  },
  {
    id: 'medical-gas-pipeline',
    title: 'Medical Gas Pipeline Solutions',
    shortTitle: 'Medical Gas (MGPS)',
    description: 'Turnkey medical gas infrastructure, source to outlet',
    longDescription:
      'Design, supply, installation and commissioning of complete medical gas pipeline systems — from compressors and manifolds through colour-coded copper networks to bedside outlets.',
    image: '/products/medical-gas-pipeline/cover.png',
    products: [
      { name: 'Medical Gas Outlets', image: '/products/medical-gas-pipeline/gas-outlets.png' },
      { name: 'Bed Head Panel', image: '/products/medical-gas-pipeline/bed-head-panel.png' },
      { name: 'Oxygen Flowmeter', image: '/products/medical-gas-pipeline/oxygen-flowmeter.jpeg' },
      { name: 'Vacuum Regulator / Venturi', image: '/products/medical-gas-pipeline/suction-regulator.jpeg' },
      { name: 'Valve Box', image: '/products/medical-gas-pipeline/valve-box.jpeg' },
      { name: 'Gas Alarm Systems', image: '/products/medical-gas-pipeline/gas-alarm.jpeg' },
      { name: 'Gas Manifolds', image: '/products/medical-gas-pipeline/gas-manifold.png' },
      { name: 'Medical Air Compressors', image: '/products/medical-gas-pipeline/air-compressor.png' },
      { name: 'Copper Pipe (All Sizes)', image: '/products/medical-gas-pipeline/copper-pipe.jpeg' },
      { name: 'Medical Gas Cylinders', image: '/products/medical-gas-pipeline/gas-cylinder.jpeg' },
      { name: 'Vacuum Pumps', image: '/products/medical-gas-pipeline/vacuum-pump.png' },
      { name: 'Ceiling Pendants', image: '/products/medical-gas-pipeline/ceiling-pendant.png' },
    ],
  },
  {
    id: 'hospital-furniture',
    title: 'Hospital Furniture Solutions',
    shortTitle: 'Hospital Furniture',
    description: 'Durable ward, ICU and OT furniture throughout',
    longDescription:
      'Hospital furniture engineered for daily clinical use — beds, trolleys, cabinets and stainless steel units built to last across wards, ICUs, theatres and waiting areas.',
    image: '/products/hospital-furniture/cover.png',
    products: [
      { name: 'Hospital Beds', image: '/products/intensive-care/icu-bed.png' },
      { name: 'Patient Stretchers', image: '/products/hospital-furniture/stretcher-trolley.jpeg' },
      { name: 'Dialysis Chair', image: '/products/hospital-furniture/dialysis-chair.jpeg' },
      { name: 'OT Furniture', image: '/products/hospital-furniture/ot-table-furniture.jpeg' },
      { name: 'Examination Tables', image: '/products/hospital-furniture/examination-table.png' },
      { name: 'Trolleys', image: '/products/hospital-furniture/utility-trolley.png' },
      { name: 'Bedside Lockers', image: '/products/hospital-furniture/bedside-locker.png' },
      { name: 'Overbed Tables', image: '/products/hospital-furniture/overbed-table.png' },
      { name: 'Waiting Chairs', image: '/products/hospital-furniture/waiting-chair.png' },
      { name: 'Doctor Tables', image: '/products/hospital-furniture/doctor-table.png' },
      { name: 'Medicine Cabinets', image: '/products/hospital-furniture/medicine-cabinet.png' },
      { name: 'Instrument Cabinets', image: '/products/hospital-furniture/hf-instrument-cabinet.png' },
      { name: 'Stainless Steel Furniture', image: '/products/hospital-furniture/stainless-furniture.png' },
      { name: 'Ward Furniture', image: '/products/hospital-furniture/ward-furniture.png' },
      { name: 'ICU Furniture', image: '/products/hospital-furniture/icu-furniture.png' },
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
