import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { Icons } from './icons';
import ProfileCard from './ProfileCard';

function AppSidebar() {
  const [openGroup, setOpenGroup] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleOpenGroup = (groupName) => {
    setOpenGroup(openGroup === groupName ? null : groupName);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hireme@blockchaingg.com';
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-col lg:flex-row h-full">
      {/* Hamburger menu button visible on sm and md screens, hidden on lg and larger screens */}
      <button
        className="p-1 focus:outline-none fixed top-0 left-0 z-50 lg:hidden"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      <div
        className={`${
          isSidebarOpen ? "fixed inset-0 z-40" : "hidden"
        } lg:sticky lg:top-0 lg:block bg-white dark:bg-gray-800 lg:h-full overflow-y-auto w-64 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar aria-label="Sidebar with multi-level collapse">
          <Sidebar.Items>
            <div className="flex justify-center items-center w-full text-base font-normal text-gray-900 rounded-lg dark:text-white">
              <ProfileCard />
            </div>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse
                icon={Icons.InfoCircle}
                label="Overview"
                open={openGroup === 'overview'}
                onClick={() => toggleOpenGroup('overview')}
              >
                <Sidebar.Item>Professional Summary</Sidebar.Item>
                <Sidebar.Item>Skills & Interests</Sidebar.Item>
                <Sidebar.Item>Portfolio</Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse
                icon={Icons.Clipboard}
                label="Work History"
                open={openGroup === 'workHistory'}
                onClick={() => toggleOpenGroup('workHistory')}
              >
                <Sidebar.Item>Current</Sidebar.Item>
                <Sidebar.Item>Blockchain & Web3</Sidebar.Item>
                <Sidebar.Item>Corporate IT</Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse
                icon={Icons.Lock}
                label="Upcoming Projects"
                open={openGroup === 'upcomingProjects'}
                onClick={() => toggleOpenGroup('upcomingProjects')}
              >
                <Sidebar.Item href="#" target="_blank">OdysSEI</Sidebar.Item>
                <Sidebar.Item>Trading Bot</Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="https://twitter.com/Velcrafting"
                icon={Icons.Twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow Me
              </Sidebar.Item>
              <Sidebar.Item
                href="https://www.twitch.tv/velcrafting"
                icon={Icons.Movie}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitch Stream
              </Sidebar.Item>
              <Sidebar.Item
                href="https://www.amazon.com/Whispers-Wind-Crimson-Odyssey-Story-ebook/dp/B0CQ8YJ9WY"
                icon={Icons.BookOpen}
                target="_blank"
                rel="noopener noreferrer"
              >
                Crimson Odyssey
              </Sidebar.Item>
              <Sidebar.Item
                as="button"
                onClick={handleEmailClick}
                icon={Icons.BusinessTime}
              >
                Business Inquiries
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}

export default AppSidebar;
