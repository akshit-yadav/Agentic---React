
import './App.css';
import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { CheckCircle, Bot, MessageCircle, Zap } from "lucide-react";



function App() {
  const [selectedChannel, setSelectedChannel] = useState("email");
  const [annual, setAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      monthly: "$29/mo",
      yearly: "$290/yr",
      features: ["Up to 2 users", "Basic channels", "Email support"],
      cta: "Get Started",
    },
    {
      name: "Growth",
      monthly: "$59/mo",
      yearly: "$590/yr",
      features: ["Up to 10 users", "Multichannel SDR", "CRM + WhatsApp integration"],
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      monthly: "Custom",
      yearly: "Custom",
      features: ["Unlimited users", "All integrations", "Dedicated support"],
      cta: "Contact Us",
    },
  ];


  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
  };



  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 bg-white">
        <div className="text-2xl font-bold bg-white">
          <span className="text-black-600">SmartAgent</span> AI
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
          <p className="text-lg md:text-xl text-black">
            Automate conversations, follow up faster, and never miss a lead.
          </p>
          <div className="space-x-4">
            <Button className="text-lg px-6 py-3 text-white">Try It Now</Button>
            <Button variant="outlined" className="text-lg px-6 py-3" id="secret">Watch Demo</Button>

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

        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl space-y-4">
          <p className="text-left text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">For SDR Teams</p>
          <h2 className="text-left text-4xl font-bold">Automate Outreach with SDR AI Agent</h2>
          <p className="text-left  text-lg text-black">
            Smart, multi-channel automation to reach, qualify, and book meetings without human intervention.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center gap-2"><Bot className="w-5 h-5" /> WhatsApp for instant response</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-5 h-5" /> Web chat for live qualification</li>
            <li className="flex items-center gap-2"><Zap className="w-5 h-5" /> Email/LinkedIn for outbound</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> CRM sync for lead management</li>
          </ul>
          <div className="space-x-4 pt-4">
            <Button className="text-white text-md px-5 py-2">Try Now</Button>
            <Button variant="outline" className="text-white text-md px-5 py-2">Book Demo</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://onering.in/wp-content/uploads/2018/09/Survey-and-Feedback-min.png" alt="SDR AI Agent" className="rounded-xl shadow-xl w-full" />
        </div>
      </section>
      {/* Inside Sales AI Agent Section */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="max-w-xl space-y-4">
          <p className="text-sm text-left uppercase tracking-widest text-gray-500 dark:text-gray-400">For Inside Sales</p>
          <h2 className="text-left text-4xl font-bold">Close Deals Faster with Inside Sales AI Agent</h2>
          <p className="text-lg text-left text-black">
            From reminders to call logs and meeting booking, your reps can focus on talking while AI handles the rest.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-left flex items-center gap-2"><Bot className="w-5 h-5" /> Auto reminders on WhatsApp</li>
            <li className="text-left flex items-center gap-2"><MessageCircle className="w-5 h-5" /> Call & CRM updates instantly</li>
            <li className="text-left flex items-center gap-2"><Zap className="w-5 h-5" /> Follow-up emails that convert</li>
            <li className="text-left flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Integrated calendar for booking</li>
          </ul>
          <div className="space-x-4 pt-4">
            <Button className="text-white text-md px-5 py-2">Try Now</Button>
            <Button variant="outline" className="text-white text-md px-5 py-2">Book Demo</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://onering.in/wp-content/uploads/2018/08/Customer-Engagement.png" alt="Inside Sales AI Agent" className="rounded-xl shadow-xl w-full" />
        </div>
      </section>
      {/* SDR & Inside Sales AI Agent Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">SDR & Inside Sales AI Agents</h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
          Automate outreach, qualification, follow-ups, and calendar booking across multiple channels. Your sales team’s new favorite assistant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <Bot className="mx-auto w-10 h-10" />
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p>Instant replies, reminders & follow-ups over chat.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <MessageCircle className="mx-auto w-10 h-10" />
              <h3 className="text-xl font-semibold">Web Chat</h3>
              <p>Capture & qualify visitors 24/7 on your site.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <Zap className="mx-auto w-10 h-10" />
              <h3 className="text-xl font-semibold">Email & LinkedIn</h3>
              <p>Outbound campaigns with automated replies.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <CheckCircle className="mx-auto w-10 h-10" />
              <h3 className="text-xl font-semibold">CRM & Calendar</h3>
              <p>Auto-logging tasks and booking meetings.</p>
            </CardContent>
          </Card>
        </div>
      </section>



        {/* Demo Section */}
        <section className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Try a Live Demo</h2>
          <p className=" text-black">See how our AI Sales Agent engages across different channels.</p>

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
              <p className="text-sm text-black dark:text-black">
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
          <Button className="text-lg px-6 py-3 text-white">Start Free Trial</Button>
        </section>

        

        {/* Pricing Section */}
        <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Simple, transparent pricing</h2>
        <p className="text-black ">
          Choose a plan that fits your business
        </p>

        {/* Toggle Switch */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="text-sm">Monthly</span>
          <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
            <input
              id="billing-toggle"
              type="checkbox"
              className="sr-only peer"
              checked={annual}
              onChange={() => setAnnual(!annual)}
            />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 transition-colors duration-300 relative">
              <div className="absolute top-[2px] left-[2px] h-5 w-5 bg-white border rounded-full transition-all peer-checked:translate-x-full"></div>
            </div>
          </label>
          <span className="text-sm">Yearly</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">
                {annual ? plan.yearly : plan.monthly}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-black">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
        
        {/* FAQ Section */}
<section className="py-20 bg-gray-100">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {[
        {
          q: "What is an AI SDR Agent?",
          a: "An AI SDR Agent automates outreach and qualification tasks across multiple channels like WhatsApp, Email, and LinkedIn."
        },
        {
          q: "Can I use both SDR and Inside Sales agents together?",
          a: "Yes, you can combine both agents to create a seamless sales journey from outreach to demo booking."
        },
        {
          q: "What channels are supported?",
          a: "Our platform supports WhatsApp, Email, Voice, LinkedIn, and Webchat."
        },
        {
          q: "Do you offer custom enterprise plans?",
          a: "Absolutely! Reach out to us and we’ll tailor a solution that fits your needs."
        }
      ].map((item, i) => (
        <div key={i} className="bg-white  p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
          <p className="text-black">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="bg-white text-center text-sm py-6 border-t border-white">
        <p>© 2025 SmartAgent AI. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="/terms" className="hover:underline ">Terms</a>
          <a href="/privacy" className="hover:underline ">Privacy</a>
          <a href="/contact" className="hover:underline ">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;