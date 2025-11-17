export interface TrackingEvent {
  timestamp: string;
  location: string;
  status: string;
  description: string;
}

export interface TrackingData {
  id: string;
  status: "In Transit" | "Delivered" | "Delayed" | "Processing" | "Out for Delivery";
  location: string;
  eta: string;
  lastUpdated: string;
  progress: number;
  origin: string;
  destination: string;
  carrier: string;
  weight: string;
  timeline: TrackingEvent[];
}

export const mockTrackingData: Record<string, TrackingData> = {
  ABC123: {
    id: "ABC123",
    status: "In Transit",
    location: "Douala Regional Hub",
    eta: "Nov 20, 2025",
    lastUpdated: "2 hours ago",
    progress: 65,
    origin: "Lagos, Nigeria",
    destination: "Yaoundé, Cameroon",
    carrier: "DHL Express",
    weight: "2.5 kg",
    timeline: [
      {
        timestamp: "Nov 17, 2025 09:45 AM",
        location: "Douala Regional Hub",
        status: "In Transit",
        description: "Package arrived at regional sorting facility",
      },
      {
        timestamp: "Nov 16, 2025 06:20 PM",
        location: "Douala Airport",
        status: "In Transit",
        description: "Customs clearance completed",
      },
      {
        timestamp: "Nov 16, 2025 02:15 PM",
        location: "Lagos Airport",
        status: "In Transit",
        description: "Departed from origin facility",
      },
      {
        timestamp: "Nov 15, 2025 11:30 AM",
        location: "Lagos Processing Center",
        status: "Processing",
        description: "Package received and processed",
      },
    ],
  },
  XYZ789: {
    id: "XYZ789",
    status: "Delivered",
    location: "Yaoundé - Customer Received",
    eta: "Nov 15, 2025",
    lastUpdated: "2 days ago",
    progress: 100,
    origin: "Paris, France",
    destination: "Yaoundé, Cameroon",
    carrier: "FedEx International",
    weight: "1.2 kg",
    timeline: [
      {
        timestamp: "Nov 15, 2025 05:30 PM",
        location: "Yaoundé, Cameroon",
        status: "Delivered",
        description: "Package delivered and signed by recipient",
      },
      {
        timestamp: "Nov 15, 2025 08:15 AM",
        location: "Yaoundé Distribution Center",
        status: "Out for Delivery",
        description: "Out for delivery",
      },
      {
        timestamp: "Nov 14, 2025 03:45 PM",
        location: "Yaoundé Airport",
        status: "In Transit",
        description: "Arrived at destination airport",
      },
      {
        timestamp: "Nov 13, 2025 10:20 AM",
        location: "Paris Charles de Gaulle",
        status: "In Transit",
        description: "Departed from origin",
      },
    ],
  },
  DEF456: {
    id: "DEF456",
    status: "Delayed",
    location: "Bafoussam Distribution Center",
    eta: "Nov 22, 2025 (Delayed)",
    lastUpdated: "1 hour ago",
    progress: 45,
    origin: "Dubai, UAE",
    destination: "Bafoussam, Cameroon",
    carrier: "Aramex",
    weight: "3.4 kg",
    timeline: [
      {
        timestamp: "Nov 17, 2025 11:15 AM",
        location: "Bafoussam Distribution Center",
        status: "Delayed",
        description: "Shipment delayed due to weather conditions",
      },
      {
        timestamp: "Nov 16, 2025 08:30 AM",
        location: "Douala Transit Hub",
        status: "In Transit",
        description: "Package arrived at transit hub",
      },
      {
        timestamp: "Nov 15, 2025 11:45 PM",
        location: "Dubai International Hub",
        status: "In Transit",
        description: "Departed from origin",
      },
    ],
  },
  GHI012: {
    id: "GHI012",
    status: "In Transit",
    location: "Limbe Port Facility",
    eta: "Nov 19, 2025",
    lastUpdated: "30 minutes ago",
    progress: 80,
    origin: "London, UK",
    destination: "Limbe, Cameroon",
    carrier: "UPS Worldwide",
    weight: "5.1 kg",
    timeline: [
      {
        timestamp: "Nov 17, 2025 12:30 PM",
        location: "Limbe Port Facility",
        status: "In Transit",
        description: "Package cleared port customs",
      },
      {
        timestamp: "Nov 16, 2025 04:20 PM",
        location: "Douala Port",
        status: "In Transit",
        description: "Arrived at port facility",
      },
      {
        timestamp: "Nov 14, 2025 09:00 AM",
        location: "London Heathrow",
        status: "In Transit",
        description: "Departed from United Kingdom",
      },
    ],
  },
  JKL345: {
    id: "JKL345",
    status: "Out for Delivery",
    location: "Douala Local Courier",
    eta: "Nov 17, 2025",
    lastUpdated: "15 minutes ago",
    progress: 95,
    origin: "Accra, Ghana",
    destination: "Douala, Cameroon",
    carrier: "DHL Express",
    weight: "1.8 kg",
    timeline: [
      {
        timestamp: "Nov 17, 2025 07:00 AM",
        location: "Douala Local Courier",
        status: "Out for Delivery",
        description: "Package is on the delivery vehicle",
      },
      {
        timestamp: "Nov 16, 2025 09:30 PM",
        location: "Douala Distribution Center",
        status: "In Transit",
        description: "Arrived at local distribution center",
      },
      {
        timestamp: "Nov 16, 2025 02:45 PM",
        location: "Accra Regional Hub",
        status: "In Transit",
        description: "Package departed from origin country",
      },
    ],
  },
  MNO678: {
    id: "MNO678",
    status: "Processing",
    location: "Yaoundé Processing Center",
    eta: "Nov 24, 2025",
    lastUpdated: "3 hours ago",
    progress: 20,
    origin: "Johannesburg, South Africa",
    destination: "Yaoundé, Cameroon",
    carrier: "TNT Express",
    weight: "7.2 kg",
    timeline: [
      {
        timestamp: "Nov 17, 2025 08:30 AM",
        location: "Yaoundé Processing Center",
        status: "Processing",
        description: "Package is being processed for delivery",
      },
      {
        timestamp: "Nov 16, 2025 03:15 PM",
        location: "Johannesburg Pickup Point",
        status: "Processing",
        description: "Package picked up from sender",
      },
    ],
  },
  PQR901: {
    id: "PQR901",
    status: "In Transit",
    location: "Nairobi Transit Hub",
    eta: "Nov 21, 2025",
    lastUpdated: "5 hours ago",
    progress: 55,
    origin: "Nairobi, Kenya",
    destination: "Douala, Cameroon",
    carrier: "EMS Courier",
    weight: "2.9 kg",
    timeline: [
      {
        timestamp: "Nov 17, 2025 06:20 AM",
        location: "Nairobi Transit Hub",
        status: "In Transit",
        description: "Package in transit through regional hub",
      },
      {
        timestamp: "Nov 16, 2025 07:45 PM",
        location: "Nairobi International Airport",
        status: "In Transit",
        description: "Cleared for international shipping",
      },
    ],
  },
  STU234: {
    id: "STU234",
    status: "Delivered",
    location: "Douala - Left at reception",
    eta: "Nov 14, 2025",
    lastUpdated: "3 days ago",
    progress: 100,
    origin: "Brussels, Belgium",
    destination: "Douala, Cameroon",
    carrier: "FedEx International",
    weight: "0.9 kg",
    timeline: [
      {
        timestamp: "Nov 14, 2025 02:15 PM",
        location: "Douala, Cameroon",
        status: "Delivered",
        description: "Package delivered - left at reception desk",
      },
      {
        timestamp: "Nov 14, 2025 09:00 AM",
        location: "Douala Distribution Center",
        status: "Out for Delivery",
        description: "Out for delivery",
      },
      {
        timestamp: "Nov 13, 2025 06:30 PM",
        location: "Douala Airport",
        status: "In Transit",
        description: "Customs clearance completed",
      },
      {
        timestamp: "Nov 12, 2025 11:00 AM",
        location: "Brussels Airport",
        status: "In Transit",
        description: "Departed from Belgium",
      },
    ],
  },
};
