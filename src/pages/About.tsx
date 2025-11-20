import React from "react";
import { Package, MapPin, Clock, Truck } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About TrackIt
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for real-time package tracking and logistics management
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            At TrackIt, we're dedicated to providing seamless package tracking solutions
            that give you complete visibility and peace of mind. Our advanced tracking
            system monitors your shipments every step of the way, ensuring timely
            deliveries and real-time updates.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Package className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              10K+ Packages
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tracked daily worldwide
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              150+ Countries
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Global coverage
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
              <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Always here to help
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mb-4">
              <Truck className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              99.9% Uptime
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Reliable service
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Founded in 2024, TrackIt emerged from a simple idea: package tracking
              should be effortless and reliable. We noticed that customers were
              frustrated with complicated tracking interfaces and delayed updates.
            </p>
            <p>
              Our team of logistics experts and software engineers came together to
              create a solution that puts user experience first. Today, we serve
              thousands of customers worldwide, providing real-time tracking data
              with unprecedented accuracy and speed.
            </p>
            <p>
              We partner with major carriers and logistics providers to ensure you
              have access to the most comprehensive tracking information available.
              Our commitment to innovation drives us to continuously improve our
              platform and deliver the best tracking experience possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
