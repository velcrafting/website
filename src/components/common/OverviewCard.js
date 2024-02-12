
import { Tabs, List, Card, Carousel } from 'flowbite-react';
import { Icons } from './icons'
import React, { useState } from 'react';
import ModalCard from './ModalCard';
import { GraphicMedia, MultimediaMedia, DigitalMedia, PhysicalMedia, WebMedia } from './mediaAssets';



const cardContents = [
  { 
    title: "Graphic Design", 
    description: "Showcasing my latest graphic design projects. Utilizing blend of Ai, Canva, Procreate, & Adobe. ",
    modalContent: GraphicMedia,
  },
  { 
    title: "Web Design", 
    description: "Modern & responsive designs. Projects designed in Figma & Coded using Java, React, HTML, CSS, Tailwind.",
    modalContent: WebMedia,
  },
  { 
    title: "Multimedia", 
    description: "Multimedia projects including video editing and animation. Utilizing Adobe After Effects",
    modalContent: MultimediaMedia,
  },
  { 
    title: "Physical Art", 
    description: "Statues and figures made entirely from hook and loop. How I got the name Velcrafting!",
    modalContent: PhysicalMedia,
  },
  { 
    title: "Digital Art", 
    description: "Exploring digital landscapes and virtual creativity. Made using Procreate and/or Ai",
    modalContent: DigitalMedia,
  },
];

function AppCardOverview() {
    // State to control the active tab
    const [activeTab, setActiveTab] = useState('Professional Summary');

    // Function to change active tab
    const handleTabChange = (tabName) => {
      setActiveTab(tabName);
    };

    return (
      <div className="py-4 sm:px-4 lg:px-4 xl:px-6">
        <Tabs className="w-full lg:max-w-none" aria-label="Full width Tabs">
          <Tabs.Item active title="Professional Summary" icon={Icons.Profile}>
            <Card className="grid grid-cols-1 shadow">
      Dynamic and versatile IT professional with extensive experience in software development, blockchain technology, and game design. 
      Proven track record in project management, team coordination, and digital event organization, complemented by a strong aptitude for AI and Large Language Model (LLM) applications. Adept at community building and content production, particularly within tech-driven environments. Known for driving innovation and adapting to new technological challenges, I bring a unique blend of creative problem-solving and technical expertise, enhancing team capabilities and fostering project success. 
      My recent endeavors in AI, blockchain, and digital media showcase my commitment to continuous learning and staying at the forefront of technological advancement.
      </Card>
      </Tabs.Item>
      <Tabs.Item title="Skills" icon={Icons.News}>
      <Card className="grid grid-cols-1 text-black">
        <List>
          <List.Item style={{ color: 'black' }}><strong>Creative Skills:</strong> Manga comic series development, content creation, and design using tools like Figma and Canva.</List.Item>
          <List.Item style={{ color: 'black' }}><strong>Technical Skills:</strong> Blockchain Technology, AI and LLM Utilization, Figma Design, Software Development, Coding (Java, HTML, CSS, Python, C#).</List.Item>
          <List.Item style={{ color: 'black' }}><strong>Content Production:</strong> Experienced in Twitch stream management and producing engaging digital content across various platforms.</List.Item>
          <List.Item style={{ color: 'black' }}><strong>Community Building:</strong> Skilled in fostering and growing online communities, particularly in gaming and technology sectors.</List.Item>
          <List.Item style={{ color: 'black' }}><strong>Project Management:</strong> Experience in leading and coordinating projects, adept at streamlining processes for efficiency and effectiveness.</List.Item>
          <List.Item style={{ color: 'black' }}><strong>Digital Event Coordination:</strong> Proficient in organizing and executing digital events, including Twitch streaming and online showcases.</List.Item>
        </List>
        </Card>
      </Tabs.Item>

      {/* Left Card */}
      <Tabs.Item active title="Hobbies & Interests" icon={Icons.Game}>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
        <Card className="max-w-xl">
          <div className="flex flex-col items-center ">
            <img alt="Trophy image" src="/trophy.png" className="mb-3 h-28 w-28 rounded-full shadow" />
            <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">Competitive Gaming</h5>
              <span className="text-xs text-gray-500 dark:text-gray-400">Tournaments | Challenge Modes | Community </span>
            </div>
            <div className="text-center">
              Driven optimizer who takes on new challenges headfirst. Leading to global ranking among various highly competitive games.
            </div>
            <div>
              <List>
                <List.Item style={{ color: 'black' }}><strong>Speed Running Videogames</strong> with recorded leaderboard entries since June of 2019</List.Item>
                <List.Item style={{ color: 'black' }}><strong>Six World Records</strong> spanning various difficulties and challenges for Stubbs The Zombie In Rebel Without A Pulse, and Battleborn</List.Item>
                <List.Item style={{ color: 'black' }}><strong>Skills in optimization</strong> led me to be in the top 1% (or better) in highly competitive games such as Fortnite, League Of Legends, Halo 2, and Hearthstone</List.Item>
                <List.Item style={{ color: 'black' }}>
                  <strong>Community Building</strong> through finding similar minded competitive members and progressively building a Discord Server (
                  <a href="https://discord.gg/dBquUjTGpG" className="text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" rel="noopener noreferrer">here</a> 
                  ) to foster and support competitive environments. We host sponsored cash tournaments and Fortnite events at this time!
                </List.Item>
              </List>
            </div>
          </Card>
        {/* Right Card */}
        <Card className="max-w-xl">
          <div className="flex flex-col items-center ">
            <img alt="Crimson Odyssey image" src="/writing.png" className="mb-3 h-28 w-28 rounded-full shadow" />
            <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">Creative Writing</h5>
              <span className="text-xs text-gray-500 dark:text-gray-400">Comic & Manga | Tutorial & Informational | Journalistic </span>
            </div>
            <div className="text-center">
             A way with words, and translating topics from complex to more digestible. I find writing to be a great hobby and skill set!
            </div>
            <div>
              <List>
                  <List.Item style={{ color: 'black' }}><strong>Tutorial Content:</strong> professionally, and as part of content production as a hobby I have drafted various How-To or "Explain Like I'm 5" style content for many subject matters. While predominantly written content, I have produced video content for tutorials as well.</List.Item>
                  <List.Item style={{ color: 'black' }}><strong>Process Documentation:</strong> Companies have a myriad of objectives to accomplish and having proper process documentation helps ease the burden of task load for employess at all levels. I enjoy breaking down topics and building these documents.</List.Item>
                  <List.Item style={{ color: 'black' }}><strong>Journalistic:</strong> Over the last 3 years I have progressively worked on the ability to do transcrtiptions and synopsis for my 
                  <a href="https://twitter.com/Velcrafting" className="text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" rel="noopener noreferrer"> Twitter</a> audience, related to blockchain news, crypto, NFT, and gaming.</List.Item>
              </List>
            </div>
          </Card>
        </div>
      </Tabs.Item>
      <Tabs.Item title="Portfolio" icon={Icons.Art}>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
        {cardContents.map((content, index) => (
          <ModalCard
            key={index}
            title={content.title}
            description={content.description}
            modalContent={content.modalContent}
            />
          ))}
      </div>
      </Tabs.Item>
    </Tabs>
    </div>
  );
}
export default AppCardOverview;