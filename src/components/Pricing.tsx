import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const pricingData = [
  {
    title: "Domain Name",
    price: "€15-30/year",
    details: "Registration and management of your domain name"
  },
  {
    title: "Hosting",
    price: "€10-50/month",
    details: "Secure and reliable web hosting services"
  },
  {
    title: "Content Writing and Integration",
    price: "€500-2000",
    details: "Professional content creation including texts, images, and videos (if required)"
  },
  {
    title: "Design Package",
    price: "€1000-3000",
    details: "Logo design, mockup creation, and complete graphic charter"
  },
  {
    title: "SEO Optimization",
    price: "€500-1500",
    details: "Integrated SEO optimization for better visibility"
  },
  {
    title: "Delivery Timeline",
    price: "Included",
    details: "Clear timeline including mockup validation, first version delivery, and final testing phases"
  },
  {
    title: "Updates and Maintenance",
    price: "€100-300/month",
    details: "Regular updates and maintenance services"
  },
  {
    title: "Performance Management",
    price: "€200-500/month",
    details: "Continuous monitoring and optimization of website performance"
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
    `
  },
  {
    title: "Payment Terms",
    price: "Flexible",
    details: "30% upfront, 40% at first version delivery, 30% upon completion"
  },
  {
    title: "Post-Launch Support",
    price: "€150-300/month",
    details: "Dedicated support and assistance after website launch"
  }
];

const Pricing = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Details</h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {pricingData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex justify-between">
                    <span className="flex-1">{item.title}</span>
                    <span className="text-primary font-semibold ml-4">{item.price}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <div className="whitespace-pre-line">{item.details}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;