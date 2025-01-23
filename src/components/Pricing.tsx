import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface PricingItem {
  title: string;
  price: string;
  details: string;
  defaultChecked?: boolean;
  minPrice?: number;
  maxPrice?: number;
  isMonthly?: boolean;
}

const pricingData: PricingItem[] = [
  {
    title: "Domain Name",
    price: "€15-30/year",
    details: "Registration and management of your domain name",
    minPrice: 15,
    maxPrice: 30,
    defaultChecked: true
  },
  {
    title: "Hosting",
    price: "€10-50/month",
    details: "Secure and reliable web hosting services",
    minPrice: 10,
    maxPrice: 50,
    isMonthly: true,
    defaultChecked: true
  },
  {
    title: "Content Writing and Integration",
    price: "€500-2000",
    details: "Professional content creation including texts, images, and videos (if required)",
    minPrice: 500,
    maxPrice: 2000
  },
  {
    title: "Design Package",
    price: "€1000-3000",
    details: "Logo design, mockup creation, and complete graphic charter",
    minPrice: 1000,
    maxPrice: 3000
  },
  {
    title: "SEO Optimization",
    price: "€500-1500",
    details: "Integrated SEO optimization for better visibility",
    minPrice: 500,
    maxPrice: 1500
  },
  {
    title: "Delivery Timeline",
    price: "Included",
    details: "Clear timeline including mockup validation, first version delivery, and final testing phases",
    minPrice: 0,
    maxPrice: 0,
    defaultChecked: true
  },
  {
    title: "Updates and Maintenance",
    price: "€100-300/month",
    details: "Regular updates and maintenance services",
    minPrice: 100,
    maxPrice: 300,
    isMonthly: true
  },
  {
    title: "Performance Management",
    price: "€200-500/month",
    details: "Continuous monitoring and optimization of website performance",
    minPrice: 200,
    maxPrice: 500,
    isMonthly: true
  },
  {
    title: "Additional Features",
    price: "Variable",
    details: `
      - Google My Business page setup: €200-500
      - CRM/ERP Integration: €500-2000
      - GDPR Cookie Management: €300-600
      - Domain Email Setup: €10-20/mailbox/month
      - Contact Forms: €100-300
      - Chatbot Integration: €300-1000
    `,
    minPrice: 0,
    maxPrice: 0
  },
  {
    title: "Payment Terms",
    price: "Flexible",
    details: "30% upfront, 40% at first version delivery, 30% upon completion",
    minPrice: 0,
    maxPrice: 0,
    defaultChecked: true
  },
  {
    title: "Post-Launch Support",
    price: "€150-300/month",
    details: "Dedicated support and assistance after website launch",
    minPrice: 150,
    maxPrice: 300,
    isMonthly: true
  }
];

const Pricing = () => {
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>({});
  const [totalOneTime, setTotalOneTime] = useState({ min: 0, max: 0 });
  const [totalMonthly, setTotalMonthly] = useState({ min: 0, max: 0 });

  useEffect(() => {
    // Initialize selected items with default checked items
    const initialSelected = pricingData.reduce((acc, item) => {
      acc[item.title] = item.defaultChecked || false;
      return acc;
    }, {} as { [key: string]: boolean });
    setSelectedItems(initialSelected);
  }, []);

  useEffect(() => {
    let oneTimeMin = 0;
    let oneTimeMax = 0;
    let monthlyMin = 0;
    let monthlyMax = 0;

    pricingData.forEach((item) => {
      if (selectedItems[item.title] && item.minPrice !== undefined && item.maxPrice !== undefined) {
        if (item.isMonthly) {
          monthlyMin += item.minPrice;
          monthlyMax += item.maxPrice;
        } else {
          oneTimeMin += item.minPrice;
          oneTimeMax += item.maxPrice;
        }
      }
    });

    setTotalOneTime({ min: oneTimeMin, max: oneTimeMax });
    setTotalMonthly({ min: monthlyMin, max: monthlyMax });
  }, [selectedItems]);

  const handleCheckboxChange = (title: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Devis Estimatif</h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {pricingData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Checkbox
                        checked={selectedItems[item.title] || false}
                        onCheckedChange={() => handleCheckboxChange(item.title)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className="flex-1">{item.title}</span>
                    </div>
                    <span className="text-primary font-semibold ml-4">{item.price}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <div className="whitespace-pre-line pl-10">{item.details}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Total Estimé</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Coûts uniques:</span>
                  <span className="font-semibold">
                    €{totalOneTime.min.toLocaleString()} - €{totalOneTime.max.toLocaleString()}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>Coûts mensuels:</span>
                  <span className="font-semibold">
                    €{totalMonthly.min.toLocaleString()} - €{totalMonthly.max.toLocaleString()}/mois
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;