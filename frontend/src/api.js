const API_BASE_URL = 'http://localhost:5000/api';

// Shipper APIs
export const createShipment = async (shipmentData) => {
  const response = await fetch(`${API_BASE_URL}/shipments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(shipmentData),
  });
  return response.json();
};

// Carrier APIs
export const getOpenShipments = async () => {
  const response = await fetch(`${API_BASE_URL}/carrier/shipments/open`);
  return response.json();
};

export const submitBid = async (bidData) => {
  const response = await fetch(`${API_BASE_URL}/bids`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bidData),
  });
  return response.json();
};

export const getCarrierBids = async (carrier_id) => {
  const response = await fetch(`${API_BASE_URL}/carrier/bids/${carrier_id}`);
  return response.json();
};