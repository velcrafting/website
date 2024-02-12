import React from 'react';
import { FaInfoCircle, FaUserAlt, FaClipboard, FaBookOpen, FaLock, FaTwitter, FaBusinessTime, FaGamepad, FaGhost, FaHandshake, FaHotjar, FaPalette, FaTwitch, FaYoutube, FaTrophy, FaChild, FaRegNewspaper } from 'react-icons/fa';
import { HiArrowSmRight, HiChartPie } from 'react-icons/hi';
import { MdMovie } from 'react-icons/md';
import { SiEthereum } from "react-icons/si";

// Custom icon component with color
const IconWithColor = ({ IconComponent, colorClass }) => (
  <IconComponent className={colorClass} />
);

export const Icons = {
  InfoCircle: (props) => <IconWithColor IconComponent={FaInfoCircle} {...props} />,
  UserAlt: (props) => <IconWithColor IconComponent={FaUserAlt} {...props} />,
  ArrowSmRight: (props) => <IconWithColor IconComponent={HiArrowSmRight} {...props} />,
  ChartPie: (props) => <IconWithColor IconComponent={HiChartPie} {...props} />,
  Clipboard: (props) => <IconWithColor IconComponent={FaClipboard} {...props} />,
  BookOpen: (props) => <IconWithColor IconComponent={FaBookOpen} colorClass="text-red-500" {...props} />,
  Lock: (props) => <IconWithColor IconComponent={FaLock} {...props} />,
  Twitter: (props) => <IconWithColor IconComponent={FaTwitter} colorClass="text-blue-500" {...props} />,
  Movie: (props) => <IconWithColor IconComponent={MdMovie} colorClass="text-purple-500" {...props} />,
  BusinessTime: (props) => <IconWithColor IconComponent={FaBusinessTime} {...props} />,
  Game: (props) => <IconWithColor IconComponent={FaGamepad} {...props} />,
  Ghost: (props) => <IconWithColor IconComponent={FaGhost} {...props} />,
  Shake: (props) => <IconWithColor IconComponent={FaHandshake} {...props} />,
  Fire: (props) => <IconWithColor IconComponent={FaHotjar} {...props} />,
  Art: (props) => <IconWithColor IconComponent={FaPalette} colorClass="text-brown-500" {...props} />,
  Twitch: (props) => <IconWithColor IconComponent={FaTwitch} {...props} />,
  Youtube: (props) => <IconWithColor IconComponent={FaYoutube} {...props} />,
  Trophy: (props) => <IconWithColor IconComponent={FaTrophy} colorClass="text-yellow-500" {...props} />,
  Eth: (props) => <IconWithColor IconComponent={SiEthereum} {...props} />,
  Profile: (props) => <IconWithColor IconComponent={FaChild} {...props} />,
  News: (props) => <IconWithColor IconComponent={FaRegNewspaper} {...props} />,
  // Add more icons as needed
};
