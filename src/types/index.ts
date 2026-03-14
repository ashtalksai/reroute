export type FlightStatus = "on-time" | "delayed" | "cancelled" | "diverted";

export type ClaimStatus = "eligible" | "draft" | "submitted" | "in-progress" | "resolved";

export type DisruptionType = "delay" | "cancellation" | "denied-boarding" | "diversion";

export interface FlightData {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  date: string;
  status: FlightStatus;
  delayMinutes?: number;
  eligibleAmount?: number;
}

export interface ClaimData {
  id: string;
  flightNumber: string;
  airline: string;
  amount: number;
  status: ClaimStatus;
  disruptionType: DisruptionType;
  date: string;
}

export interface AlertData {
  id: string;
  type: "resolved" | "eligibility" | "update";
  title: string;
  description: string;
  timestamp: string;
}
