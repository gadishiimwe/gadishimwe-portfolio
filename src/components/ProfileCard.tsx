import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo: boolean;
  enableTilt: boolean;
  enableMobileTilt: boolean;
  onContactClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo,
  enableTilt,
  enableMobileTilt,
  onContactClick,
}) => {
  const cardClasses = `bg-card border border-border rounded-lg p-6 shadow-lg transition-transform duration-300 ${
    enableTilt ? 'hover:scale-105' : ''
  } ${enableMobileTilt ? 'md:hover:scale-105' : ''}`;

  return (
    <div className={cardClasses}>
      <div className="flex items-center space-x-4">
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="w-16 h-16 rounded-full border-2 border-border"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground">{name}</h2>
          <p className="text-muted-foreground">{title}</p>
          {showUserInfo && (
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm text-muted-foreground">@{handle}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {status}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <Button
          onClick={onContactClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Mail className="w-4 h-4 mr-2" />
          {contactText}
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
