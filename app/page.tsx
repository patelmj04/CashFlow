import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, CreditCard, LineChart, PieChart, Shield, Star, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-white">CashFlow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-300 hover:text-white">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" className="hidden md:flex text-black border-white">
                Log in
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="hidden md:flex bg-gradient text-white">Get Started</Button>
            </Link>
            <Link href="/dashboard" className="md:hidden">
              <Button size="sm" className="bg-gradient text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Take Control of Your Finances Today
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  A simple, intuitive way to manage your personal expenses and stay on top of your financial goals.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Everything You Need to <span className="text-gradient">Manage Your Money</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides powerful tools to help you track expenses, set budgets, and achieve your
                  financial goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="p-2 rounded-full bg-white/10 w-fit">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="mt-4 text-white">Track Expenses</CardTitle>
                  <CardDescription className="text-gray-400">Easily log and categorize your daily expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Keep track of where your money goes with detailed categorization and tagging. Understand your
                    spending patterns at a glance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="p-2 rounded-full bg-white/10 w-fit">
                    <LineChart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="mt-4 text-white">Visualize Trends</CardTitle>
                  <CardDescription className="text-gray-400">See your spending patterns with beautiful charts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Understand your financial habits through intuitive visualizations and spending breakdowns. Identify
                    areas for improvement.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="p-2 rounded-full bg-white/10 w-fit">
                    <PieChart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="mt-4 text-white">Set Budgets</CardTitle>
                  <CardDescription className="text-gray-400">Create and manage budgets for different categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Stay on track with your financial goals by setting and monitoring category-specific budgets. Get
                    alerts when you're close to limits.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="p-2 rounded-full bg-white/10 w-fit">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="mt-4 text-white">Secure Data</CardTitle>
                  <CardDescription className="text-gray-400">Your financial data is encrypted and secure</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    We use bank-level encryption to ensure your financial data is always protected. Your privacy is our
                    top priority.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="p-2 rounded-full bg-white/10 w-fit">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="mt-4 text-white">Financial Goals</CardTitle>
                  <CardDescription className="text-gray-400">Set and track your savings goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Create custom savings goals for big purchases, vacations, or emergencies. Track your progress and
                    celebrate milestones.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="p-2 rounded-full bg-white/10 w-fit">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="mt-4 text-white">Smart Insights</CardTitle>
                  <CardDescription className="text-gray-400">Get personalized financial insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Receive tailored recommendations based on your spending habits to help you save more and spend
                    wisely.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Screenshot Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Beautiful, <span className="text-gradient">Intuitive Interface</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our clean, modern design makes managing your finances a pleasure, not a chore.
                </p>
              </div>
            </div>
            <div className="mt-12 rounded-lg border bg-gray-900 p-2 shadow-lg">
              <div className="overflow-hidden rounded-lg border shadow-sm">
                <Image
                  src="/2placeholder.jpg?height=600&width=1200"
                  width={1200}
                  height={600}
                  alt="Dashboard screenshot"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  What Our <span className="text-gradient">Users Say</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what people are saying about CashFlow.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">JD</span>
                    </div>
                    <div>
                      <CardTitle className="text-white">Mit Patel</CardTitle>
                      <CardDescription className="text-gray-400">Freelancer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-gray-400">
                    "CashFlow has completely changed how I manage my finances. As a freelancer with irregular
                    income, I can now easily track my expenses and plan for taxes."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">SJ</span>
                    </div>
                    <div>
                      <CardTitle className="text-white">Harshi Patel</CardTitle>
                      <CardDescription className="text-gray-400">Small Business Owner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-gray-400">
                    "The budgeting features have helped me separate personal and business expenses. I've saved so much
                    time on bookkeeping and can focus on growing my business."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">MP</span>
                    </div>
                    <div>
                      <CardTitle className="text-white">Ankit Patel</CardTitle>
                      <CardDescription className="text-gray-400">Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-gray-400">
                    "As a student on a tight budget, this app has been a lifesaver. The visual charts help me see where
                    I'm overspending and make adjustments quickly."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Simple, <span className="text-gradient">Transparent Pricing</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your financial needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-white">Free</CardTitle>
                  <div className="mt-4 text-4xl font-bold text-white">
                    ₹0<span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                  <CardDescription className="mt-2 text-gray-400">Perfect for getting started</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Basic expense tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Up to 50 transactions/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Simple budget creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Basic reports</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard" className="w-full">
                    <Button className="w-full bg-white text-black hover:bg-gray-200">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-2 border-white bg-gray-900 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Premium</CardTitle>
                  <div className="mt-4 text-4xl font-bold text-white">
                    ₹999<span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                  <CardDescription className="mt-2 text-gray-400">For serious personal finance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Unlimited expense tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Advanced budgeting tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Detailed financial reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Goal tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Data export</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard" className="w-full">
                    <Button className="w-full bg-gradient text-white">Get Premium</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-2 border-white/10 bg-gray-900 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-white">Family</CardTitle>
                  <div className="mt-4 text-4xl font-bold text-white">
                    ₹1999<span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                  <CardDescription className="mt-2 text-gray-400">For households and families</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Everything in Premium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Up to 5 user accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Shared household expenses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Bill splitting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard" className="w-full">
                    <Button className="w-full bg-white text-black hover:bg-gray-200">Get Family Plan</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about CashFlow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 mt-8">
              <Card className="bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Is my financial data secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, we use bank-level encryption to protect your data. We never share your information with third
                    parties, and we don't store your bank credentials.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Can I import transactions from my bank?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, Premium and Family plans support secure bank connections to automatically import transactions
                    from thousands of financial institutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Can I use CashFlow on my phone?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    CashFlow is fully responsive and works on all devices. We also have native mobile apps for iOS
                    and Android.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">How do I cancel my subscription?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    You can cancel your subscription anytime from your account settings. If you cancel, you'll still
                    have access until the end of your billing period.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Do you offer a free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, we offer a 14-day free trial of our Premium plan so you can experience all the features before
                    committing.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Can I export my data?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, Premium and Family plans allow you to export your data in CSV or Excel format for your records
                    or tax purposes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who have transformed their financial habits with CashFlow.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-800 bg-black py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-white">CashFlow</span>
              </div>
              <p className="text-sm text-gray-400">
                Making personal finance simple and accessible for everyone.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2025 CashFlow. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}