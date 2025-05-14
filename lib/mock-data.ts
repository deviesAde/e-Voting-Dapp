import { Candidate, Election } from "@/app/types";

// Mock candidates
export const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Anita Wijaya",
    party: "Partai Kesejahteraan Rakyat",
    position: "Presiden",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Bekerja untuk masa depan yang lebih baik dengan fokus pada pendidikan dan kesehatan.",
    voteCount: 245
  },
  {
    id: "2",
    name: "Budi Santoso",
    party: "Partai Pembangunan Bersatu",
    position: "Presiden",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Berkomitmen untuk pembangunan infrastruktur dan pertumbuhan ekonomi.",
    voteCount: 192
  },
  {
    id: "3",
    name: "Dian Purnama",
    party: "Partai Demokrasi Indonesia",
    position: "Gubernur",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Fokus pada lingkungan dan pembangunan berkelanjutan.",
    voteCount: 178
  },
  {
    id: "4",
    name: "Eko Prasetyo",
    party: "Partai Rakyat Bersatu",
    position: "Gubernur",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Berkomitmen untuk transparansi pemerintahan dan anti-korupsi.",
    voteCount: 156
  }
];

// Mock elections
export const mockElections: Election[] = [
  {
    id: "1",
    title: "Pemilihan Presiden 2025",
    description: "Pemilihan presiden untuk masa jabatan 2025-2030.",
    startDate: new Date("2025-04-17T00:00:00Z"),
    endDate: new Date("2025-04-17T23:59:59Z"),
    status: "upcoming",
    candidates: mockCandidates.filter(c => c.position === "Presiden")
  },
  {
    id: "2",
    title: "Pemilihan Gubernur DKI Jakarta 2024",
    description: "Pemilihan gubernur DKI Jakarta untuk masa jabatan 2024-2029.",
    startDate: new Date("2024-11-27T00:00:00Z"),
    endDate: new Date("2024-11-27T23:59:59Z"),
    status: "active",
    candidates: mockCandidates.filter(c => c.position === "Gubernur")
  }
];