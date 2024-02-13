import React from 'react';
import { Tabs, Blockquote } from 'flowbite-react';
import { Icons } from './icons';
import Current from './CurrentWork';
import { JobMedia } from './mediaAssets';

// Define the contents for each category, including subcategories
const workContents = [
  {
    title: "Current Work",
    description: "Overview of my current projects and focus areas.",
    icon: Icons.Fire,
    subcategories: [
      {
        name: 'nutel',
        title: "Designer, Developer & Researcher",
        company: "Nutel Solutions",
        dates: "August 2023-Present",
        tasks: [
          "Identify areas of opportunity to improve and otherwise optimize workflow.",
          "Research and implemented Figma into team's fullstack workflow.",
          "Enhanced sales team workflow by designing Figma-based informational materials.",
          "Developed a prototype internal AI tutor-agent for the financial team.",
          "Wrote process documentation for complex internal system workflow",
          
        ],
      },
      {
        name: 'crimson',
        title: "Co-Author, Designer, & Storyboarding", 
        company: "Crimson Odyssey",
        dates: "October 2023 - Present",
        tasks: [
          "Significantly improving workflow efficiency throughout the project through AI utilization.",
          "Deep immersion into Figma, and creation of AI sub-agents with extensive memory for continuity.",
          "Led story writing, and Storyboarding co-edited and curated drafts of Whispers Of The Wind pre-production.",
          "Successfully completed a full 50-page manga, 'Whispers Of The Wind',  in one month, achieving a 5 rating on Amazon.",

        ],
      },
      // More subcategories as needed
    ],
  },
  {
    title: "Blockchain & Web3 Experience",
    description: "Exploring my contributions to blockchain and Web3.",
    icon: Icons.Eth,
    subcategories: [
      {
        name: 'dopo',
        title: "Co-Founder", 
        company: "Community First (dopo)",
        dates: "December 2022 - July 2023",
        tasks: [
          "Executed talent acquisition and proficient vendor management.",
          "Spearheaded digital event coordination and innovative game design.",
          "Public speaking and formulated strategic social media plans for robust community engagement.",
          "Designed and implemented engaging mini-games, full-stack development, blockchain smart contract integration, technology coordination."
        ],
      },
      {
        name: 'chums',
        title: "Ownership Transition Assistance", 
        company: "Chum Chums",
        dates: "October 2022-February 2023",
        tasks: [
          "Assisted in compelling pitch deck design.",
          "Guided budget discussions & strategic funds utilization planning.",
          "Conducted in-depth research & successful applications for financial grants.",
          "Served as the team's copywriter, creating & maintaining all essential documents.",
          "Initiated creative ideation & coordination for digital events with blockchain integration."
        ],
      },
      {
        name: 'titan',
        title: "Lore & Game Design", 
        company: "Titanforge",
        dates: "August 2022-November 2022",
        tasks: [
          "Crafted intriguing staking game design.",
          "Co-authored a comprehensive Whitepaper.",
          "Authored and designed an immersive story and world atlas.",
          "Facilitated inter-team communications for efficient game implementation.",
          "Conceptualized a segmented leveling system with developers for a repeatable, enjoyable, risk-driven gaming experience."
        ],
      },
      {
        name: '1kin',
        title: "Game Design Consultant", 
        company: "1Kin Labs",
        dates: "February 2022-July 2022",
        tasks: [
          "Researched and developed sustainable game systems and tokenomics, ensuring a balanced gaming ecosystem.",
          "Constructed enticing lore for characters and in-game items and developed iterative launch strategies for future releases.",
          "Delivered a detailed Whitepaper for an anticipated play-to-earn blockchain game, utilized for successful fundraising efforts."
        ],
      },
      {
        name: 'fud',
        title: "Co-Founder", 
        company: "Fudderverse",
        dates: "August 2021-February 2022",
        tasks: [
          "Fostered community building & growth.",
          "Managed Discord channels & activity effectively.",
          "Served as the team's copywriter, creating and maintaining all key documents.",
          "Utilized public speaking skills & strategic social media planning for impactful community engagement."
        ],
      },
      // More subcategories as needed
    ],
  },
  {
    title: "Corporate IT",
    description: "Years of experience in managing corporate IT infrastructures; production, test, and lab environments.",
    icon: Icons.Shake,
    subcategories: [
      {
        name: 'maroone',
        title: "IT Director", 
        company: "Mike Maroone Automotive",
        dates: "June 2018 - April 2021",
        tasks: [
          "Collaborated with a local tech company for remote support while supervising on-site integrations and installations.",
          "Enhanced user satisfaction and efficiency through strategic system upgrades and bolstering support service speed and stability.",
          "Managed comprehensive IT operations, including astute budgeting, diligent maintenance, efficient help desk management, and nurturing vendor relationships.",
          "Spearheaded the company's digital transformation, seamlessly consolidating five satellite locations into a unified cloud-based network & VOIP telephony system."
        ],
      },
      {
        name: 'comcast',
        title: "Infrastructure & Implementation Engineer II", 
        company: "Comcast",
        dates: "September 2017 - April 2018",
        tasks: [
          "Delivered rapid troubleshooting and proactive ticket engagement.",
          "Efficiently fabricated, routed, and deployed coax/cat6/fiber connections.",
          "Developed comprehensive procedures & metrics for new ATS build and design.",
          "Coordinated effectively with the team leader for strategic project plan phase deployment.",
          "Accountable for the physical build & innovative design of automated test system server racks."
        ],
      },
      {
        name: 'jpmc',
        title: "Datacenter Infrastructure & Implementation Engineer", 
        company: "J.P Morgan Chase (Randstad)",
        dates: "September 2015 - September 2017",
        tasks: [
          "Managed the coordination, planning, & execution of data center projects.",
          "Organized destruction events for decommissioned data center equipment, leading core delivery logistics functions for data center operations.",
          "Oversaw the identification of operation plans, service-level agreements (SLAs), operational-level agreements (OLAs), & support models for platforms.",
          "Received & cataloged all incoming data center assets and supporting equipment; analyzed, developed, & modified various project documents as necessary."
        ],
      },
      // More subcategories as needed
    ],
  },
];

function AppCardWork() {
  return (
    <div className="py-4 sm:px-4 lg:px-4 xl:px-6">
      <Tabs className="w-full lg:max-w-none" aria-label="Full width Tabs">
        {workContents.map((category, index) => (
          <Tabs.Item key={index} title={category.title} icon={category.icon}>
            <Blockquote className=" bg-white text-black">
              {category.description}
            </Blockquote>
            <div className="grid grid-cols-1 gap-4 mt-5 bg-white sm:grid-cols-1 md:grid-cols-2">
              {category.subcategories.map((sub, subIndex) => {
                // Find the matching media entry
                const media = JobMedia.find(media => media.name === sub.name);
                const imageUrl = media ? media.url : "/placeholder.png";
                return (
                  <Current
                    key={subIndex}
                    title={sub.title}
                    company={sub.company}
                    dates={sub.dates}
                    tasks={sub.tasks}
                    image={imageUrl}
                  />
                );
              })}
            </div>
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  );
}


export default AppCardWork;
