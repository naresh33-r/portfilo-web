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
    url: "https://leetcode.com/u/nareshraina/",
    color: "#f59e0b",
    description: "100+ problems solved",
  },
  {
    name: "Geeksforgeeks",
    icon: "chef-hat",
    url: "https://www.geeksforgeeks.org/profile/nareshmar9ct3",
    color: "#06b6d4",
    description: "50+ problems solved",
  },
 
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/naresh448",
    color: "#3b82f6",
    description: "Professional network & updates",
  },
];
