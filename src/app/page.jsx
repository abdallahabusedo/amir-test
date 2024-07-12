"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

// Import icons
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Input,
  Slider,
} from "@mui/material";
import { DollarSign, MapPin, Maximize, TrendingUp, Users } from "lucide-react";

// ... (keep the existing data generation functions)

const PropertyCard = ({
  property,
  onAddToCollection,
  isInCollection,
  onClick,
}) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card
      className="w-full max-w-sm cursor-pointer bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={() => onClick(property)}
    >
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <>
        <h1 className="text-blue-600">{property.name}</h1>
      </>
      <CardContent className="space-y-2">
        <div className="flex items-center">
          <DollarSign className="w-5 h-5 text-blue-500 mr-2" />
          <p>AED {property.price.toLocaleString()}</p>
        </div>
        <div className="flex items-center">
          <Maximize className="w-5 h-5 text-blue-500 mr-2" />
          <p>{property.size} sqm</p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-blue-500 mr-2" />
          <p>{property.location}</p>
        </div>
        <div className="flex items-center">
          <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
          <p>ROI: {property.roi}%</p>
        </div>
      </CardContent>
      <>
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCollection(property);
          }}
          disabled={isInCollection}
        >
          {isInCollection ? "Added to Collection" : "Add to Collection"}
        </Button>
      </>
    </Card>
  </motion.div>
);

