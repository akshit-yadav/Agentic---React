import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Bot, MessageCircle, Zap } from "lucide-react";

export default function AIAgentLandingPage() {
  const [selectedChannel, setSelectedChannel] = useState("email");

  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="text-2xl font-bold">
          <span className="text-blue-600">SmartAgent</span> AI
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Try Free</Button>
        </div>
      </header>

      <main className="p-4 md:p-8 space-y-16">

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

        {/* Demo Section */}
        <section className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Try a Live Demo</h2>
          <p className="text-gray-600 dark:text-gray-300">See how our AI Sales Agent engages across different channels.</p>

          <div className="flex justify-center space-x-2 mb-4">
            <Button
              variant={selectedChannel === "email" ? "default" : "outline"}
              onClick={() => handleChannelChange("email")}
            >
              Email
            </Button>
            <Button
              variant={selectedChannel === "linkedin" ? "default" : "outline"}
              onClick={() => handleChannelChange("linkedin")}
            >
              LinkedIn
            </Button>
            <Button
              variant={selectedChannel === "whatsapp" ? "default" : "outline"}
              onClick={() => handleChannelChange("whatsapp")}
            >
              WhatsApp
            </Button>
          </div>

          <form className="space-y-4">
            {(selectedChannel === "email" || selectedChannel === "linkedin") && (
              <div className="flex items-center space-x-2">
                <input
                  type={selectedChannel === "email" ? "email" : "url"}
                  placeholder={selectedChannel === "email" ? "Enter your email" : "Enter your LinkedIn Profile URL"}
                  className="flex-1 p-3 border rounded-md text-black"
                />
                <Button type="submit" variant="secondary">Submit</Button>
              </div>
            )}
            {selectedChannel === "whatsapp" && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Give a missed call to <strong>+91-98765-43210</strong> to start the WhatsApp demo.
              </p>
            )}
          </form>
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

      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700">
        <p>© 2025 SmartAgent AI. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
}
