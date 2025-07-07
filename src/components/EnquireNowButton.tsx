
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

const EnquireNowButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/91XXXXXXXXXX?text=Hi, I would like to enquire about your services. Please provide more details.', '_blank');
    setIsExpanded(false);
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+91XXXXXXXXXX';
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <Card className="mb-4 p-4 glass-effect border-primary/20 animate-fade-in">
          <div className="space-y-3 min-w-[200px]">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">Contact Us</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="h-6 w-6 p-0"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppContact}
              className="w-full justify-start text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-950"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handlePhoneCall}
              className="w-full justify-start text-blue-600 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            
            <div className="text-xs text-muted-foreground">
              <div>Customer Care: +91-XXXXXXXXXX</div>
              <div>Available 24/7</div>
            </div>
          </div>
        </Card>
      )}
      
      <Button
        size="lg"
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-primary hover:bg-primary/90 text-white shadow-lg hover-lift rounded-full h-14 w-14 p-0"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </Button>
      
      {!isExpanded && (
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default EnquireNowButton;