const PropertyDetails = ({ property, onClose }) => (
  <Dialog open={true} onChange={onClose}>
    <DialogContent className="max-w-4xl bg-gradient-to-br from-blue-50 to-white">
      <>
        <h1 className="text-2xl text-blue-600">
          {property.name} - Financial Details
        </h1>
      </>
      <div className="grid gap-6">
        <div>
          <h3 className="text-lg font-semibold text-blue-500">Payment Plan</h3>
          <p className="mb-2">
            Down Payment: AED{" "}
            {property.paymentPlan.downPayment.toLocaleString()}
          </p>
          <div className="grid grid-cols-2 gap-2 bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-blue-600">Installment</div>
            <div className="font-bold text-blue-600">Due Date</div>
            {property.paymentPlan.installments.map((installment, index) => (
              <React.Fragment key={index}>
                <div>AED {installment.amount.toLocaleString()}</div>
                <div>{installment.dueDate}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-500">
            Financial Projections
          </h3>
          <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-blue-600">Year</div>
            <div className="font-bold text-blue-600">Property Value</div>
            <div className="font-bold text-blue-600">Rental Income</div>
            {property.financialProjections.map((projection, index) => (
              <React.Fragment key={index}>
                <div>{projection.year}</div>
                <div>AED {projection.propertyValue.toLocaleString()}</div>
                <div>AED {projection.rentalIncome.toLocaleString()}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const AgentSelection = ({ agents, onSelectAgent, onClose }) => (
  <Dialog open={true} onChange={onClose}>
    <DialogContent className="max-w-4xl bg-gradient-to-br from-blue-50 to-white">
      <>
        <h1 className="text-2xl text-blue-600">Select an Agent</h1>
      </>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => onSelectAgent(agent)}
            >
              <img
                src={agent.photo}
                alt={agent.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <>
                <h1 className="text-blue-600">{agent.name}</h1>
              </>
              <CardContent>
                <p className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-500" />
                  {agent.specialization}
                </p>
                <p className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
                  {agent.experience} years
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const PropertyMatchingApp = () => {
  const [budget, setBudget] = useState(5000000);
  const [size, setSize] = useState(100);
  const [location, setLocation] = useState("");
  const [matches, setMatches] = useState([]);
  const [collection, setCollection] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAgentSelection, setShowAgentSelection] = useState(false);
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    // Fetch initial data for properties and agents
    // This is just a placeholder. Replace with actual data fetching logic.
    setMatches([
      {
        id: 1,
        name: "Luxury Villa",
        image: "https://via.placeholder.com/150",
        price: 4500000,
        size: 250,
        location: "Dubai",
        roi: 8,
        paymentPlan: {
          downPayment: 450000,
          installments: [
            { amount: 50000, dueDate: "2023-08-01" },
            { amount: 50000, dueDate: "2023-09-01" },
          ],
        },
        financialProjections: [
          { year: 2023, propertyValue: 5000000, rentalIncome: 400000 },
          { year: 2024, propertyValue: 5200000, rentalIncome: 410000 },
        ],
      },
    ]);
    setAgents([
      {
        id: 1,
        name: "John Doe",
        photo: "https://via.placeholder.com/150",
        specialization: "Residential",
        experience: 5,
      },
    ]);
  }, []);

  const handleMatch = () => {
    // Example properties data (replace with actual data fetching logic)
    const allProperties = [
      {
        id: 1,
        name: "Luxury Villa",
        image: "https://via.placeholder.com/150",
        price: 4500000,
        size: 250,
        location: "Dubai",
        roi: 8,
        paymentPlan: {
          downPayment: 450000,
          installments: [
            { amount: 50000, dueDate: "2023-08-01" },
            { amount: 50000, dueDate: "2023-09-01" },
          ],
        },
        financialProjections: [
          { year: 2023, propertyValue: 5000000, rentalIncome: 400000 },
          { year: 2024, propertyValue: 5200000, rentalIncome: 410000 },
        ],
      },
      {
        id: 2,
        name: "Modern Apartment",
        image: "https://via.placeholder.com/150",
        price: 3000000,
        size: 150,
        location: "Abu Dhabi",
        roi: 6,
        paymentPlan: {
          downPayment: 300000,
          installments: [
            { amount: 40000, dueDate: "2023-08-01" },
            { amount: 40000, dueDate: "2023-09-01" },
          ],
        },
        financialProjections: [
          { year: 2023, propertyValue: 3200000, rentalIncome: 300000 },
          { year: 2024, propertyValue: 3400000, rentalIncome: 310000 },
        ],
      },
      // Add more properties as needed
    ];

    // Filter properties based on user's preferences
    const matchedProperties = allProperties.filter((property) => {
      const isWithinBudget = property.price <= budget;
      const isWithinSize = property.size >= size;
      const isMatchingLocation = property.location
        .toLowerCase()
        .includes(location.toLowerCase());

      return isWithinBudget && isWithinSize && isMatchingLocation;
    });

    // Update the matches state
    setMatches(matchedProperties);
  };

  const handleAddToCollection = (property) => {
    setCollection([...collection, property]);
  };

  const handleRemoveFromCollection = (propertyId) => {
    setCollection(collection.filter((p) => p.id !== propertyId));
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleAgentSelection = () => {
    setShowAgentSelection(true);
  };

  const handleSelectAgent = (agent) => {
    setSelectedAgent(agent);
    setShowAgentSelection(false);
    setShowContactForm(true);
  };

  const handleSubmitContactDetails = () => {
    // Placeholder for contact form submission logic
    setShowContactForm(false);
    setContactDetails({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">
        AI Property Matcher
      </h1>

      {/* Preferences Card */}
      <Card className="mb-8 shadow-lg">
        <>
          <h1 className="text-2xl text-blue-600">Your Preferences</h1>
        </>
        <CardContent className="space-y-6">
          <div>
            <p className="block mb-2 text-blue-600">
              Budget (AED): {budget.toLocaleString()}
            </p>
            <Slider
              min={1000000}
              max={10000000}
              step={100000}
              value={[budget]}
              onValueChange={(value) => setBudget(value[0])}
              className="text-blue-500"
            />
          </div>
          <div>
            <p className="block mb-2 text-blue-600">
              Minimum Size (sqm): {size}
            </p>
            <Slider
              min={50}
              max={500}
              step={10}
              value={[size]}
              onValueChange={(value) => setSize(value[0])}
              className="text-blue-500"
            />
          </div>
          <div>
            <p className="block mb-2 text-blue-600">Preferred Location:</p>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button
            onClick={handleMatch}
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            Find Matches
          </Button>
        </CardContent>
      </Card>

      {/* Matched Properties */}
      <Card className="mb-8 shadow-lg">
        <>
          <h1 className="text-2xl text-blue-600">Matched Properties</h1>
        </>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onAddToCollection={handleAddToCollection}
                isInCollection={collection.some((p) => p.id === property.id)}
                onClick={handlePropertyClick}
              />
            ))}
          </div>
          {matches.length === 0 && (
            <p className="text-center text-blue-600">
              No matches found. Try adjusting your preferences.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Collection */}
      <Card className="mb-8 shadow-lg">
        <>
          <h1 className="text-2xl text-blue-600">Your Collection</h1>
        </>
        <CardContent>
          {collection.map((property) => (
            <div
              key={property.id}
              className="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow"
            >
              <span className="text-blue-600">
                {property.name} - AED {property.price.toLocaleString()}
              </span>
              <Button
                variant="destructive"
                onClick={() => handleRemoveFromCollection(property.id)}
                className="bg-red-500 hover:bg-red-600 transition-colors duration-300"
              >
                Remove
              </Button>
            </div>
          ))}
          {collection.length === 0 && (
            <p className="text-center text-blue-600">
              Your collection is empty.
            </p>
          )}
        </CardContent>
        <>
          <Button
            onClick={handleAgentSelection}
            disabled={collection.length === 0}
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            Match with Real Estate Agents
          </Button>
        </>
      </Card>

      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {showAgentSelection && (
        <AgentSelection
          agents={agents}
          onSelectAgent={handleSelectAgent}
          onClose={() => setShowAgentSelection(false)}
        />
      )}

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onChange={setShowContactForm}>
        <DialogContent className="bg-gradient-to-br from-blue-50 to-white">
          <>
            <h1 className="text-2xl text-blue-600">
              Contact {selectedAgent?.name}
            </h1>
          </>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <p htmlFor="name" className="text-right text-blue-600">
                Name
              </p>
              <Input
                id="name"
                value={contactDetails.name}
                onChange={(e) =>
                  setContactDetails({ ...contactDetails, name: e.target.value })
                }
                className="col-span-3 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p htmlFor="email" className="text-right text-blue-600">
                Email
              </p>
              <Input
                id="email"
                type="email"
                value={contactDetails.email}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    email: e.target.value,
                  })
                }
                className="col-span-3 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p htmlFor="phone" className="text-right text-blue-600">
                Phone
              </p>
              <Input
                id="phone"
                type="tel"
                value={contactDetails.phone}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    phone: e.target.value,
                  })
                }
                className="col-span-3 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <>
            <Button
              onClick={handleSubmitContactDetails}
              className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </Button>
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyMatchingApp;
