"use client";
import {
  DollarSign,
  Maximize,
  MapPin,
  TrendingUp,
  Users,
  Sliders,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Slider,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const PropertyCard = ({
  property,
  onAddToCollection,
  isInCollection,
  onClick,
}: any) => (
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
      <CardHeader>
        <h1 className="text-blue-600">{property.name}</h1>
      </CardHeader>
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
      <CardContent>
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
      </CardContent>
    </Card>
  </motion.div>
);

const PropertyDetails = ({ property, onClose }: any) => (
  <Dialog open={true} onClose={onClose}>
    <DialogContent className="max-w-4xl bg-gradient-to-br from-blue-50 to-white">
      <DialogTitle className="text-2xl text-blue-600">
        {property.name} - Financial Details
      </DialogTitle>
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
            {property.paymentPlan.installments.map(
              (installment: any, index: number) => (
                <React.Fragment key={index}>
                  <div>AED {installment.amount.toLocaleString()}</div>
                  <div>{installment.dueDate}</div>
                </React.Fragment>
              )
            )}
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
            {property.financialProjections.map(
              (projection: any, index: number) => (
                <React.Fragment key={index}>
                  <div>{projection.year}</div>
                  <div>AED {projection.propertyValue.toLocaleString()}</div>
                  <div>AED {projection.rentalIncome.toLocaleString()}</div>
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const AgentSelection = ({ agents, onSelectAgent, onClose }: any) => (
  <Dialog open={true} onClose={onClose}>
    <DialogContent className="max-w-4xl bg-gradient-to-br from-blue-50 to-white">
      <DialogTitle className="text-2xl text-blue-600">
        Select an Agent
      </DialogTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent: any) => (
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
              <CardHeader>
                <h1 className="text-blue-600">{agent.name}</h1>
              </CardHeader>
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
  const [matches, setMatches] = useState<any[]>([]);
  const [collection, setCollection] = useState<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAgentSelection, setShowAgentSelection] = useState(false);
  const [agents, setAgents] = useState<any[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
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
    // Placeholder for matching logic
    // Update the matches state based on user preferences
  };

  const handleAddToCollection = (property: any) => {
    setCollection([...collection, property]);
  };

  const handleRemoveFromCollection = (propertyId: any) => {
    setCollection(collection.filter((p: any) => p.id !== propertyId));
  };

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
  };

  const handleAgentSelection = () => {
    setShowAgentSelection(true);
  };

  const handleSelectAgent = (agent: any) => {
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

      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <h1 className="text-2xl text-blue-600">Your Preferences</h1>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h1 className="block mb-2 text-blue-600">
              Budget (AED): {budget.toLocaleString()}
            </h1>
            <Slider
              min={1000000}
              max={10000000}
              step={100000}
              value={budget}
              onChange={(e, value: any) => setBudget(value)}
              className="text-blue-500"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-blue-600">
              Minimum Size (sqm): {size}
            </h1>
            <Slider
              min={50}
              max={500}
              step={10}
              value={size}
              onChange={(e, value: any) => setSize(value)}
              className="text-blue-500"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-blue-600">Preferred Location:</h1>
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

      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <h1 className="text-2xl text-blue-600">Matched Properties</h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onAddToCollection={handleAddToCollection}
                isInCollection={collection.some(
                  (p: any) => p.id === property.id
                )}
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

      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <h1 className="text-2xl text-blue-600">Your Collection</h1>
        </CardHeader>
        <CardContent>
          {collection.map((property: any) => (
            <div
              key={property.id}
              className="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow"
            >
              <span className="text-blue-600">
                {property.name} - AED {property.price.toLocaleString()}
              </span>
              <Button
                // variant="destructive"
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
        <Button
          onClick={handleAgentSelection}
          disabled={collection.length === 0}
          className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
        >
          Match with Real Estate Agents
        </Button>
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

      <Dialog open={showContactForm} onClose={() => setShowContactForm(false)}>
        <DialogContent className="bg-gradient-to-br from-blue-50 to-white">
          <h1>
            <DialogTitle className="text-2xl text-blue-600">
              Contact {selectedAgent?.name}
            </DialogTitle>
          </h1>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <h1 className="text-right text-blue-600">Name</h1>
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
              <h1 className="text-right text-blue-600">Email</h1>
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
              <h1 className="text-right text-blue-600">Phone</h1>
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
          <Button
            onClick={handleSubmitContactDetails}
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyMatchingApp;
