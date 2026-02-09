export interface CodingProfile {
  name: string;
  icon: string;
  url: string;
  color: string;
  description: string;
}

export const profiles: CodingProfile[] = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com",
    color: "#7c3aed",
    description: "Open source contributions & projects",
  },
  {
    name: "LeetCode",
    icon: "code",
    url: "https://leetcode.com",
    color: "#f59e0b",
    description: "500+ problems solved",
  },
  {
    name: "CodeChef",
    icon: "chef-hat",
    url: "https://codechef.com",
    color: "#06b6d4",
    description: "Competitive programming",
  },
  {
    name: "HackerRank",
    icon: "terminal",
    url: "https://hackerrank.com",
    color: "#22c55e",
    description: "5-star in Problem Solving",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com",
    color: "#3b82f6",
    description: "Professional network & updates",
  },
];
