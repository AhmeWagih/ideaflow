'use client';
import { BookOpen, FolderPlus, Share2, Star, Grid } from 'lucide-react';

export const SideBarItems = (userId: string) => [
  {
    title: 'My diagrams',
    href: userId ? `/profile/${userId}/my-diagrams` : '/profile/my-diagrams',
    icon: BookOpen,
  },
  {
    title: 'Shared with me',
    href: userId ? `/profile/${userId}/shared` : '/profile/shared',
    icon: Share2,
  },
  {
    title: 'Create new folder',
    href: userId
      ? `/profile/${userId}/create-folder`
      : '/profile/create-folder',
    icon: FolderPlus,
  },
  {
    title: 'My favorites',
    href: userId ? `/profile/${userId}/favorites` : '/profile/favorites',
    icon: Star,
  },
  {
    title: 'Browse templates',
    href: userId ? `/profile/${userId}/templates` : '/profile/templates',
    icon: Grid,
  },
];
