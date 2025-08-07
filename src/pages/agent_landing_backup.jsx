import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Bot, MessageCircle, Zap } from "lucide-react";

export default function AIAgentLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Meet Your Always-On AI Agent</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Automate conversations, follow up faster, and never miss a lead.
        </p>
        <div className="space-x-4">
          <Button className="text-lg px-6 py-3">Try It Now</Button>
          <Button variant="outline" className="text-lg px-6 py-3">Watch Demo</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <Card>
          <CardContent className="p-6 space-y-2">
            <Bot className="mx-auto w-10 h-10" />
            <h3 className="text-xl font-semibold">Automated Chat</h3>
            <p>Respond to leads 24/7 on web, WhatsApp & more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-2">
            <MessageCircle className="mx-auto w-10 h-10" />
            <h3 className="text-xl font-semibold">Contextual Follow-ups</h3>
            <p>Bring back lost leads with smart replies.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-2">
            <Zap className="mx-auto w-10 h-10" />
            <h3 className="text-xl font-semibold">CRM Integration</h3>
            <p>Connect with HubSpot, Salesforce, and others.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-2">
            <CheckCircle className="mx-auto w-10 h-10" />
            <h3 className="text-xl font-semibold">Easy Setup</h3>
            <p>No coding. Start in under 5 minutes.</p>
          </CardContent>
        </Card>
      </section>
      {/* How It Works */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">1. Connect</h3>
              <p>Plug in your CRM or data source.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">2. Activate</h3>
              <p>Enable the AI agent on your website, email, or chat.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">3. Optimize</h3>
              <p>Review responses and improve performance over time.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Save Time & Win More Leads?</h2>
        <Button className="text-lg px-6 py-3">Start Free Trial</Button>
      </section>
      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 pt-12 border-t border-gray-200 dark:border-gray-700">
        <p>© 2025 SmartAgent AI. All rights reserved.</p>
      </footer>
    </div>
  );
}