'use client';
import { BookOpen, FolderPlus, Share2, Star, Grid } from 'lucide-react';

export const SideBarItems = (userID: string) => [
  {
    title: 'My diagrams',
    href: `/profile/${userID}/diagrams`,
    icon: BookOpen,
  },
  {
    title: 'Shared with me',
    href: `/profile/${userID}/shared`,
    icon: Share2,
  },
  {
    title: 'Create new folder',
    href: `/profile/${userID}/create-folder`,
    icon: FolderPlus,
  },
  {
    title: 'My favorites',
    href: `/profile/${userID}/favorites`,
    icon: Star,
  },
  {
    title: 'Browse templates',
    href: `/profile/${userID}/templates`,
    icon: Grid,
  },
];

export const AiModels = [
  {
    name: 'DeepSeek',
    value: 0,
    iconPath: '/deepseek.svg',
  },
  {
    name: 'Gemini',
    value: 1,
    iconPath: '/gemini.svg',
  },
];
